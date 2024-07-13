// Revendo conceitos basicos

// Um array sempre vai começar no indice 0
const nomes = ['Eduardo', 'Maria', 'Joana']
nomes[2] = 'João';
console.log(nomes)


// O delete vai deletar o conteudo do indice, mas o indice vai permanecer o mesmo, como 'item vazio'
delete nomes[2]
console.log(nomes)


// É possivel criar um array utilizando o construtor do array
const nomes2 = new Array ('Eduardo', 'Maria', 'Joana')


//Valor por referencia
// alterando a constante 'novo' vai alterar a constante 'nomes3'
const nomes3 = ['Eduardo', 'Maria', 'Joana']
const novo = nomes3;
novo.pop()
console.log(novo)


// Os valores por referencia também podem ser copiados, utilizando o spread, então o que vai ser alterado na constante 'novo1', não altera a constante 'nomes4'
const nomes4 = ['Eduardo', 'Maria', 'Joana']
const novo1 = [...nomes4]
novo1.pop()
console.log(nomes4)
console.log(novo1)


//Para ver a quantidade de elementos que tem dentro do array, é utilizado o length
const nomes5 = ['Eduardo', 'Maria', 'Joana']
console.log(nomes5.length)


// Para remover o ultimo elemento do array, é utilizado o metodo 'pop()'
const nomes6 = ['Eduardo', 'Maria', 'Joana']
nomes6.pop()
console.log(nomes6)


// É possivel colocar o elemento removido com o pop dentro de uma variavel
const nomes7 = ['Eduardo', 'Maria', 'Joana']
const removido = nomes7.pop()
console.log(nomes7)
console.log(removido)


// O metodo shift() ao contrario do pop, que remove do final, o shift vai remover do inicio do array, então isso vai deslocar os indices do array, por isso não é muito comum de ser usado.
const nomes8 = ['Eduardo', 'Maria', 'Joana']
const removido1 = nomes8.shift()
console.log(nomes8)
console.log(removido1)


// O metodo push vai adicionar um conteudo no final do array.
const nomes9 = ['Eduardo', 'Maria', 'Joana']
nomes9.push('Jonas')
console.log(nomes9)


// O metodo unshift() vai adicionar um conteudo no inicio do array, porem, tambem desloca indices do array
const nomes10 = ['Eduardo', 'Maria', 'Joana']
nomes10.unshift('Jonas')
console.log(nomes10)


// O metodo slice vai "retirar" um determinado indice, e também pode usar numeros negativos.
const nomes11 = ['Eduardo', 'Maria', 'Joana', 'Italo', 'Pedro', 'Mariana']
//const novo2 = nomes11.slice(1, 3) // Maria e Joana
const novo2 = nomes11.slice(1, -1) // Vai retirar o Eduardo e Mariana
console.log(novo2)


// O metodo split() vai separar o conteudo de uma string, e tranformar em array
const nome = 'João Gomes Oliveira'
const nomes12 = nome.split(' ') // Vai separar a cada espaço encontrado, mas pode ser por virgulas, virgulas e espaços, etc
console.log(nomes12)

// O metodo join() vai juntar o conteudo de um array em uma string
const nome1 = ['João', 'Gomes', 'Oliveira']
const nomes13 = nome1.join(' ') 
console.log(nomes13)
