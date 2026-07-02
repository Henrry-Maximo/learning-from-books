#include <stdio.h>

// o quadrado de um número é sempre positivo, por isso utiliza-se unsigned long. Utilizando toda a extensão disponível do tipo long, da faixa de 0 até... 
// compilador entende também long
unsigned long int quadrado(long base) {
  return base * base;
}

int main(void) {
  long num = 100000;

  /*
  (2^32) - 1 = 4.294.967.295
  100.000^2 = 10.000.000.000

  char ->       1 byte
  short int ->  2 byte
  int ->        4 bytes
  long int ->   8 bytes
  */

  printf("%ld^2 = %lu\n", num, quadrado(num));
  return 0;
}