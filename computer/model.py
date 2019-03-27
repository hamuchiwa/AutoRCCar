__author__ = 'zhengwang'

import cv2
import numpy as np
import glob
import sys
import time
import os
from sklearn.model_selection import train_test_split


def load_data(input_size, path):
    print("Loading training data...")
    start = time.time()

    # load training data
    X = np.empty((0, input_size))
    y = np.empty((0, 4))
    training_data = glob.glob(path)

    # if no data, exit
    if not training_data:
        print("Data not found, exit")
        sys.exit()

    for single_npz in training_data:
        with np.load(single_npz) as data:
            train = data['train']
            train_labels = data['train_labels']
        X = np.vstack((X, train))
        y = np.vstack((y, train_labels))

    print("Image array shape: ", X.shape)
    print("Label array shape: ", y.shape)

    end = time.time()
    print("Loading data duration: %.2fs" % (end - start))

    # normalize data
    X = X / 255.

    # train validation split, 7:3
    return train_test_split(X, y, test_size=0.3)


class NeuralNetwork(object):
    def __init__(self):
        self.model = None

    def create(self, layer_sizes):
        # create neural network
        self.model = cv2.ml.ANN_MLP_create()
        self.model.setLayerSizes(np.int32(layer_sizes))
        self.model.setTrainMethod(cv2.ml.ANN_MLP_BACKPROP)
        self.model.setActivationFunction(cv2.ml.ANN_MLP_SIGMOID_SYM, 2, 1)
        self.model.setTermCriteria((cv2.TERM_CRITERIA_COUNT, 100, 0.01))

    def train(self, X, y):
        # set start time
        start = time.time()

        print("Training ...")
        self.model.train(np.float32(X), cv2.ml.ROW_SAMPLE, np.float32(y))

        # set end time
        end = time.time()
        print("Training duration: %.2fs" % (end - start))

    def evaluate(self, X, y):
        ret, resp = self.model.predict(X)
        prediction = resp.argmax(-1)
        true_labels = y.argmax(-1)
        accuracy = np.mean(prediction == true_labels)
        return accuracy

    def save_model(self, path):
        directory = "saved_model"
        if not os.path.exists(directory):
            os.makedirs(directory)
        self.model.save(path)
        print("Model saved to: " + "'" + path + "'")

    def load_model(self, path):
        if not os.path.exists(path):
            print("Model does not exist, exit")
            sys.exit()
        self.model = cv2.ml.ANN_MLP_load(path)

    def predict(self, X):
        resp = None
        try:
            ret, resp = self.model.predict(X)
        except Exception as e:
            print(e)
        return resp.argmax(-1)
