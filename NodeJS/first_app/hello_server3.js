var http = require('http'); // module native

/*
Reparem na complexidade do nosso código: o roteamento foi tratado através dos
comandosif e else, e a leitura de url é obtida através da função request.url() que
retorna uma string sobre o que foi digitado na barra de endereço do browser. Esses
endereços utilizam padrões para capturar valores na url. Esses padrões são: query
strings ( ?nome=joao) e path ( /admin). Em um projeto maior, tratar todas as urls
dessa maneira seria trabalhoso e confuso demais. No Node.js, existe o módulo nativo
chamado url, que é responsável por fazer parser e formatação de urls.
*/

// var verifyUrl = function(request, response) {
//   response.writeHead(200, { "Content-Type": "text/html" });

//   if (request.url == "/") {
//     response.write("<h1>Page main</h1>")
//   } else if (request.url == "/bem-vindo") {
//     response.write("<h1>Welcome :)</h1>");
//   } else {
//     response.write("<h1>Page not found :(</h1>");
//   };

//   response.end();
// };

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  if (request.url == "/") {
    response.write("<h1>Page main</h1>")
  } else if (request.url == "/bem-vindo") {
    response.write("<h1>Welcome :)</h1>");
  } else {
    response.write("<h1>Page not found :(</h1>");
  };

  response.end();
});

server.listen(3006, function() {
  console.log('Server is running!');
});