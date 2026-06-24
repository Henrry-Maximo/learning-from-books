
# Capítulo 1

## 1.Estilo

  * Facilitar a leitura do código para você e para as outras pessoas;
  * O estilo é crucial para a boa programação;
  * Disciplina de escrever bem leva a um código que poderá estar correto;

### Princípios

  * Bom senso guiado pela experiência;
  * Não se baseia em regras e prescrições arbitrárias;
  * Código claro/simples: lógica direta, expressão natural, uso convencional da linguagem, nomes significativos, formtação simples, comentários úteis;
  * Código deve evitar: truques espertos e construções incomuns (consistência);
  * Convenções utilizadas: The C Programming Language

### Exemplos

  * Código questionável:

****
? #define ONE 1
? #define TEN 10
? #define TWENTY 20
****  

- Por quê?
  * Eventualmente, se houver modificações, pense no tamnho do array, talves precisse ficar
  maior. Ou seja, é necessário alterar o nome para simbolizar o verdadeiro papel dos valores no programa.

  * Código com bom estilo:

****
 #define INPUT_MODE 1
 #define INPUT_BUFSIZE 10
 #define OUTPUT_BUFSIZE20
**** 

## 1.Nomes

  * Serve para rotular a variável ou função sobre suas informações definindo seu propósito;
  * Deve ser informativo;
  * Deve ser memoriazavel;
  * Deve ser conciso;
  * Deve ser ponunciável.

- Variável globais -> nomes descritivos;
  * Podem aparecer em qualquer parte do programa, sendo necessário um nome longo para descrever seu propósito para o
  desenvolvedor, seu possível significado de uso no código;
  * É aconselhável incluir um comentário em toda variável global;

- Variável local -> nomes curtos;

- Funções, classes e estruturas globais -> nomdes descritivos, que sugerem o seu papel no programa;
  * Por exemplo, dentro de uma função, a variável "n" pode ser chamada como "n", pois é uma variável local. É possível melhorar utilizando "npoints", já "numberOfPoints" é um exagero;

- Caso específico:
  - Utilização de variáveis globais de maneiras convencionais, podendo ter nomes curtos. Em outras palavras, loop de iteração, uso de índices, ponteiros, e strings:
    * O uso de "i" e "j" para índices de loop, "p" e "q" para ponteiros, "s" e "t" para strings é tão frequente que há pouco lucro e, talvez, algum prejuízo nos nomes mais longos.

****

? for (theElementIndex = 0; theElementIndex < numberOfElements; theElementIndex++) {
?     elementArray[theElementIndex] = theElementIndex;
? }

for (i = 0; i < nelems; i++) {
    elementArray[i] = i;
}

****

- Por quê?
  * Melhora a leitura do código em questão;
  * O erro principal, e recorrente entre os programadores, e compreender que se deve utilizar nomes de variáveis longos, independente do contexto. A clareza é quase sempre conquistada através da brevidade.

### Consistência

  * Dê a coisas relacionadas nomes relacionados que mostram seu relacionamento e destaquem sua diferença;

****

? class UserQueue {
?       int noOfItemsInQ, frontOfTheQueue, queueCapacity;
?       public int noOfUsersInQueue() { ... }
? }

? queue.queueCapacity;

****

  - Quantas vezes aparece "Queue" dentro do escopo da class: é visto como "Q", "Queue" e "queue";
  - Como é uma class, não é necessário que as variáveis internas carreguem o nome "queues", pois só conseguimos acessar a classe se a instanciarmos, acessando assim seus valores;
  - Se observar, é notável uma redundância no nome, sendo visto duas vezes: "queue".
  
****

class UserQueue {
    int nitems, front, capacity;
    public int nusers() { ... }
}

queue.capacity++;
n = queue.nusers();

****

- Clareza:
  * Foi alcançada melhorando os nomes e removendo partes. No entanto, ainda há trabalho para ser feito neste exemplo. Isto é visto em "items" e "users" que são as mesma coisa, portanto somente um único termo deve ser usado para  um único conceito

****

class UserQueue {
    int nusers, front, capacity;
    public int nusers() { return nusers; } // Consistente
}

queue.capacity++;
n = queue.nusers(); // Agora "nusers" e "nusers" são o mesmo conceito

****

### Use nomes ativos para as funções

  * Deve ser um verbo ativo, que pode ser seguido por substantivos;
  * Como em "date.getTime()", se observar, verá que "date" é um substantivo, "get" é um verbo e "Time" é um substantivo;

****

now = date.getTime();
putchar('\n');

****

  * Funções que retornam valor boolean (true ou false) devem ser nomeadas para que o valor de retorno não gere ambiguidades;
  * Imagine uma função "checkoctal(c)", que recebe um valor e realiza uma verificação, podendo retornar um valor verdadeiro ou falso. Agora pense em seu nome, ele representa o tipo de valor que será retornado? Não representa, este é o problema, pois parece que poderá ser retornado uma string (status) ou um number.
    - Neste caso, será recomendável alterar o nome da variável para "isOctal(c)". Veja como ficou claro, agora sabemos o que está função irá retornar. Será um valor boolean. O "is" simboliza uma pergunta... "é octal?".

****

? if (checkoctal(c)) { ... }

// vs

if (isoctal(c)) { ... }

****

### Seja preciso

  * O nome não apenas rotula, ele também veicula informações para o leitor;
    - Cuidado: nomes enganosos podem ocasionar bugs difíceis de encontrar.
  * A seguir, pode se notar uma macro chamada "isoctal", que foi utilizada com erro na lógica, porém seu nome veiculava a inteção correta.
    - É fácil um nome bom disfarçar uma implementação ruim;

****

? #define isoctal(c) ((c) >= '0' && (c) <= '8');

// vs

#define isoctal(c) ((c) >= '0' && (c) <= '7');

****

- Exemplo onde implementação e nomes estão em completa contradição:

****

? public boolean inTable(Object obj) {
?     int j = this.getIndex(obj);
?     return (j == nTable);
? }

****

  - O código está funcional, mas o nome e a lógica estão inversos em relação à intenção do método;
  - O método inTable está retornando o oposto do que seu nome sugere.
  - A função getIndex retorna um valor entre "zero" e "nTable - 1" se encontrar o objeto, e retorna nTable caso não encontre o objeto. O valor boolean retornado por inTable é, portanto, o oposto daquilo que o nome implica.

- Página: 6 