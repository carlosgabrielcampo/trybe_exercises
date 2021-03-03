let repeticoes;

repeticoes = 57;
//
let asterisco;

asterisco = "*";
vazio = " ";

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





//if (repeticoes % 2 === 0){
//   for (let index = 2; index <= repeticoes; index += 2){
//    let asteriscomulti = vazio.repeat((repeticoes-index+1)/2) + asterisco.repeat(index)
//    console.log(asteriscomulti)
//    }

//} else {
//    for (let index = 1; index <= repeticoes+1; index += 2){
//        let asteriscomulti = vazio.repeat((repeticoes-index+1)/2) + asterisco.repeat(index)
//        console.log(asteriscomulti)
//   }
//}


for (let index = 1; index <= repeticoes+1; index += 2){
    if (index === 1 || index === repeticoes){

    let asteriscomulti = vazio.repeat((repeticoes-index+1)/2) + asterisco.repeat(index)
    console.log(asteriscomulti)

    } else{

    let asteriscomulti = vazio.repeat((repeticoes-index+1)/2) + asterisco + vazio.repeat((index)-2) + asterisco
     console.log(asteriscomulti)
    }


}
