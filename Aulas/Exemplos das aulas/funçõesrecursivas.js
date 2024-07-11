// No contexto da computação, as funções recursivas são aquelas que apresentam chamadas, diretas ou indiretas, a si mesmas. São exemplos comuns de funções recursivas aquelas aplicadas a calcular o fatorial de um número e o n-ésimo termo de sequência de Fibonacci.

//E tem um limite para ser usado a recursividade

function recursiva (max) {
    if (max >= 10) return;
    max++;
    console.log(max)
    recursiva(max)
}

recursiva(0)