 function getDayOfWeek(day){
     let date;
 
     switch (day){  // em vez de swith tbm pode usar array, ja que começa do 0 tambem
         case 0:
             date = 'Domingo'
             return date
         case 1:
             date = 'Segunda-feira'
             return date
         case 2:
             date = 'Terça-feira'
             return date
         case 3:
             date = 'Quarta-feira'
             return date
         case 4:
             date = 'Quinta-feira'
             return date
         case 5:
             date = 'Sexta-feira'
             return date
         case 6:
             date = 'Sábado'
             return date
     }
     return `${day}`
 }
 
 function zeroLeft(number){
     return number >=10 ?  number : `0${number}`
 }
 
 function getCurrentData(data){
     const day = zeroLeft(data.getDate())
     const month = zeroLeft(data.getMonth() + 1)
     const year = zeroLeft(data.getFullYear())
     const hour = zeroLeft(data.getHours())
     const minutes = zeroLeft(data.getMinutes())
     const seconds = zeroLeft(data.getSeconds())
 
     return `${day}/${month}/${year}, hora atual: ${hour}:${minutes}:${seconds}`
 }
 
 const data = new Date()
 const day = data.getDay()
 const actual = getCurrentData(data)
 const current = getDayOfWeek(day)
 
 document.getElementById('date').innerHTML = (`${current}, dia ${actual}`)
