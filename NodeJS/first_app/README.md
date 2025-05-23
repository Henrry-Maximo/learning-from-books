# 🧠 Como funciona?
Imagina um garçom (o JavaScript):

Ele anota os pedidos (as funções).

Começa a executar uma função — só vai pra próxima quando terminar.

Mas... ele tem um balcão lateral: quando o cliente pede “me chama daqui 5 minutos” (setTimeout), ele coloca esse bilhete no balcão (Queue).

Esse garçom segue trabalhando… quando sobra um tempo, ele olha pro balcão e vê:
"Ah, chegou a hora desse pedido!"
E então, ele executa.

# 🏁 Fluxo Completo do Event Loop:
Call Stack (Pilha de Execução): onde o código síncrono é executado.

Exemplo: console.log("Oi") → executa na hora.

Web APIs: quando você chama setTimeout(), fetch(), etc., o navegador cuida disso.

Tipo: “vou deixar esse temporizador rolando…”

Callback Queue (Fila de Tarefas): quando a Web API termina, ela coloca a função de volta na fila.

Event Loop:

Ele fica de olho:
→ “Call Stack tá vazia? Então posso puxar o próximo da fila e executar.”

````
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
````

Saída:
````
A  
C  
B

````

Por quê?

A é síncrono → executa.

setTimeout vai pro balcão (Callback Queue).

C executa na sequência.

Event Loop vê a pilha vazia → pega B e executa.