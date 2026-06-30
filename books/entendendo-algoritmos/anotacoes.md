# Introdução

- Um algoritmo é um conjunto de instruções que descrevem uma a realização de uma tarefa. Os algoritmos escolhidos são utilizado porque são rápido ou resolvem problemas interessantes (ambos os motivos).
- No cap. 1 é possível utilizar a pesquisa binária para reduzir o número de etapas necessárias de 4 bilhões para 32 etapas. Aliás, o dispositivo de GPS utiliza um algoritmo de grafos podendo calcular a rota mais curta até o destino. Além da programação dinâmica, para escrever um algoritmo de IA para jogar damas.

```
Desafio: algoritmo de IA pra jogar damas.
```

- Tempo de execução do algoritmo em notação Big O.
- Diversas linguagens implementar, através de métodos nativos, os algoritmos trabalhados no livro. Precisamos entender o ponto forte e fraco de cada algoritmo. A ideia é aprender a comparar o desempenho de diferentes algoritmos.
- Algoritmos: merge sort (ordenação por mistura), quicksort (ordenação rápida)...
- Estrutura de dados: um array (vetor), uma lista (linked list)?

- Em um exemplo simples, temos uma lista e com uma pesquisa simples, podemos encontrar um item em 4 milissegundos, pois já percorremos e encontramos ao mesmo tempo. Enquanto que nos restantes dos algoritmos, que iremos ver, é necessário percorrer toda a lista primeiro, o que levaria 13 milissegundos só para ler todos os items primeiro.

- Solução de problemas, se deve aprender a programar e depois você pode aprender a linguagem que deseja.
- Conceitos necessários: álgebra básica, interpretação de texto, lógica básica.
- Recomendação: se usa uma distro GNU, use a linguagem Bash (aprender algoritmos, e programar, por tabela).

## Pequisa binária

- Por exemplo, temos uma lista telefônica e queremos encontrar alguém que tenha a primeira letra como: "K", ou seja abrimos e começar pela metade até chegar no resultado desejado. Isto se caracteriza como um PROBLEMA de busca.
- A pesquisa binária recebe como entrada uma lista ordenada de elementos. É necessário estar ordenado. Se o elemento estiver na lista, a pesquisa retornará, se não estiver, retornará vazio. Provocando um erro.
- Um exemplo para compreensão do algoritmo, é imaginar um número entre 1 e 100. Agora precisamos descobrir esse valor imaginado. Então usamos o valor "50", pois ele possibilita termos uma vantagem, o programa nos dirá se está "baixo demais" ou "alto demais", pensando que o valor é 27. Obtemos então a resposta do programa como "alto demais". Então agora sabemos que o número não está entre 50 e 100. Ou seja, está abaixo do "50". Vamos então colocar o valor "25", sempre a metade. E, então o programa dirá: "baixo demais"... agora sabemos que o valor está entre 25 e 50. Observe que a ideia é descobrir o item com a menor quantidade de iteração possível (tentativas).
Se continuarmos, será "36" e o programa diria: "alto demais". Então agora sabemos que o valor está entre 25 e 36, sendo "29" a metade, e agora o programa responde: "alto demais". Então está entre 25 e 29, e se não é o 25 e nem o 29. Sobra o 26, 27 e 28. Então escolhemos o "27" e acertamos!
- O jogo da adivinhação!
- Também podemos ir de um por um, chamada de pesquisa simples. Se fosse 99 números, precisaria de 99 tentativas.
- Então na pesquisa binária, por etapas, eliminamos diversos items, e a quantidade vai aumentando de acordo com a etapa.
- logaritmico: descreve a quantidade de vezes que eu preciso fazer uma operação pra chegar em um determinado resultado.

### Exemplo em Python

- O algoritmo usa uma estrutura de dados chamada array para armazenar uma sequência de elementos em uma lista, inicializand o índice como 0.

```
baixo = 0 // inicializa com o primeiro elemento da lista
alto = len(lista) - 1 // comprimento de uma lista subtraindo o valor de 1

meio = (baixo + alto) / 2 // o meio sempre será arredondado para baixo
chute = lista[meio]

if chute < item:
    baixo = meio + 1
```

Código:
```
def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1
    while baixo <= alto:
        meio = (baixo + alto) / 2
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    return None

minha_lista = [1, 3, 5, 7, 9]
print pesquisa_binaria(minha_lista, 3)
print pesquisa_binaria(minha_lista, -1)
```

- Desafio: escrever o mesmo algoritmo para encontrar uma palavra em um dicionário

# Capítulo 4

## Quicksort.

- O conceito se aplica quando precisamos ordenar um array, um conjuto de valores no formato da estrutura de um array. Ou seja, se tivermos um array: [20, 24, 15, 33, 53, 11, 8] apneas escolhemos um elemento como pivô, sendo o meio para que possamos organizar os valores, separando em esquerda [20, 24, 15, 11, 8] para os menores e direita para os maiores [53]. O pivô, neste caso, foi estabelecido como 33. Notamos então que a partir do número 33, pegamos todos os valores que forem menor que este e passamos para à esquerda. Veja que os números não estão ordenados, ou seja, precisamos selecionar um novo elemento como pivô, podendo ser o 15. Assim, em uma especie de recursão, realizamos a ordenação do array/vetor.

### Código Quicksort

```
def quicksort(array):
    # Caso base: arrays com 0 ou 1 elemento já estão ordenados
    if len(array) < 2:
        return array
    else:
        pivo = array[0] # Escolhe o primeiro elemento como pivô
        
        # Sub-array de todos os elementos menores ou iguais ao pivô
        menores = [i for i in array[1:] if i <= pivo]
        
        # Sub-array de todos os elementos maiores que o pivô
        maiores = [i for i in array[1:] if i > pivo]
        
        # Recursão: ordena os menores, junta com o pivô e ordena os maiores
        return quicksort(menores) + [pivo] + quicksort(maiores)

# Teste
print(quicksort([10, 5, 2, 3]))  
# Saída esperada: [2, 3, 5, 10]
```

- Caso Base (Âncora): O algoritmo funciona para o menor caso possível. No código, se o array tem tamanho 0 ou 1, ele já está ordenado (len(array) < 2).

- Caso Recursivo (Passo Indutivo): O algoritmo funciona para um array de tamanho 1, provamos que ele funciona para um array de tamanho B (os menores) e tamanho C (os maiores). Ao juntar tudo com o pivô, se prova que ele funciona para um array de tamanho N (o array inteiro).

## Notação Big: Revisão

### Pesquisa Binária

- O O(log n) significa que o tempo de execução do algoritmo cresce de forma logarítmica em relação ao número de elementos (n), Ou seja, significa que a cada passo que o algoritmo dá, o tamanho do problema é cortado pela metade.
- Para 100 elementos, precisariamos de 7 passos. Para 200 elementos, precisariamos de 8 passos.
- Divide para conquistar!

### Pesquisa Simples

- Quando falamos de um algoritmo O(n), queremos dizer que o tempo de execução cresce de forma linear em relação ao número de elementos (n). Ou seja, o número de operações que o computador realiza é diretamente proporcional à quantidade de itens na lista.
- No pior cenário (se o elemento for o último ou não estiver na lista), o algoritmo precisará testar cada um dos elementos. Se a lista tem 10 elementos, faz 10 operações. Se a lista tem 1 milhão, faz 1 milhão de operações.

### Quicksort

- O "n" significa a quantidade de elementos que precisamos percorrer e comparar a cada rodada para separar entre maiores e menores que o pivô (o particionamento).
- O "log n" representa a quantidade de vezes que o array será dividido pela metade (a profundidade da recursão) até que restem apenas sub-arrays de tamanho 1.
- Multiplicando os dois, temos o tempo total do pior cenário médio: passamos por "n" elementos ao longo de "log n" divisões.