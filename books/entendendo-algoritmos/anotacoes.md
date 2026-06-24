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