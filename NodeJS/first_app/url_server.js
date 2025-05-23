var http = require("http");
var url = require("url");

// Esse módulo identifica através do retorno da função url.parser() os seguintes
// atributos:
// • href: Retorna a url completa: ‘http://user:pass@host.com:8080/p/a/t/h?
// query=string#hash’
// • protocol: Retorna o protocolo: ‘http’
// • host: Retorna o domínio com a porta: ‘host.com:8080’
// • auth: Retorna dados de autenticação: ‘user:pass’
// • hostname: Retorna o domínio: ‘host.com’
// • port: Retorna a porta: ‘8080’
// • pathname: Retorna os pathnames da url: ‘/p/a/t/h’
// • search: Retorna uma query string: ‘?query=string’
// • path: Retorna a concatenação de pathname com query string:
// ‘/p/a/t/h?query=string’
// • query: Retorna uma query string em JSON: {‘query’:’string’}
// • hash: Retorna ancora da url: ‘#hash’
// Resumindo, o módulo url permite organizar todas as urls da aplicação.

function valuesURl(url) {
  var { query } = url;

  for (var key in query) {
    console.log(`query: ${query[key]}, `);
  }
}

var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>Data of query string</h1>");

  // "Toda URL é string até você parsear e libertar os dados escondidos dentro dela!"
  var result = url.parse(request.url, true);

  valuesURl(result);

  for (var key in result.query) {
    response.write("<h2>" + key + " : " + result.query[key] + "</h1>");
    response.write(
      `<h2 style="color: red;"> ${key} : ${result.query[key]} </h2>`
    );
  }
});

server.listen(3000, function () {
  console.log("Server http.");
});
