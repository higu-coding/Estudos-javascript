// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (Somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)

// Pares - [  50,  80, 2, 4,  8, 22 ]
// Dobro - [ 100, 160, 4, 8, 16, 44 ]
// Soma - 332
console.log(numerosPares)