function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
p1.aumento(100)
// p1.desconto(100)
//console.log(p1)


// Na forma literal
const p2 = {
    nome: 'Caneca',
    preco: 40
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
// console.log(p2)

const p3 = Object.create(Produto.prototype, {
    // Pode configurar os atributos criando um objeto
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 110
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    }
})
//p3.preco = 110
p3.aumento(10)
console.log(p3)
