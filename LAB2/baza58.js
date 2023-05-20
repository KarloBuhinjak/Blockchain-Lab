import Base58 from "base-58";
var message = "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEApdFhfNpWIWkABkEusXOuZAPQ4nr3/lfdYMU2vifCAt+82nJWxjmM\npz4CmVTzMYouKPac7jQwJ8F/07ALQ/24scljCrBL2qd+8v+GUhBlL4AQsuSKBuq5\nB9gPRO886FBtZ/OiZaMGVkUQtUyxIu/YsVChAZ2WEWC0aYppk8sQWCFMPjELgjmU\n/JXb8RGa89Ddp4beQu3XeEJ1Sl8JnMU+6x9F5Xn+2/T1ztScSed+vX0zawmwLAmV\naoRELLnxfvGqwRKBlQWXDPUQoJP8GzI9vHc0iw7BIWmSYo6P3/7DZvZCA7giIgUi\nN9IWEZrdVmB6eai0NLa1zpMlKy5ZrcJJdQIDAQAB\n-----END RSA PUBLIC KEY-----";
var codedString = Base58.encode(new Buffer(message));
console.log (codedString);