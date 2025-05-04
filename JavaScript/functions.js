
// ____________________________________________________________________________

//                 (args of function)
function nameFunction(parameters) {
  ...
}

/*
  funções são formas de modularizar uma ou mais linhas de script para que 
  possam ser executadas uma ou mais vezes

  para executar, é necessário chamar através de um manipulador de evento
*/

// ____________________________________________________________________________

/*
  Manipuladores de evento

  1. onlick -> disparado quando o elemento recebe um click
  2. onmouseover -> disparado quando o cursor do mouse está sobre o elemento
  3. onmouseout -> disparado quando o cursor do mouse não está mais sobre o 
  elemento
  4. onfocus -> disparado quando o elemento recebe o foco (por meio do mouse ou 
  do teclado)
  5. onblur -> disparado quando o elemento não tem mais o foco

  obs.: nem todos os elementos (tags html) suportam todos os manipualdores. No
  caso, o elemento onload é suportado pela pelos elementos body e img

*/

// ____________________________________________________________________________

/*
  Segunda técnica:

  Está atribuindo a função hello diretamente ao manipulador de venetos onload da
  janela

  <script type="text/javascript">
    window.onload=hello();

    function hello() {
      // diz alô para o mundo
      var msg = "Hello, World!";
      document.open();
      document.write(msg);
      document.close();
    }
  </script>

  O manipulador de evento onload é uma propriedade de um objeto do navegador.
  No caso, o objeto interno window.

  Funções em JS são iguais a objetos.
*/

// ____________________________________________________________________________

/*
  Objeto Document

  Em navegadores, especificamente nas páginas, teremores objetos disponíveis
  para manipulação. No caso, o objeto document.
  
  document é uma representação da página, incluindo todos os elemento dentro
  dela. Tendo métodos de acesso e alteração da página.

  1. open
  2. writeln
  3. close

*/