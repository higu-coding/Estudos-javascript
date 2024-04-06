function showHour() {
    let date = new Date()

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function() {
    console.log(showHour())
}, 10000)

setTimeout(function(){
    clearInterval(timer)
}, 10000)