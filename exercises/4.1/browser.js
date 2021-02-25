let num1 = 10;
let num2 = 20;
let num3 = 29;
let chessPiece = 'peão';
let porcentagem = 52;
let custoDoProduto = 28;
let valorDeVenda = 0;
let imposto = 0.2;
let salario = 3000;
let inss;
let ir;
let salarioLiquido;

let adição = num1 + num2;
console.log(adição);

let subtração = num1 - num2;
console.log(subtração);

let multiplicação = num1 * num2;
console.log(multiplicação);

let divisão = num1 / num2;
console.log(divisão);

let modulo = ((num1 + num2) % 2) == 0;
console.log(modulo);


if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3)
}


if (num1 > 0){
    console.log('positive')
}
else if (num1 < 0){
    console.log('negative')
}
else{
    console.log('zero')
}

if ((num1 + num2 + num3) == 180){
    console.log(true)
}
else{
    console.log('error')
}

switch (chessPiece){
    case ('bispo'):
        console.log('diagonal');
        break;
    
    case ('cavalo'):
        console.log('L');
        break;

    case ('torre'):
        console.log('horizontal e vertical');
        break;
    
    case ('peão'):
        console.log('duas casas pra frente no início do jogo ou uma casa pra frente, e uma casa na diagonal quando for comer a peça');
        break;

    case ('rainha'):
        console.log('todas as direções');
        break;
    
    case ('rei'):
        console.log('todas as direções uma casa por vez');
        
    default:
    console.log('error')
}

if (porcentagem >= 90){
    console.log('A')
} else if (porcentagem >= 80){
    console.log('B')
} else if (porcentagem >= 70){
    console.log('C')
} else if (porcentagem >= 60){
    console.log('D')
} else if (porcentagem >= 50){
    console.log('E')
} else {
    console.log('F')
} 


if (((num1 % 2)*(num2 % 2)*(num3 % 2)) == 0) {
    console.log(true)
} else {
    console.log(false)
}

if (((num1 % 2) + (num2 % 2) + (num3 % 2)) > 0)  {
    console.log(true)
} else {
    console.log(false)
}

let custoTotalProduto = custoDoProduto + (imposto*custoDoProduto);
console.log(custoTotalProduto);

let lucro = (valorDeVenda -custoTotalProduto) * 1000;
console.log(lucro);

if (custoTotalProduto == 0){
    console.log('erro')
} else if (valorDeVenda == 0){
    console.log('erro')
} else {}

if (salario <= 1556.94){
  inss = salario * 0.08;
} else if (salario > 1556.94 && salario <= 2594.92){
  inss = salario * 0.09;
} else if (salario > 2594.92 && salario <= 5189.82){
  inss = salario * 0.11;
} else {
  inss = 570.88
}
console.log(inss)

if (salario <= 1903.98){
    ir = 0;
  } else if ((salario - inss) > 1903.98 && (salario - inss) <= 2826.65){
    ir = ((salario - inss) * 0.075) - 142.80;
  } else if ((salario - inss) > 2826.65 && (salario - inss) <= 3751.05){
    ir = ((salario - inss) * 0.15) - 354.80;
  } else if ((salario - inss) > 3751.05 && (salario - inss) <= 4664.68){
    ir = ((salario - inss) * 0.225) - 636.13;
  } else {
    ir = ((salario - inss) * 0.275) - 869.36;
  } 
  console.log(ir);

  salarioLiquido = salario - inss - ir;
  console.log(salarioLiquido);