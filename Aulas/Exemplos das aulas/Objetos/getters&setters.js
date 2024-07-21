// Getters e setters são comuns em várias linguagens, no javascript não seria diferente, eles nos ajudam a encapsular/proteger/isolar propriedades e facilitar o trabalho com objetos. Normalmente utilizamos quando precisamos fazer validações ou tratamentos antes de salvar um dados. O mesmo acontece para recuperá-los.

// Getters -> Para obter valores
// Setters -> Para configurar o mesmo valor

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    // Sintaxe  
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // confugurável
        get: function(){
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('O valor digitado não é válido!')
            }

            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 'String'
p1.estoque = 20
console.log(p1.estoque)


// Getters e Setters em factory functions
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa', ' ')
            nome = valor
        }
    }
}

const p2 = criaProduto('Camiseta')
console.log(p2)
p2.nome = 'Qualquer coisa'
console.log(p2.nome)