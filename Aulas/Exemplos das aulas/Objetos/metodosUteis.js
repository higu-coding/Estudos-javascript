/* Fonte -> MDN WEB DOCS

Object.values -> método estático retorna uma matriz de 'valores' de propriedade enumeráveis ​​com chave de string do próprio objeto. -> Similar ao 'Object.keys' 

Object.entries -> método estático retorna uma matriz de pares de 'chave-valor' de propriedade enumeráveis ​​de strings de um determinado objeto. -> Similar ao 'Object.keys'

Object.getOwnPropertyDescriptor(o, 'propriedade') -> método estático retorna um objeto descrevendo a configuração de uma propriedade específica em um dado objeto (ou seja, uma diretamente presente em um objeto e não na cadeia de protótipos do objeto). O objeto retornado é mutável, mas mutar ele não tem efeito na configuração da propriedade original.

Object.assign(des, any) -> método estático copia todas as propriedades próprias enumeráveis​​de um ou mais objetos de origem para um objeto de destino . Ele retorna o objeto de destino modificado.

...(spread)

//Já vi 
Object.keys (retorna as chaves)
Object.freeze (congela o objeto, impedindo alterações)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define varias propriedades)

*/

// Metodo assign
const produto = { nome: 'Produto', preco: 1.8}
const caneca = Object.assign({}, produto, { material: 'porcelana   '})
caneca.nome = 'Outro nome'
caneca.preco = 25
console.log(produto)
console.log(caneca)

// Metodo values
const produto2 = { nome: 'Produto2', preco: 1.8}
console.log(Object.values(produto2))

// Metodo entries
const produto3 = { nome: 'Produto3', preco: 1.8, material: 'porcelana'}
for (let entry of Object.entries(produto3)) {
    console.log(entry)
}

// Metodo getOwnPropertyDescriptor
const produto4 = { nome: 'Produto4', preco: 1.8}
Object.defineProperty(produto4, 'nome', {
    writable: false,
    configurable: false,
    value: 'Alguma coisa'
})

console.log(Object.getOwnPropertyDescriptor(produto4, 'nome'))
console.log(produto4)