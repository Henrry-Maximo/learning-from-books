
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