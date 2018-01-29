## AutoRCCar

[中文文档](https://github.com/zhaoying9105/AutoRCCar) (感谢[zhaoying9105](https://github.com/zhaoying9105))

See self-driving in action

<a href="http://www.youtube.com/watch?feature=player_embedded&v=BBwEF6WBUQs
" target="_blank"><img src="http://img.youtube.com/vi/BBwEF6WBUQs/0.jpg" width="360" height="240" border="10" /></a>

  A scaled down version of self-driving system using a RC car, Raspberry Pi, Arduino and open source software. The system uses a Raspberry Pi with a camera and an ultrasonic sensor as inputs, a processing computer that handles steering, object recognition (stop sign and traffic light) and distance measurement, and an Arduino board for RC car control.
  
### Dependencies
* Raspberry Pi: 
  - Picamera
* Computer:
  - Numpy
  - OpenCV 2.4.10.1
  - Pygame
  - PiSerial
  
### About
- raspberrt_pi/ 
  -	***stream_client.py***: stream video frames in jpeg format to the host computer
  -	***ultrasonic_client.py***: send distance data measured by sensor to the host computer
- arduino/
  -	***rc_keyboard_control.ino***: acts as a interface between rc controller and computer and allows user to send command via USB serial interface
- computer/
  -	cascade_xml/ 
    - trained cascade classifiers xml files
  -	chess_board/ 
    - images for calibration, captured by pi camera 
  -	training_data/ 
    - training data for neural network in npz format
  -	training_images/ 
    - saved video frames during image training data collection stage (optional)
  -	mlp_xml/ 
    - trained neural network parameters in a xml file
  -	***picam_calibration.py***: pi camera calibration, returns camera matrix
  -	***collect_training_data.py***: receive streamed video frames and label frames for later training
  -	***mlp_training.py***: neural network training
  -	***rc_driver.py***: a multithread server program receives video frames and sensor data, and allows RC car drives by itself with stop sign, traffic light detection and front collision avoidance capabilities
- test/
  -	***rc_control_test.py***: RC car control with keyboard 
  -	***stream_server_test.py***: video streaming from Pi to computer
  -	***ultrasonic_server_test.py***: sensor data streaming from Pi to computer
- Traffic_signal/ 
  - trafic signal sketch contributed by [@geek111](https://github.com/geek1111)


### How to drive
1. **Flash Arduino**: Flash *“rc_keyboard_control.ino”* to Arduino and run *“rc_control_test.py”* to drive the rc car with keyboard (testing purpose)

2. **Pi Camera calibration:** Take multiple chess board images using pi camera at various angles and put them into “chess_board” folder, run *“picam_calibration.py”* and it returns the camera matrix, those parameters will be used in *“rc_driver.py”*

3. **Collect training data and testing data:** First run *“collect_training_data.py”* and then run *“stream_client.py”* on raspberry pi. User presses keyboard to drive the RC car, frames are saved only when there is a key press action. When finished driving, press “q” to exit, data is saved as a npz file. 

4. **Neural network training:** Run *“mlp_training.py”*, depend on the parameters chosen, it will take some time to train. After training, model will be saved in “mlp_xml” folder

5. **Cascade classifiers training (optional):** trained stop sign and traffic light classifiers are included in the "cascade_xml" folder, if you are interested in training your own classifiers, please refer to [OpenCV documentation](http://docs.opencv.org/doc/user_guide/ug_traincascade.html) and [this great tutorial by Thorsten Ball](http://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html)

6. **Self-driving in action**: First run *“rc_driver.py”* to start the server on the computer and then run *“stream_client.py”* and *“ultrasonic_client.py”* on raspberry pi. 

