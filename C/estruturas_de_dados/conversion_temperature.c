#include <stdio.h>

// fun��o para receber o value float
// e realizar c�lculo, retornando
// no final

float converte (float c)
{
	float f;
	f = 1.8*c + 32;
	return f;
}

int main (void) {
	float t1;
	float t2;
	
	// Mostra mensagem para usu�rio	
	printf("Write a temperature at Celsius: \n");
	
	// captura valor entrado via teclado
	scanf("%f", &t1);
	
	// faz a convers�o, chamando fun��o auxiliar
	t2 = converte(t1);
	
	// exibe resultado
	printf("Temperature at fahrenheit: %f\n", t2);
	return 0;
}
