var http = require('http');

/*

Se o código ficar muito complicado em encadeamentos de diversos blocos, podemos
isolá-los em funções com nomes mais significativos.

*/

var attendRequest = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
};

var server = http.createServer(attendRequest);

var onServer = function() {
  console.log('Servidor is Running! 👌');
};

server.listen(3006, onServer);