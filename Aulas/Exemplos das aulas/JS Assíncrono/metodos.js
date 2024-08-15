//O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.

//O método Promise.race(iterable) retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise.

//O método Promise.resolve(value) retorna um objeto Promise que é resolvido com o valor passado. Se o valor for thenable (ex: tiver um método then), a promise retornada irá "seguir" esse thenable, adotando seu estado final; se o valor for uma promise, o objeto será o resultado da chamada Promise.resolve; do contrário a promise será realizada com o valor.

//O método Promise.reject(motivo) retorna um objeto Promise que é rejeitada com um dado motivo.

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

// const promises = [
//     //'Primeiro valor', 
//     waiting('Promise 1', rand(1, 5)),
//     waiting('Promise 2', rand(1, 5)),
//     waiting('Promise 3', rand(1, 5)),
//     //'Outro valor'
// ]

// Promise.all

// Promise.all(promises).then(function(valor) {
//     console.log(valor)
// }).catch(function(erro) {
//     console.log(erro)
// })

// Promise.race
// Promise.race(promises).then(function(valor) {
//     console.log(valor)
// }).catch(function(erro) {
//     console.log(erro)
// })

// Promise.resolve e reject
// se a constante  'emCache' estiver como 'true', e estiver retornando o metodo resolve, vai cair  no metodo '.then', se estiver retornando o metodo  reject,  vai  cair no metodo '.catch'  

function baixaPagina() {
    const emCache = true

    if(emCache){
        // return Promise.resolve('Página em cache')
        return Promise.reject('Página em cache')
    } else {
        return waiting('Baixei a página',  3000)
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina)
}).catch(e => console.log('ERRO',e))