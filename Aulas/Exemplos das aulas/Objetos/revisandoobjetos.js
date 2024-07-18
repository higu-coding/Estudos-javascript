// Revisão de Objetos

//Metodo literal
const pessoa = {
    nome: 'Jonas',
    sobrenome: 'Oliveira'
}

// const chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa['nome'])

//Metodo construtor
const pessoa1 = new Object()
pessoa1.nome = 'Carlos'
pessoa1.sobrenome = 'Otavio'

// Possivel usar 'delete'
// delete pessoa1.nome
console.log(pessoa1)

// É possivel ter funções dentro dos objetos
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
}