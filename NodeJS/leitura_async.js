var fs = require('fs');

var readAsync = function(file) {
  console.log("Download in format async.");
  
  var begin = new Date().getTime();
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err); // Retorna erro
      return;
    }
    callback(null, data); // Retorna dados
  });
  var end = new Date().getTime();

  console.log("Blocking async: " + (end - begin) + 'ms');
};

module.exports = readAsync;