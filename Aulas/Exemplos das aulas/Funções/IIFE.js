// IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

// Seguindo a sintaxe abaixo

// (function ( parametros ) {
//    
// })( );

(function (idade, peso, altura) {
    const sobrenome = 'Silva';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log( criaNome('Hiago'));
    }

    falaNome()
    console.log(idade, peso, altura);
})(19, 85, 1.70);

