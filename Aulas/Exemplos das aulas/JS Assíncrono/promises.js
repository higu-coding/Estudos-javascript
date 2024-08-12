function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max-min) + min)
}

function waiting(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD RESPONSE')
            return
        }
        
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

waiting('Conexão com o Banco de Dados', rand(1, 3)).then(resposta => {
    console.log(resposta)
    return waiting('Buscando dados da BASE', rand(1, 3))
}).then(resposta => {
    console.log(resposta)
    return waiting(22222, rand(1, 3)) // ao colocar 22222 entre '' o codigo ira rodar normalmente
}).then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Exibe dados na tela')
}).catch(e => {
    console.log('ERRO:', e)
})

console.log('Isto será exibido antes de qualquer promise.')