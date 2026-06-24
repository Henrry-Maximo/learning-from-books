; Entry Point - função main (_Start)
.global _start
.intel_syntax noprefix

_start:
    CALL print_hello_word
    JMP exit

print_hello_word:
    MOV rax, 0x01
    MOV rdi, 0x01
    LEA rsi, [hello_str]
    MOV rdx, 14
    SYSCALL
    RET

exit:
    ; the first argument is always destiny.
    ; the second argument is always the origin.
    MOV rax, 0x3c
    MOV rdi, 0
    SYSCALL

.section .data
    hello_str: .asciz "hello, world!\n"