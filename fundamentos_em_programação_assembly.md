
# Capítulo 1

## Assembly ou Assembler

  * Não programamos em linguagem de programação Assembler;
  * Programamos utilizando a linguagem de programação Assembly;

- História:
  - O nome significa "montagem", ou seja, linguagem de montagem;
  - Utilizada para programar um computador em baixo nível, sendo necessário montar o programa dentro do processador;
  - Não é uma linguagem de máquina, mas é a mais próxima disso;
    - Por quê?... A linguagem de máquina é a utilizada por um microprocessador para controlar as funções de um computador digital;
    - O que é o microprocessador?... É um circuito que possui a capacidade de executar diversos tipos de funções distintas;
  - A linguagem de máquina só aceita e manipula informações numéricas expressas em notação de códigos binários;
  - No sentido matemático, os códigos binários representam os estados de tensão alta "1" ou tensão baixa "0" para os circuitos eletrônicos de um computador;
  - Por questões de compreensão e facilidade operacional, os números binários podem e devem ser representados no formato hexadecimal;
  - Durante a década de 40, a programação em linguagem de máquina foi muito utilizada, após o surgimento do primeiro computador eletrônico, intitulado de ENIAC (1939 - 1946);
  - A linguagem de programação Assembly foi desenvolvida no final da década de 40 e início da década de 50, para simplificar a codificação de programas de computador. A vantagem principal sendo os código, que utilizava uma sintaxe alfábetica, muito mais simples do que código numéricos (binários e hexadecimais);

- Estrutura:
  - A linguagem Assembly possuí uma estrutura sintática particular, sendo formada por um conjuto de instruções que, por meio de códigos mais legíveis, representam as instruções do código de máquina;
  - Instruções -> Mnemônicos;
  - É mais compreensível olhar para um mnemônico e lembrar o que faz do que seu equivalente em código binário ou hexadecimal, legível apenas pelo microprocessador (CPU) do computador;
  - Requer menos atenção a detalhes que são exigidos para programar em linguagem de máquina;

****

// Instrução Assembly
MOV AX, 0x1234	              Copia o valor 0x1234 para o registrador AX.
ADD BX, CX	                  Soma os valores dos registradores BX e CX.
JMP 0x0040	                  Salta para a posição de memória 0x0040.
HLT	                          Para a execução do processador.

// Exemplo: MOV (Move dados), ADD (Adição), JMP (Salto).
// Esses mnemônicos são legíveis e facilitam a programação.

//Código de Máquina (Hexadecimal)	
B8 34 12	                    Copia o valor 0x1234 para o registrador AX.
03 C3	                        Soma os valores dos registradores BX e CX.
E9 00 00 00 00	              Salta para a posição de memória 0x0040.
F4	                          Para a execução do processador.

****

### Assembler (assemblador):

  * O termo Assembler significa o programa montador, ou seja, é o programa utilizado para compilar um programa escrito em linguagem de montagem, tornando-o executável em um computador;
  * Assembler é basicamente o ambiente de programação;
  * Assembler -> Programa-fonte (Tradução - Assembly) -> Programa-objeto (Código de máquina) que será interpretado por um processador;
    - A ferramenta Assembler tem semelhanças com compiladores de linguagens de alto nível;
    - Não confundir nome de compiladores/ambiente de programação com a linguagem de programação;

### Por que aprender Assembly?