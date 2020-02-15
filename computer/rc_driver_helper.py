__author__ = 'zhengwang'

import serial
import cv2
import math
import urllib.request as httpReq


class RCControl(object):

    def __init__(self):
        # self.serial_port = serial.Serial(serial_port, 115200, timeout=1)
        # http://192.168.4.1/?motrCtrl(1,mode=0)&motrCtrl(2,mode=0)?/
        self.httpURL = "http://192.168.4.1/?"

    def steer(self, prediction):
        if prediction == 2:
            # self.serial_port.write(chr(1).encode())
            res = httpReq.urlopen(self.httpURL + "motrCtrl(1,1)&motrCtrl(2,1)?/")
            print("Forward: " + res)
        elif prediction == 0:
            # self.serial_port.write(chr(7).encode())
            res = httpReq.urlopen(self.httpURL + "motrCtrl(1,-1)&motrCtrl(2,1)?/")
            print("Left: " + res)
        elif prediction == 1:
            # self.serial_port.write(chr(6).encode())
            res = httpReq.urlopen(self.httpURL + "motrCtrl(1,1)&motrCtrl(2,-1)?/")
            print("Right: " + res)
        else:
            self.stop()

    def stop(self):
        # self.serial_port.write(chr(0).encode())
        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,0)&motrCtrl(2,0)?/")
        print("Stop: "+ res)


class DistanceToCamera(object):

    def __init__(self):
        # camera params
        self.alpha = 8.0 * math.pi / 180    # degree measured manually
        self.v0 = 119.865631204             # from camera matrix
        self.ay = 332.262498472             # from camera matrix

    def calculate(self, v, h, x_shift, image):
        # compute and return the distance from the target point to the camera
        d = h / math.tan(self.alpha + math.atan((v - self.v0) / self.ay))
        if d > 0:
            cv2.putText(image, "%.1fcm" % d,
                        (image.shape[1] - x_shift, image.shape[0] - 20),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
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
            minSize=(30, 30))

        # draw a rectangle around the objects
        for (x_pos, y_pos, width, height) in cascade_obj:
            cv2.rectangle(image, (x_pos + 5, y_pos + 5), (x_pos + width - 5, y_pos + height - 5), (255, 255, 255), 2)
            v = y_pos + height - 5
            # print(x_pos+5, y_pos+5, x_pos+width-5, y_pos+height-5, width, height)

            # stop sign
            if width / height == 1:
                cv2.putText(image, 'STOP', (x_pos, y_pos - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

            # traffic lights
            else:
                roi = gray_image[y_pos + 10:y_pos + height - 10, x_pos + 10:x_pos + width - 10]
                mask = cv2.GaussianBlur(roi, (25, 25), 0)
                (minVal, maxVal, minLoc, maxLoc) = cv2.minMaxLoc(mask)

                # check if light is on
                if maxVal - minVal > threshold:
                    cv2.circle(roi, maxLoc, 5, (255, 0, 0), 2)

                    # Red light
                    if 1.0 / 8 * (height - 30) < maxLoc[1] < 4.0 / 8 * (height - 30):
                        cv2.putText(image, 'Red', (x_pos + 5, y_pos - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
                        self.red_light = True

                    # Green light
                    elif 5.5 / 8 * (height - 30) < maxLoc[1] < height - 30:
                        cv2.putText(image, 'Green', (x_pos + 5, y_pos - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0),2)
                        self.green_light = True

                    # yellow light
                    # elif 4.0/8*(height-30) < maxLoc[1] < 5.5/8*(height-30):
                    #    cv2.putText(image, 'Yellow', (x_pos+5, y_pos - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 255), 2)
                    #    self.yellow_light = True
        return v
