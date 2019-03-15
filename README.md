## AutoRCCar
### Python3 + OpenCV3

See self-driving in action  

<a href="http://www.youtube.com/watch?feature=player_embedded&v=BBwEF6WBUQs
" target="_blank"><img src="http://img.youtube.com/vi/BBwEF6WBUQs/0.jpg" width="360" height="240" border="10" /></a>

This project builds a self-driving RC car using Raspberry Pi, Arduino and open source software. Raspberry Pi collects inputs from a camera module and an ultrasonic sensor, and sends data to a computer wirelessly. The computer processes input images and sensor data for object detection (stop sign and traffic light) and collision avoidance respectively. A neural network model runs on computer and makes predictions for steering based on input images. Predictions are then sent to the Arduino for RC car control. 
  
### Setting up environment with Anaconda
  1. Install [`miniconda(Python3)`](https://conda.io/miniconda.html) on your computer
  2. Create `auto-rccar` environment with all necessary libraries for this project  
     ```conda env create -f environment.yml```
     
  3. Activate `auto-rccar` environment  
     ```source activate auto-rccar```
  
  &ensp; To exit, simply close the terminal window. More info about managing Anaconda environment, please see [here](https://conda.io/docs/user-guide/tasks/manage-environments.html).
  
### About the files
**test/**  
  &emsp; &emsp; `rc_control_test.py`: RC car control with keyboard  
  &emsp; &emsp;  `stream_server_test.py`: video streaming from Pi to computer  
  &emsp; &emsp;  `ultrasonic_server_test.py`: sensor data streaming from Pi to computer  
  &emsp; &emsp;  **model_train_test/**  
      &emsp; &emsp;  &emsp; &emsp; `data_test.npz`: sample data  
      &emsp; &emsp;  &emsp; &emsp; `train_predict_test.ipynb`: a jupyter notebook that goes through neural network model in OpenCV3  
  
**raspberryPi/**    
  &emsp; &emsp;  `stream_client.py`:        stream video frames in jpeg format to the host computer  
  &emsp; &emsp;  `ultrasonic_client.py`:    send distance data measured by sensor to the host computer  
  
**arduino/**  
  &emsp; &emsp;  `rc_keyboard_control.ino`: control RC car controller  
  
**computer/**    
  &emsp; &emsp;  **cascade_xml/**  
      &emsp; &emsp;  &emsp; &emsp;  trained cascade classifiers  
  &emsp; &emsp;  **chess_board/**   
      &emsp; &emsp;  &emsp; &emsp;  images for calibration, captured by pi camera  
      
  &emsp; &emsp;  `picam_calibration.py`:     pi camera calibration  
  &emsp; &emsp;  `collect_training_data.py`: collect images in grayscale, data saved as `*.npz`  
  &emsp; &emsp;  `model.py`:                 neural network model  
  &emsp; &emsp;  `model_training.py`:        model training and validation  
  &emsp; &emsp;  `rc_driver_helper.py`:      helper classes/functions for `rc_driver.py`  
  &emsp; &emsp;  `rc_driver.py`:             receive data from raspberry pi and drive the RC car based on model prediction  
  &emsp; &emsp;  `rc_driver_nn_only.py`:     simplified `rc_driver.py` without object detection  
  
  
**Traffic_signal**  
  &emsp; &emsp;  trafic signal sketch contributed by [@geek111](https://github.com/geek1111)


### How to drive
1. **Testing:** Flash `rc_keyboard_control.ino` to Arduino and run `rc_control_test.py` to drive the RC car with keyboard. Run `stream_server_test.py` on computer and then run `stream_client.py` on raspberry pi to test video streaming. Similarly, `ultrasonic_server_test.py` and `ultrasonic_client.py` can be used for sensor data streaming testing.   

2. **Pi Camera calibration (optional):** Take multiple chess board images using pi camera module at various angles and put them into **`chess_board`** folder, run `picam_calibration.py` and returned parameters from the camera matrix will be used in `rc_driver.py`.

3. **Collect training/validation data:** First run `collect_training_data.py` and then run `stream_client.py` on raspberry pi. Press arrow keys to drive the RC car, press `q` to exit. Frames are saved only when there is a key press action. Once exit, data will be saved into newly created **`training_data`** folder.

4. **Neural network training:** Run `model_training.py` to train a neural network model. Please feel free to tune the model architecture/parameters to achieve a better result. After training, model will be saved into newly created **`saved_model`** folder.

5. **Cascade classifiers training (optional):** Trained stop sign and traffic light classifiers are included in the **`cascade_xml`** folder, if you are interested in training your own classifiers, please refer to [OpenCV doc](http://docs.opencv.org/doc/user_guide/ug_traincascade.html) and this great [tutorial](http://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html).

6. **Self-driving in action**: First run `rc_driver.py` to start the server on the computer (for simplified no object detection version, run `rc_driver_nn_only.py` instead), and then run `stream_client.py` and `ultrasonic_client.py` on raspberry pi. 

[中文文档](https://github.com/zhaoying9105/AutoRCCar) (感谢[zhaoying9105](https://github.com/zhaoying9105))
