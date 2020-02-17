import os, sys, inspect

cd = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
pd = os.path.dirname(cd)
sys.path.insert(0, pd)

import config

import io
import socket
import struct
import time
from picamera import PiCamera


# create socket and bind host
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((config.serverIP, 8000))
connection = client_socket.makefile('wb')

try:
    with PiCamera() as camera:
        camera.resolution = (320, 240)      # pi camera resolution
        camera.framerate = 15               # 15 frames/sec
        time.sleep(2)                       # give 2 secs for camera to initilize
        start = time.time()
        stream = io.BytesIO()
        
        # send jpeg format video stream
        for foo in camera.capture_continuous(stream, 'jpeg', use_video_port = True):
            connection.write(struct.pack('<L', stream.tell()))
            connection.flush()
            stream.seek(0)
            connection.write(stream.read())
            if time.time() - start > 600:
                break
            stream.seek(0)
            stream.truncate()
    connection.write(struct.pack('<L', 0))
finally:
    connection.close()
    client_socket.close()
