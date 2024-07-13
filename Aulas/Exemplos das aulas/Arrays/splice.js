// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

// Sintaxe
// nomes.splice(índice, delete, elemento1, elemento2, elemento3, ...);

//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// // Pop - Vai retirar um elemento do final do array
// nomes.splice(-1, 1);
// 
// // Shift - Vai retirar um elemento do começo do array
// nomes.splice(0 , 1)
// 
// // Push - Vai adicionar um elemento no final do array
// nomes.splice(nomes.length, 0, 'Cleiton')

// Unshift - Vai adicionar um elemento do começo do array
// nomes.splice(0, 0, 'Rafael')
// console.log(nomes)