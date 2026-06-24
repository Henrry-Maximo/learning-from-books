var fs = require('fs');

/*
O fs.readFile() faz uma leitura assíncrona do arquivo index.html.
Depois que o arquivo foi carregado, é invocado uma função callback para fazer os tratamentos finais, seja de erro ou de retorno do arquivo
*/

// Pode fazer outras coisas, eu (callback) lhe aviso quando estiver pronto
fs.readFile('/index.html', function(erro, file) {
  if (erro) throw erro;
  // if (erro) return;

  console.log(file);
});

/*
Já o fs.readFileSync() realizou uma leitura síncrona, 
bloqueando a aplicação até terminar sua leitura e retornar o arquivo
*/

// Olha, só vai fazer outra coisa quando terminar essa aqui
var file = fs.readFileSync('/index.html');
console.log(file);

/*
Um detalhe importante sobre o módulo File System é que ele não é
100% consistente entre os sistemas operacionais. Algumas funções são
específicas para sistemas Linux, OS X, Unix e outras são apenas para Windows.

https://nodejs.org/api/fs.html#file-system
*/