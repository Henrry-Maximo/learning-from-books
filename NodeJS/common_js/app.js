// Loading modules 
var hello = require('./hello');
var human = require('./human');

// Execution of function
hello('Hello, guys!');

// Execution of object human that call your function human.hello()
human.hello('Hello guys!');