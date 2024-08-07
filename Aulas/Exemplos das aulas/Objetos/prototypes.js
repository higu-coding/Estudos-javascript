/* 
Javascript é baseado em protótipos para passar propriedades e metodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo uusado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quuando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

// Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

// Instancia
const pessoa1 = new Pessoa('Luiz', 'O.')
const pessoa2 = new Pessoa('Maria', 'A.')