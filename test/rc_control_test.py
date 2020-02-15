__author__ = 'zhengwang'

import serial
import pygame
import urllib.request as httpReq
from pygame.locals import *


class RCTest(object):

    def __init__(self):
        pygame.init()
        pygame.display.set_mode((250, 250))
        self.httpURL = "http://192.168.4.1/?"
        # self.ser = serial.Serial("/dev/tty.usbmodem1421", 115200, timeout=1)    # mac
        # self.ser = serial.Serial("/dev/ttyACM0", 115200, timeout=1)           # linux
        self.send_inst = True
        self.steer()

    def steer(self):

        while self.send_inst:
            for event in pygame.event.get():
                if event.type == KEYDOWN:
                    key_input = pygame.key.get_pressed()

                    # complex orders
                    if key_input[pygame.K_UP] and key_input[pygame.K_RIGHT]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,0)&motrCtrl(2,1)?/")
                        print("Forward Right: " + res)
                        # self.ser.write(chr(6).encode())

                    elif key_input[pygame.K_UP] and key_input[pygame.K_LEFT]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,1)&motrCtrl(2,0)?/")
                        print("Forward Left: " + res)
                        # self.ser.write(chr(7).encode())

                    elif key_input[pygame.K_DOWN] and key_input[pygame.K_RIGHT]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,-1)&motrCtrl(2,1)?/")
                        print("Reverse Right: " + res)
                        # self.ser.write(chr(8).encode())

                    elif key_input[pygame.K_DOWN] and key_input[pygame.K_LEFT]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,1)&motrCtrl(2,-1)?/")
                        print("Reverse Left: " + res)
                        # self.ser.write(chr(9).encode())

                    # simple orders
                    elif key_input[pygame.K_UP]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,1)&motrCtrl(2,1)?/")
                        print("Forward: " + res)
                        # self.ser.write(chr(1).encode())

                    elif key_input[pygame.K_DOWN]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,-1)&motrCtrl(2,-1)?/")
                        print("Reverse: " + res)
                        # self.ser.write(chr(2).encode())

                    elif key_input[pygame.K_RIGHT]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,0)&motrCtrl(2,1)?/")
                        print("Right: " + res)
                        # self.ser.write(chr(3).encode())

                    elif key_input[pygame.K_LEFT]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,1)&motrCtrl(2,0)?/")
                        print("Left: " + res)
                        # self.ser.write(chr(4).encode())

                    # exit
                    elif key_input[pygame.K_x] or key_input[pygame.K_q]:
                        res = httpReq.urlopen(self.httpURL + "motrCtrl(1,0)&motrCtrl(2,0)?/")
                        print("Exit: " + res)
                        self.send_inst = False
                        # self.ser.write(chr(0).encode())
                        # self.ser.close()
                        break

                elif event.type == pygame.KEYUP:
                    res = httpReq.urlopen(self.httpURL + "motrCtrl(1,0)&motrCtrl(2,0)?/")
                    print("Exit: " + res)
                    # self.ser.write(chr(0).encode())


if __name__ == '__main__':
    RCTest()
