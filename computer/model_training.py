__author__ = 'zhengwang'

from model import load_data, NeuralNetwork

input_size = 120 * 320
data_path = "training_data/*.npz"

X_train, X_valid, y_train, y_valid = load_data(input_size, data_path)

# train a neural network
layer_sizes = [input_size, 32, 4]
nn = NeuralNetwork()
nn.create(layer_sizes)
nn.train(X_train, y_train)

# evaluate on train data
train_accuracy = nn.evaluate(X_train, y_train)
print("Train accuracy: ", "{0:.2f}%".format(train_accuracy * 100))

# evaluate on validation data
validation_accuracy = nn.evaluate(X_valid, y_valid)
print("Validation accuracy: ", "{0:.2f}%".format(validation_accuracy * 100))

# save model
model_path = "saved_model/nn_model.xml"
nn.save_model(model_path)
