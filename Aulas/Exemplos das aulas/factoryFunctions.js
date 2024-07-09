// Em JavaScript, uma função de fábrica é uma função que retorna um objeto . É uma maneira de criar e retornar objetos de uma maneira mais controlada e personalizável. Funções de fábrica são uma forma de padrão de design que permite a criação de objetos com propriedades e comportamentos específicos.

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}` // this. serve para pegar do objeto, e não dos parametros
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // split vai separar o conteudo a cada espaço encontrado e colocá-los em um array
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() { 
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const pessoa2 = criaPessoa('Junior', 'Silva', 1.9, 70);
const pessoa3 = criaPessoa('Luiz', 'Otavio', 2.0, 85);

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)

// Quando se usa o get, como foi feito no IMC, o imc vira atributo, e deixa de ser uma função, por isso não é seguido pelos parenteses ()