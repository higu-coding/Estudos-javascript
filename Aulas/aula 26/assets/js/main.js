const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#weight')
    const inputHeight = event.target.querySelector('#height')
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if(!weight){
        setResult('Peso inválido', false)
        return
    }

    if(!height){
        setResult('Altura inválida', false)
        return
    }

    const imc = getImc(weight, height)

    const imcLevel = getImcLevel(imc)

    const msg = `Seu imc é ${imc} (${imcLevel}.)`

    setResult(msg, true)
})

function getImcLevel(imc){
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9){
        return level[5]
    }
    if(imc >= 34.9){
        return level[4]
    }
    if(imc >= 29.9){
        return level[3]
    }
    if(imc >= 24.9){
        return level[2]
    }
    if(imc >= 18.5){
        return level[1]
    }
    if(imc <= 18.4){
        return level[0]
    }
}

function getImc(weight, height){
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

function createParagraph() {
    const p = document.createElement('p')
    return p
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result')
    result.innerHTML = '';

    const p = createParagraph()

    if(isValid){
        p.classList.add('result-paragraph')
    } else {
        p.classList.add('invalid-result')
    }

    p.innerHTML = msg
    result.appendChild(p)
}