let repeticoes;

repeticoes = 10;
//
let asterisco;
//
//1o  for (let index = 1; index <= repeticoes; index += 1){
//
//    asterisco = "*";
//    
//    let asteriscomulti = asterisco.repeat(repeticoes)
//  
//}


//2o  asterisco = "*";
//
//for (let index = 1; index <= repeticoes; index += 1){
//
//    let asteriscomulti = asterisco.repeat(index)
//
//console.log(asteriscomulti)
//   
//}

//asterisco = "*";
//vazio = " ";

//for (let index = 1; index <= repeticoes; index += 1){

//   let asteriscomulti = vazio.repeat(repeticoes-index+1) + asterisco.repeat(index)

//console.log(asteriscomulti)
   
//}

asterisco = "*";
vazio = " ";

for (let index = 1; index <= repeticoes; index += 1){

    let asteriscomulti = vazio.repeat(repeticoes-index+1) + asterisco.repeat(index)

console.log(asteriscomulti)
   
}


