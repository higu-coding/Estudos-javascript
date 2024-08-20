// documentação https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// A API Fetch fornece uma interface JavaScript para fazer solicitações HTTP e processar as respostas.

// Fetch é o substituto moderno para XMLHttpRequest: diferentemente de XMLHttpRequest, que usa retornos de chamada, Fetch é baseado em promessas e é integrado com recursos da web moderna, como service workers e Cross-Origin Resource Sharing (CORS) .


const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
   
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')
    
    // const objConfig = {
    //     method: 'GET',
    //     url: href,
        
    // }

    // try {
    //     const response = await request(objConfig)
    //     carregaResultado(response)
    // } catch (e) {
    //     console.log(e)
    // }

// Fetch API abaixo

   try {
        const response = await fetch(href)

        if(response.status !== 200) throw new Error('ERRO')

        const html = await response.text()

        carregaResultado(html)
   } catch(e) {
        console.log(e)
   }

    // fetch(href)
        // .then(response => {
        //     if(response.status !== 200) throw new Error('ERRO')
        //     return response.text()
        // })
        // .then(html => carregaResultado(html))
        // .catch(e => console.log(e))

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

// Fetch API na função 'carregaPagina'

