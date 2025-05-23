var http = require('http'); // module native

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
};);

server.listen(3006, function() {
  console.log('Server is running!');
});