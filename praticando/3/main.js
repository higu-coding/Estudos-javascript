// minha resolução

function ePaisagem(largura, altura){
    if(largura>altura){
        console.log('Está em paisagem')
        return true
    } else {
        console.log('Nao esta em paisagem')
        return false
    }
}
console.log(ePaisagem(700, 1000))

//outras alternativas
// 
// function screenMode(largura, altura){
//     return largura>altura
// }
// 
// console.log(screenMode(1900, 1080))

// com arrow function

// const isPortrait = (largura, altura) => largura>altura
// 
// console.log(isPortrait(1900, 1080))