function Calculadora() {
    
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', (e) => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.capturaClicks = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumToDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    
    this.addNumToDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () =>  {
        this.display.value = ' ';
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = () => {

        try{

            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta invalida! Tente novamente.')
                return
            }
            this.display.value = conta;

        }catch(e) {
            alert('Conta invalida! Tente novamente.')
            return;
        }

    }

    

}

const calculadora = new Calculadora();
calculadora.inicia();