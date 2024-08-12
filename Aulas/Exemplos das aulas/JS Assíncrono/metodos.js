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
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

// Promise.all / Promise.race / Promise.resolve / Promise.reject

const promises = [
    'Primeiro valor', 
    waiting('Promise 1', 3000),
    waiting('Promise 2', 500),
    waiting('Promise 3', 1000),
    'Outro valor'
]

Promise.all(promises).then(function(valor) {
    console.log(valor)
}).catch(function(erro) {
    console.log(erro)
})