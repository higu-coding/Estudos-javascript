class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + " já está ligado.")
            return
        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + " já está desligado.")
            return
        }
        this.ligado = false
    }
}

// "extends" vai definir a herança da classe, nos exemplos abaixo vai definir a herança de 'DispositivoEletronico' para 'Smartphone' e 'Tablet'

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo) {
        super(nome)

        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, wifi){
        super(nome)
        this.wifi = wifi
    }

    ligar() {
        console.log('Teve alteração no método ligar')
    }

    outroMetodo() {
        console.log('A classe "pai" não herda metodos da classe "filha", nem da classe "irma"')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
console.log(s1)

const t1 = new Tablet('iPad', true)
t1.ligar()
console.log(t1)