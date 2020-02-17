__author__ = 'zhengwang'

import os, sys, inspect

cd = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
pd = os.path.dirname(cd)
sys.path.insert(0, pd)

import config

import socket
import time


class SensorStreamingTest(object):
    def __init__(self, host, port):

        self.server_socket = socket.socket()
        self.server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.server_socket.bind((host, port))
        self.server_socket.listen(0)
        self.connection, self.client_address = self.server_socket.accept()
        self.host_name = socket.gethostname()
        self.host_ip = socket.gethostbyname(self.host_name)
        self.streaming()

    def streaming(self):

        print("Initializing")
        try:
            print("Host: ", self.host_name + ' ' + self.host_ip)
            print("Connection from: ", self.client_address)
            start = time.time()

            while True:
                sensor_data = (self.connection.recv(1024))
                print("Distance: %s cm" % sensor_data.decode())

                # test for 10 seconds
                if time.time() - start > 10:
                    print("test timeout")
                    break
        finally:
            self.connection.close()
            self.server_socket.close()


if __name__ == '__main__':
    h, p = config.serverIP, 8002
    SensorStreamingTest(h, p)
