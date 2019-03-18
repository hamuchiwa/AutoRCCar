
import cv2
import numpy as np
import socket
import serial
from model import NeuralNetwork
from rc_driver_helper import RCControl


class RCDriverNNOnly(object):

    def __init__(self, host, port, serial_port, model_path):

        self.server_socket = socket.socket()
        self.server_socket.bind((host, port))
        self.server_socket.listen(0)

        # accept a single connection
        self.connection = self.server_socket.accept()[0].makefile('rb')

        # load trained neural network
        self.nn = NeuralNetwork()
        self.nn.load_model(model_path)

        self.rc_car = RCControl(serial_port)

    def drive(self):
        stream_bytes = b' '
        try:
            # stream video frames one by one
            while True:
                stream_bytes += self.connection.read(1024)
                first = stream_bytes.find(b'\xff\xd8')
                last = stream_bytes.find(b'\xff\xd9')

                if first != -1 and last != -1:
                    jpg = stream_bytes[first:last + 2]
                    stream_bytes = stream_bytes[last + 2:]
                    gray = cv2.imdecode(np.frombuffer(jpg, dtype=np.uint8), cv2.IMREAD_GRAYSCALE)
                    image = cv2.imdecode(np.frombuffer(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)

                    # lower half of the image
                    height, width = gray.shape
                    roi = gray[int(height/2):height, :]

                    cv2.imshow('image', image)
                    # cv2.imshow('mlp_image', roi)

                    # reshape image
                    image_array = roi.reshape(1, int(height/2) * width).astype(np.float32)

                    # neural network makes prediction
                    prediction = self.nn.predict(image_array)
                    self.rc_car.steer(prediction)

                    if cv2.waitKey(1) & 0xFF == ord('q'):
                        print("car stopped")
                        self.rc_car.stop()
                        break
        finally:
            cv2.destroyAllWindows()
            self.connection.close()
            self.server_socket.close()


if __name__ == '__main__':
    # host, port
    h, p = "192.168.1.100", 8000

    # serial port
    sp = "/dev/tty.usbmodem1421"

    # model path
    path = "saved_model/nn_model.xml"

    rc = RCDriverNNOnly(h, p, sp, path)
    rc.drive()
