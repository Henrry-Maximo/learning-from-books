var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  // A constante __dirname retorna o diretório raiz da aplicação.

  fs.readFile(__dirname + '/index.html', function(err, html) {
    if (err) return;

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(html);

    response.end();
  });
});

server.listen(3002, function() {
  console.log('Execution Personal Website.');
});