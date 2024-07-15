//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    if (valor % 2 !== 0){
        acumulador += valor
    }
    return acumulador
}, 0);
// console.log(total)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz',idade: 62},
    {nome: 'Mariana',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome: 'Leticia',idade: 19},
    {nome: 'Rosana',idade: 72},
    {nome: 'Wallace',idade: 47},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)