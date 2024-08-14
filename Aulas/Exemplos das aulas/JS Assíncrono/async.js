function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max-min) + min)
}

function waiting(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ERRO')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

async function executa() {
    try {
        const fase1 = await waiting('Fase 1', rand(0, 3))
        console.log(fase1)
        
        const fase2 = await waiting('Fase 2', rand(0, 3))
        console.log(fase2)
        
        const fase3 = await waiting(2, rand(0, 3))
        console.log(fase3)
        
        console.log('Terminamos na fase:', fase3)
    } catch(e) {
        console.log(e)
    }
}
executa()

// A Promise tem 3 estados
// pending -> pendente, quando não usa a palavra 'await'
// fullfilled -> resolvida
// rejected -> rejeitada