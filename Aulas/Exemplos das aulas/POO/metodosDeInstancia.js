// Métodos de instância e estático 
// A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.


class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    //Metodos de instancia
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    // Metodo estatico
    static soma(x, y) {
        console.log(this)
    }
}

const controle1 = new ControleRemoto('LG')
ControleRemoto.soma()

