org 100h

mov ax, 0005h   ; Coloca 5 em AX
mov bx, 0001h   ; Coloca 1 em BX

add ax, bx      ; Soma BX com AX (Resultado 0006h fica em AX)

mov ax, 0005h   ; Reseta AX para 5
sub ax, bx      ; Subtrai BX de AX (Resultado 0004h fica em AX)

ret
