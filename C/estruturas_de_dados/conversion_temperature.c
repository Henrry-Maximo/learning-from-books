#include <stdio.h>

float converte (float c)
{
	float f;
	f = 1.8*c + 32;
	return f;
}

int main (void) {
	float t1;
	float t2;
	
	printf("Write a temperature at Celsius: \n");
	scanf("%f", &t1);
	t2 = converte(t1);
	
	printf("Temperature at fahrenheit: %f\n", t2);
	return 0;
}
