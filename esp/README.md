You need an esp8266 running on micropython

download - http://micropython.org/download#esp8266
installation - http://docs.micropython.org/en/latest/esp8266/tutorial/intro.html#intro

then upload the 

boot.py
webrepl_cfg.py
config.py

files to the board and reboot

By default, it should create a hotspot with the name "RC-MAC", where MAC is the first six characters of the device's mac address. The password to connect is "consolePass" (without quotes)