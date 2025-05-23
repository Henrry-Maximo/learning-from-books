var http = require('http');

/*
Esse é um exemplo clássico e simples de um servidor node.js. 
Ele está sendo executado na porta 3006, por padrão ele responde através da 
rota raiz “/” um resultado em formato html com a mensagem: Hello World!.

Vá para a linha de comando e rode node hello_server.js. Faça o teste
acessando, no seu navegador, o endereço http://localhost:3006 .

*/

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
  }
);

// server.listen(3006);
server.listen(3006, function() {
  console.log('Server is Running! 👌');
});