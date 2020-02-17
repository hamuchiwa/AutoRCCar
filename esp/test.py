"""
    Test file to check the working of config.py
"""

import os, sys, inspect

cd = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
pd = os.path.dirname(cd)
sys.path.insert(0, pd)

import config
print(config.serverIP)