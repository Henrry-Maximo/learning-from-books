#include <stdio.h>

// função para receber o value float
// e realizar cálculo, retornando
// no final

float converte (float c)
{
	float f;
	f = 1.8*c + 32;
	return f;
}

/*
	No programa, é preciso ter a função principal (main),
	pois a execução de um programa começa por ela.
	A função `main` é automaticamente chamada quando o programa
	é carregado para a memória.
	As funções auxiliares são chamadas direta ou indiretamente,
	pela função principal.
	
	Também é necessário reservar uma área na memória para armazenar
	determinado dado, usando a declaração de variáveis, também
	dizendo o tipo de dado armazenado naquela posição de memória.
*/

int main (void) {
	// A seguinte declaração reserva um espaço de memória para 
	// armazenar um valor real (ponto flutuante). Esse espaço
	// de memória é referênciado pelo símbolo t1.
	float t1;
	float t2;
	
	// Mostra mensagem para usuário	
	printf("Write a temperature at Celsius: \n");
	
	// captura valor entrado via teclado
	scanf("%f", &t1);
	
	// faz a conversão, chamando função auxiliar
	t2 = converte(t1);
	
	// exibe resultado
	printf("Temperature at fahrenheit: %f\n", t2);
	return 0;
}

/*
	formatação: é possível escrever vários comandos
	em uma única linha ou dividir um mesmo comando
	em diversas linhas. Para melhor clareza, optamos
	por escrever cada comando em uma linha.
	
	funções: o programa é constituído de funções pequnas.
	independentes entre si. Possuindo dois ambientes:
		Global: externo às funções
		Local: definidos pelas diversas funções, independentes
		entre si.
		
		
	tempo de vida e visibilidade das variáveis:
		Uma variável loca, declarada dentro de uma função, só
		"vive" enquanto a função estiver sendo executada, e 
		nenhuma outra função possuí acesso direto a ela. 
		Também precisam ser explicitamente inicializadas antes
		do uso, caso contrário carregarão "lixo", isto é, valores
		indefinidos.
	alternativa: é possível definir variáveis externas às funções
	que podem ser acessadas pelo nome, por qualquer função subsequente
	no programa. Também armazenam os valores de forma permanente, pelo
	menos enquanto o programa estiver sendo executado. Ou seja, elas
	retêm seus valores mesmo quando as funções que as acessam são
	finalizadas. É possível definir variáveis globais em qualquer 
	parte do programa, mas é prática comum, defini-las no início
	do arquivo-fonte.
	cuidado: sempre que possível, evite o uso de variáveis globais.
	Por razões de clareza e estruturação, é recomendado o uso de 
	variáveis locais sempre que possível.

*/
