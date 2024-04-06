/*
 Tratamento de erros com try e catch
*/

try{
    //console.log(qa)
    console.log('Abri o arquivo')
    console.log('Possivel erro')
    console.log('Fechei o arquivo')
} catch(err){
    console.log('Deu erro! Tente novamente')
} finally {
    console.log('Independente do que acontecer, eu sempre estarei aqui!')
}

// Tambem é possivel aninhar no try e catch

//  try{
//      //console.log(qa)
//      console.log('Abri o arquivo')
//      console.log('Possivel erro')
//      console.log('Fechei o arquivo')
//  
//      try {
//          console.log(b)
//      }catch(e){
//          console.log('Deu erro!')
//      }
//  
//  } catch(err){
//      console.log('Deu erro! Tente novamente')
//  } finally {
//      console.log('Independente do que acontecer, eu sempre estarei aqui!')
//  }