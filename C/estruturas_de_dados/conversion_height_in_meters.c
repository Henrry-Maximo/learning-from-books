#include <stdio.h>

int main (void) {
	int f; 		/* número de pés */
	float p; 	/* número de polegadas */
	float h;	/* altura em metros */
	
	/* Captura altura em metros */
	printf("Digite altura em metros: ");
	scanf("%f", &h);
	
	/* Calcula altura em pés e polegadas */
	h = 100 * h;			/* converte para centímetros */
	f = (int) (h/30.48);	/* calcula número de pés */
	p = (h-f*30.48) / 2.54;	/* calcula npumero de polegadas do restante */
	
	/* Exibe altura convertida */
	printf("Altura: %dft %.1fpol\n", f, p);
	
	return 0;
}
