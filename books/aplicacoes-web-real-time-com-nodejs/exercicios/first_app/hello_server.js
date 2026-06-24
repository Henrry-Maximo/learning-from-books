var http = require('http');

/*
Esse é um exemplo clássico e simples de um servidor node.js. 
Ele está sendo executado na porta 3006, por padrão ele responde através da 
rota raiz “/” um resultado em formato html com a mensagem: Hello World!.

Vá para a linha de comando e rode node hello_server.js. Faça o teste
acessando, no seu navegador, o endereço http://localhost:3006 .

Função http.createServer() é responsável por levantar um servidor e o seu callback 
function(request, response) apenas é executado quando o servidor recebe uma requisição

Event Loop -> responsável por lidar com a emissão de eventos, verifica constantemente
se o servidor for requisitado e, quando ele recebe uma requisição, ele emite um evento
para que seja executado o seu callback

*/

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
  }
);

// server.listen(3006);
// receber em parâmetro uma função
server.listen(3006, function() {
  console.log('Server is Running! 👌');
});