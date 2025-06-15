#include <stdio.h>

int main (void) {
	int f; 		/* n�mero de p�s */
	float p; 	/* n�mero de polegadas */
	float h;	/* altura em metros */
	
	/* Captura altura em metros */
	printf("Digite altura em metros: ");
	scanf("%f", &h);
	
	/* Calcula altura em p�s e polegadas */
	h = 100 * h;			/* converte para cent�metros */
	f = (int) (h/30.48);	/* calcula n�mero de p�s */
	p = (h-f*30.48) / 2.54;	/* calcula npumero de polegadas do restante */
	
	/* Exibe altura convertida */
	printf("Altura: %dft %.1fpol\n", f, p);
	
	return 0;
}
