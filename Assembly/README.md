# Commands

- Assembler, linker, compilador;
- asm sudo apt install gcc
- ".s" é apenas uma convenção
- asm as asm.s -o asm.o
  - as: assembler
  - asm.s: arquivo de input
  - -o asm.o: arquivo de output
- asm gcc -o asm asm.o -nostdlib -no-pie
  - -o: definir a saída do programa
  - asm: nome do arquivo
  - asm.o: input que o Assembler criou
  - -nostdlib: não usar a lib de C (entry point - conflito), compilar sem usar a stdlib de C.
  - asm ./asm
  - asm echo $?
  - -no-pie: utilizado para que o GCC não gere endereços de memória aleatório