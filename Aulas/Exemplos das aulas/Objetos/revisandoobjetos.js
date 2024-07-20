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

// Metodo construtor com funções
const pessoa1 = new Object()
pessoa1.nome = 'Carlos'
pessoa1.sobrenome = 'Otavio'
pessoa1.idade = 30
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
    console.log(pessoa1[chave]) // entre colchetes, vai mostrar o valor da chave
}

//-----------------------------------------------------------------------------------------------
// Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('Jonas', 'Santos')
console.log(p1.nomeCompleto())

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
// A palavra 'new' vai criar um objeto vazio, e vai atrelar a palavra 'this', que esta dentro do objeto
const p2 = new Pessoa('Luiz', 'Miranda')
console.log(p2)