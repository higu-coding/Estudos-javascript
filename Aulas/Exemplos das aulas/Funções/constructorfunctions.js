// O construtor Function cria um novo objeto Function. Chamar o construtor diretamente pode criar funções dinamicamente, mas sofre com problemas de segurança e desempenho semelhante (mas muito menos significativo) a eval. No entanto, diferentemente de eval, a Função construtora cria funções que executam somente no escopo global.

// Construtora => Começa com letra maiuscula (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados - quando não ficarão disponiveis fora do corpo do objeto.
    const ID = 123456;
    
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método.')
    }
}

const pessoa1 = new Pessoa('Jonas', 'Silva');
const pessoa2 = new Pessoa('Luiz', 'Oliveira');

pessoa2.metodo();