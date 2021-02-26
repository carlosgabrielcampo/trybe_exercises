//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maior = 0;
let numeroatual = 0;
let maiorNumero = 0;
let contadorDeNumeros = 0;
let impar = 0;
let menor = 0;
let menorNumero;
let numeros125 = [];


// 2o  for (let index = 0; index < numbers.length; index += 1) {
//   sum = numbers[index] += sum
//    
// }
// console.log(sum);

// 3o for (let index = 0; index < numbers.length; index += 1) {
// sum = numbers[index] += sum   
// }
// sum = sum/numbers.length
// console.log(sum);

// 4o for (let index = 0; index < numbers.length; index += 1) {
//sum = numbers[index] += sum   
//}
//sum = sum/numbers.length

//if(sum > 20){
//  console.log("valor maior do que 20")
//} else {
//  console.log("valor menor ou igual a 20")
//}
//
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
//console.log(sum);



// 5o for (let index = 0; index < numbers.length; index += 1) {
//   let numeroatual = numbers[index]
//   
//    for (let indexComparativo = 0; indexComparativo <= numbers.length; indexCom
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;parativo++){
//        let numeroComparativo = numbers[indexComparativo-1]
//
//     if (numeroatual >= numeroComparativo) {
//         maior += 1;
//
//    } else {
//        maior = 0;
//    } 
//
//    if(maior == numbers.length){
//        maiorNumero = numeroatual 
//     }
//     }
//} console.log(maiorNumero)


//6o for (let index = 0; index < numbers.length; index += 1){
//   contadorDeNumeros = numbers[index];
//
//    if (contadorDeNumeros % 2 == 0){
//
//    } else {
//      impar += 1;
//    }
//
//}
//if (impar === 0){
//    console.log('nenhum valor impar encontrado')
//}
//
//console.log(impar)


//7o for (let index = 0; index < numbers.length; index += 1) {
//  let numeroatual = numbers[index]
//  
//    for (let indexComparativo = 0; indexComparativo <= numbers.length; indexComparativo++){
//        let numeroComparativo = numbers[indexComparativo-1]
//
//     if (numeroatual > numeroComparativo) {
//         menor = 0;
//
//    } else {
//        menor += 1;
//    } 
//
//    if(menor === numbers.length){
//        menorNumero = numeroatual 
//     }
//     }
//
//} console.log(menorNumero)

//8o  for (let index = 0; index < numbers.length; index += 1){
//  contadorDeNumeros = numbers[index]
//    if (contadorDeNumeros <= 25){
//       numeros125.push(contadorDeNumeros)
//    }
//}

//9o for (let index = 0; index < numbers.length; index += 1){
//    contadorDeNumeros = numbers[index]
//     if (contadorDeNumeros <= 25){
//        numeros125.push(contadorDeNumeros/2)
//     }
// }
// console.log(numeros125)


//----------------------------------------------Bonus----------------------------------------------------//
//1o for (let i = 1; i < numbers.length; i++) {
//    for (let j = 0; j < i; j++) {
//      if (numbers[i] < numbers[j]) {
//        let position = numbers[i];
//  
//        numbers[i] = numbers[j];
//        numbers[j] = position;
//      }
//    }
//  }

//2o for (let i = 1; i < numbers.length; i++) {
//    for (let j = 0; j < i; j++) {
//      if (numbers[i] > numbers[j]) {
//        let position = numbers[j];
//  
//       numbers[j] = numbers[i];
//        numbers[i] = position;
//      }
//    }
//  }

//let mutiplicacaoArray = 0;
//let depositoResultado = [];

//3o for (let index = 1; index <= numbers.length; index +=1 ){
//    mutiplicacaoArray = numbers[index-1]*numbers[index];
//   if (mutiplicacaoArray > 0){
//    depositoResultado.push(mutiplicacaoArray)
//   } else{
//   depositoResultado.push((numbers[index-1])*2)
//   }
//}
//console.log(depositoResultado);