// A declaração function* (palavra chave function seguida de um asterisco) define uma função geradora (generator function), que retorna um objeto Generator.

// Se usar o return, vai fazer com que a função geradora termine naquele momento.

function* geradora1() {
    // Codigo qualquer ...
    yield 'Valor 1';
    // Codigo qualquer ...
    yield 'Valor 2';
    // Codigo qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();

// console.log(g1.next().value); // Pega o primeiro valor
// console.log(g1.next().value); // Pega o Segundo valor
// console.log(g1.next()); // Pega o terceiro valor
// console.log(g1.next()); // Fala que não tem valor definido, e que não tem mais valores

// Iteração sobre os valores da função 
for (let valor of g1) {
    console.log(valor)
}


// Vai ser um contador infinito abaixo
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

// const g2 = geradora2();
// 
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4(); 

// for (let valor of g4) {
//     console.log(valor)
// }

function* geradora5() {
    yield function() {
        console.log('Vim do Y1')
    };

    // ...

    // return function() {
    //     console.log('Vim do return')
    // };

    yield function() {
        console.log('Vim do Y2')
    };
}

const g5 = geradora5();

const func1 = g5.next().value
const func2 = g5.next().value

func1();
func2();