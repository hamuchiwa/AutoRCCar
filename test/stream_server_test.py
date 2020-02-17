__author__ = 'zhengwang'

import os, sys, inspect

cd = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
pd = os.path.dirname(cd)
sys.path.insert(0, pd)

import config

import numpy as np
import cv2
import socket
from time import sleep


class VideoStreamingTest(object):
    def __init__(self, host, port):

        self.server_socket = socket.socket()
        self.server_socket.bind((host, port))
        self.server_socket.listen(0)
        self.connection, self.client_address = self.server_socket.accept()
        self.connection = self.connection.makefile('rb')
        self.host_name = socket.gethostname()
        self.host_ip = socket.gethostbyname(self.host_name)
        self.streaming()

    def streaming(self):
        print("server online")
        try:
            print("Host: ", self.host_name + ' ' + self.host_ip)
            print("Connection from: ", self.client_address)
            print("Streaming...")
            print("Press 'q' to exit")

            # need bytes here
            stream_bytes = b' '
            while True:
                stream_bytes += self.connection.read(1024)
                first = stream_bytes.find(b'\xff\xd8')
                last = stream_bytes.find(b'\xff\xd9')
                if first != -1 and last != -1:
                    jpg = stream_bytes[first:last + 2]
                    stream_bytes = stream_bytes[last + 2:]
                    image = cv2.imdecode(np.frombuffer(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)
                    cv2.imshow('image', image)

                    if cv2.waitKey(1) & 0xFF == ord('q'):
                        break
        except Exception as exep:
            print ("Error: %s" %str(exep))
            
        finally:
            self.connection.close()
            self.server_socket.close()


if __name__ == '__main__':
    # host, port
    h, p = config.serverIP, 8000
    VideoStreamingTest(h, p)
