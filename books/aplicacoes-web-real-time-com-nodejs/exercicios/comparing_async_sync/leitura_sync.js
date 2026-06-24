var fs = require('fs');
var readSync = function(file) {
  console.log("Download in format sync.");

  var begin = new Date().getTime();
  fs.readFileSync(file);
  var end = new Date().getTime();

  console.log("Blocking sync: " + (begin - end) + "ms");
};

module.exports = readSync;