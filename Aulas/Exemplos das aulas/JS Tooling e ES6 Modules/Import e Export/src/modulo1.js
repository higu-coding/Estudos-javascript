// documentação - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export

// documentação - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import

// Para que algo seja exportado, precisa estar com a palavra export antes de declarar a variavel/função, caso contrario, não sera possivel utilizar em outro arquivo.

// A expressão "default" so pode ter 1 por arquivo, vai tornar uma exportação padrão, ou seja, no arquivo "index.js" sem as chaves {} pode dar qualquer nome para a função

export const nome = 'Jonas'
export const sobrenome = 'Miranda'
export const idade = 30

const cpf = 'cpf'

export function soma(x, y) {
    return x + y
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

// export { nome as nome2, sobrenome, idade, soma }