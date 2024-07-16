// O método forEach() executa uma dada função em cada elemento de um array.

const a1 = [10, 20, 30]
let total = 0

a1.forEach(valor => {
    total += valor
})

console.log(total)