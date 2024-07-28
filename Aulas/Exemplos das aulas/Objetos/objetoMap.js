// O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor.

const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Jonas'}
]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, { ...pessoa})
}

// novasPessoas.delete(2)

console.log(novasPessoas)

// console.log(novasPessoas.get(2))

