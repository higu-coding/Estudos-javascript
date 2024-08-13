function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max-min) + min)
}

function waiting(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD RESPONSE')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

// Promise.all / Promise.race / Promise.resolve / Promise.reject

const promises = [
    //'Primeiro valor', 
    waiting('Promise 1', rand(1, 5)),
    waiting('Promise 2', rand(1, 5)),
    waiting('Promise 3', rand(1, 5)),
    //'Outro valor'
]

// Promise.all

// Promise.all(promises).then(function(valor) {
//     console.log(valor)
// }).catch(function(erro) {
//     console.log(erro)
// })

// Promise.race
Promise.race(promises).then(function(valor) {
    console.log(valor)
}).catch(function(erro) {
    console.log(erro)
})