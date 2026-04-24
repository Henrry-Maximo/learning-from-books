console.log("Algoritmo de Busca Binária");

const item = 5;
const lista = [1, 2, 3, 4, 5];

function main(lista, item) {
  let baixo = 0, alto = (lista.length) - 1, i = 0;

  while (baixo <= alto) {
    i++;
    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute === item) {
      console.log(`Item ${chute} encontrado no índice ${meio} em ${i} iterações`)
      return { meio, i };
    }

    if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }

  return { meio: -1, i };
}

const { meio, i } = main(lista, item);;
if (meio === -1) console.log(`Item não encontrado após ${i} iterações...`);