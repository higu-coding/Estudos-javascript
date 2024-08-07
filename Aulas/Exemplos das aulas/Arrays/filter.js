// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// Filter - Sempre vai retornar um array com a mesma quantidade de elementos, ou menos.
// Retorne os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10   
// }

const numerosFiltrados = numeros.filter(valor => valor > 10)
// console.log(numerosFiltrados)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a letra A
const pessoas = [
    {nome: 'Luiz',idade: 62},
    {nome: 'Mariana',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome: 'Leticia',idade: 19},
    {nome: 'Rosana',idade: 32},
    {nome: 'Wallace',idade: 47},
];

const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 5;
})
console.log(pessoasComNomeGrande)

const pessoasIdadeMaior = pessoas.filter((obj) => {
    return obj.idade > 50;
})
console.log(pessoasIdadeMaior)

const nomeTerminaComA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a')
})
console.log(nomeTerminaComA)