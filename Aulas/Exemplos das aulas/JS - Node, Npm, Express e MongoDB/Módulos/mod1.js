class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const nome = 'Jonas'
const sobrenome = 'Miranda'

// Maneiras de exportar modulos
module.exports = {
    nome, Pessoa
}
exports.sobrenome = sobrenome
module.exports.sobrenome = sobrenome
