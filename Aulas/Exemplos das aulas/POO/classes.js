// Muito similar as funções construtoras, porém não é necessario fazer a ligação ao prototype

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa('Luiz', 'Carlos')
p1.falar()