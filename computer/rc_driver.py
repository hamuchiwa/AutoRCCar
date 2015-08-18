__author__ = 'zhengwang'

import threading
import SocketServer
import serial
import cv2
import numpy as np
import math

# distance data measured by ultrasonic sensor
sensor_data = " "


class NeuralNetwork(object):

    def __init__(self):
        self.model = cv2.ANN_MLP()

    def create(self):
        layer_size = np.int32([38400, 32, 4])
        self.model.create(layer_size)
        self.model.load('mlp_xml/mlp.xml')

    def predict(self, samples):
        ret, resp = self.model.predict(samples)
        return resp.argmax(-1)


class RCControl(object):

    def __init__(self):
        self.serial_port = serial.Serial('/dev/tty.usbmodem1421', 115200, timeout=1)

    def steer(self, prediction):
        if prediction == 2:
            self.serial_port.write(chr(1))
            print("Forward")
        elif prediction == 0:
            self.serial_port.write(chr(7))
            print("Left")
        elif prediction == 1:
            self.serial_port.write(chr(6))
            print("Right")
        else:
            self.stop()

    def stop(self):
        self.serial_port.write(chr(0))


class DistanceToCamera(object):

    def __init__(self):
        # camera params
        self.alpha = 8.0 * math.pi / 180
        self.v0 = 119.865631204
        self.ay = 332.262498472

    def calculate(self, v, h, x_shift, image):
        # compute and return the distance from the target point to the camera
        d = h / math.tan(self.alpha + math.atan((v - self.v0) / self.ay))
        if d > 0:
            cv2.putText(image, "%.1fcm" % d,
                (image.shape[1] - x_shift, image.shape[0] - 20), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
        return d


class ObjectDetection(object):

    def __init__(self):
        self.red_light = False
        self.green_light = False
        self.yellow_light = False

    def detect(self, cascade_classifier, gray_image, image):

        # y camera coordinate of the target point 'P'
        v = 0

        # minimum value to proceed traffic light state validation
        threshold = 150     
        
        # detection
        cascade_obj = cascade_classifier.detectMultiScale(
            gray_image,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30),
            flags=cv2.cv.CV_HAAR_SCALE_IMAGE
        )

        # draw a rectangle around the objects
        for (x_pos, y_pos, width, height) in cascade_obj:
            cv2.rectangle(image, (x_pos+5, y_pos+5), (x_pos+width-5, y_pos+height-5), (255, 255, 255), 2)
            v = y_pos + height - 5
            #print(x_pos+5, y_pos+5, x_pos+width-5, y_pos+height-5, width, height)

            # stop sign
            if width/height == 1:
                cv2.putText(image, 'STOP', (x_pos, y_pos-10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
            
            # traffic lights
            else:
                roi = gray_image[y_pos+10:y_pos + height-10, x_pos+10:x_pos + width-10]
                mask = cv2.GaussianBlur(roi, (25, 25), 0)
                (minVal, maxVal, minLoc, maxLoc) = cv2.minMaxLoc(mask)
                
                # check if light is on
                if maxVal - minVal > threshold:
                    cv2.circle(roi, maxLoc, 5, (255, 0, 0), 2)
                    
                    # Red light
                    if 1.0/8*(height-30) < maxLoc[1] < 4.0/8*(height-30):
                        cv2.putText(image, 'Red', (x_pos+5, y_pos-5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
                        self.red_light = True
                    
                    # Green light
                    elif 5.5/8*(height-30) < maxLoc[1] < height-30:
                        cv2.putText(image, 'Green', (x_pos+5, y_pos - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                        self.green_light = True
    
                    # yellow light
                    #elif 4.0/8*(height-30) < maxLoc[1] < 5.5/8*(height-30):
                    #    cv2.putText(image, 'Yellow', (x_pos+5, y_pos - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 255), 2)
                    #    self.yellow_light = True
        return v


class SensorDataHandler(SocketServer.BaseRequestHandler):

    data = " "

    def handle(self):
        global sensor_data
        try:
            while self.data:
                self.data = self.request.recv(1024)
                sensor_data = round(float(self.data), 1)
                #print "{} sent:".format(self.client_address[0])
                print sensor_data
        finally:
            print "Connection closed on thread 2"


class VideoStreamHandler(SocketServer.StreamRequestHandler):

    # h1: stop sign
    h1 = 15.5 - 10  # cm
    # h2: traffic light
    h2 = 15.5 - 10

    # create neural network
    model = NeuralNetwork()
    model.create()

    obj_detection = ObjectDetection()
    rc_car = RCControl()

    # cascade classifiers
    stop_cascade = cv2.CascadeClassifier('cascade_xml/stop_sign.xml')
    light_cascade = cv2.CascadeClassifier('cascade_xml/traffic_light.xml')

    d_to_camera = DistanceToCamera()
    d_stop_sign = 25
    d_light = 25

    stop_start = 0              # start time when stop at the stop sign
    stop_finish = 0
    stop_time = 0
    drive_time_after_stop = 0

    def handle(self):

        global sensor_data
        stream_bytes = ' '
        stop_flag = False
        stop_sign_active = True

        # stream video frames one by one
        try:
            while True:
                stream_bytes += self.rfile.read(1024)
                first = stream_bytes.find('\xff\xd8')
                last = stream_bytes.find('\xff\xd9')
                if first != -1 and last != -1:
                    jpg = stream_bytes[first:last+2]
                    stream_bytes = stream_bytes[last+2:]
                    gray = cv2.imdecode(np.fromstring(jpg, dtype=np.uint8), cv2.CV_LOAD_IMAGE_GRAYSCALE)
                    image = cv2.imdecode(np.fromstring(jpg, dtype=np.uint8), cv2.CV_LOAD_IMAGE_UNCHANGED)

                    # lower half of the image
                    half_gray = gray[120:240, :]

                    # object detection
                    v_param1 = self.obj_detection.detect(self.stop_cascade, gray, image)
                    v_param2 = self.obj_detection.detect(self.light_cascade, gray, image)

                    # distance measurement
                    if v_param1 > 0 or v_param2 > 0:
                        d1 = self.d_to_camera.calculate(v_param1, self.h1, 300, image)
                        d2 = self.d_to_camera.calculate(v_param2, self.h2, 100, image)
                        self.d_stop_sign = d1
                        self.d_light = d2

                    cv2.imshow('image', image)
                    #cv2.imshow('mlp_image', half_gray)

                    # reshape image
                    image_array = half_gray.reshape(1, 38400).astype(np.float32)
                    
                    # neural network makes prediction
                    prediction = self.model.predict(image_array)

                    # stop conditions
                    if sensor_data is not None and sensor_data < 30:
                        print("Stop, obstacle in front")
                        self.rc_car.stop()
                    
                    elif 0 < self.d_stop_sign < 25 and stop_sign_active:
                        print("Stop sign ahead")
                        self.rc_car.stop()

                        # stop for 5 seconds
                        if stop_flag is False:
                            self.stop_start = cv2.getTickCount()
                            stop_flag = True
                        self.stop_finish = cv2.getTickCount()

                        self.stop_time = (self.stop_finish - self.stop_start)/cv2.getTickFrequency()
                        print "Stop time: %.2fs" % self.stop_time

                        # 5 seconds later, continue driving
                        if self.stop_time > 5:
                            print("Waited for 5 seconds")
                            stop_flag = False
                            stop_sign_active = False

                    elif 0 < self.d_light < 30:
                        #print("Traffic light ahead")
                        if self.obj_detection.red_light:
                            print("Red light")
                            self.rc_car.stop()
                        elif self.obj_detection.green_light:
                            print("Green light")
                            pass
                        elif self.obj_detection.yellow_light:
                            print("Yellow light flashing")
                            pass
                        
                        self.d_light = 30
                        self.obj_detection.red_light = False
                        self.obj_detection.green_light = False
                        self.obj_detection.yellow_light = False

                    else:
                        self.rc_car.steer(prediction)
                        self.stop_start = cv2.getTickCount()
                        self.d_stop_sign = 25

                        if stop_sign_active is False:
                            self.drive_time_after_stop = (self.stop_start - self.stop_finish)/cv2.getTickFrequency()
                            if self.drive_time_after_stop > 5:
                                stop_sign_active = True

                    if cv2.waitKey(1) & 0xFF == ord('q'):
                        self.rc_car.stop()
                        break

            cv2.destroyAllWindows()

        finally:
            print "Connection closed on thread 1"


class ThreadServer(object):

    def server_thread(host, port):
        server = SocketServer.TCPServer((host, port), VideoStreamHandler)
        server.serve_forever()

    def server_thread2(host, port):
        server = SocketServer.TCPServer((host, port), SensorDataHandler)
        server.serve_forever()

    distance_thread = threading.Thread(target=server_thread2, args=('192.168.1.100', 8002))
    distance_thread.start()
    video_thread = threading.Thread(target=server_thread('192.168.1.100', 8000))
    video_thread.start()

if __name__ == '__main__':
    ThreadServer()
