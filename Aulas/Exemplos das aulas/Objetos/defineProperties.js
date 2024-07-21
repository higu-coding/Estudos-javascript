// O Object.defineProperties() método estático define novas propriedades ou modifica propriedades existentes diretamente em um objeto, retornando o objeto.

// O 'defineProperties' é para ser usado em varias chaves
function Produto(nome, preco, estoque) {
    // Sintaxe
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, 
        writable: true, // pode alterar?
        configurable: true // confugurável
    })

    // Sintaxe
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, 
            writable: true, // pode alterar?
            configurable: true // confugurável
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1))

for(let chave in p1) {
    console.log(chave)
}
