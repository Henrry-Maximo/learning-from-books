org 100h

mov ax, 0009h   ; Valor 1
mov bx, 0001h   ; Valor 2

; Fazendo a Adição (Resultado em AX)
add ax, bx      ; AX = 0009 + 0001 = 000A

; Fazendo a Subtração (Usando outro registrador para comparar)
mov dx, 0009h   ; Coloca o 9 em DX
sub dx, bx      ; DX = 0009 - 0001 = 0008

ret



