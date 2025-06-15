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

/*
	No programa, � preciso ter a fun��o principal (main),
	pois a execu��o de um programa come�a por ela.
	A fun��o `main` � automaticamente chamada quando o programa
	� carregado para a mem�ria.
	As fun��es auxiliares s�o chamadas direta ou indiretamente,
	pela fun��o principal.
	
	Tamb�m � necess�rio reservar uma �rea na mem�ria para armazenar
	determinado dado, usando a declara��o de vari�veis, tamb�m
	dizendo o tipo de dado armazenado naquela posi��o de mem�ria.
*/

int main (void) {
	// A seguinte declara��o reserva um espa�o de mem�ria para 
	// armazenar um valor real (ponto flutuante). Esse espa�o
	// de mem�ria � refer�nciado pelo s�mbolo t1.
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

/*
	formata��o: � poss�vel escrever v�rios comandos
	em uma �nica linha ou dividir um mesmo comando
	em diversas linhas. Para melhor clareza, optamos
	por escrever cada comando em uma linha.
	
	fun��es: o programa � constitu�do de fun��es pequnas.
	independentes entre si. Possuindo dois ambientes:
		Global: externo �s fun��es
		Local: definidos pelas diversas fun��es, independentes
		entre si.
		
		
	tempo de vida e visibilidade das vari�veis:
		Uma vari�vel loca, declarada dentro de uma fun��o, s�
		"vive" enquanto a fun��o estiver sendo executada, e 
		nenhuma outra fun��o possu� acesso direto a ela. 
		Tamb�m precisam ser explicitamente inicializadas antes
		do uso, caso contr�rio carregar�o "lixo", isto �, valores
		indefinidos.
	alternativa: � poss�vel definir vari�veis externas �s fun��es
	que podem ser acessadas pelo nome, por qualquer fun��o subsequente
	no programa. Tamb�m armazenam os valores de forma permanente, pelo
	menos enquanto o programa estiver sendo executado. Ou seja, elas
	ret�m seus valores mesmo quando as fun��es que as acessam s�o
	finalizadas. � poss�vel definir vari�veis globais em qualquer 
	parte do programa, mas � pr�tica comum, defini-las no in�cio
	do arquivo-fonte.
	cuidado: sempre que poss�vel, evite o uso de vari�veis globais.
	Por raz�es de clareza e estrutura��o, � recomendado o uso de 
	vari�veis locais sempre que poss�vel.

*/
