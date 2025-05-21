var http = require('http');
var fs = require('fs');

var readAsync = require('./leitura_async');
var readSync = require('./leitura_sync');

var file = './node.exe';
var stream = fs.createWriteStream(file);
var download = 'http://nodejs.org/dist/latest/node-v24.0.2-win-x64.zip';

http.get(download, function(res) {
  console.log("Donwload from Node.JS...");

  res.on('data', function(data) {
    stream.write(data);
  });

  res.on('end', function() {
    stream.end();
    console.log("Donwload finished!");

    readAsync(file);
    readSync(file);
  });
});