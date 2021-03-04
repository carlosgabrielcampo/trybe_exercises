function descricao(text){
    document.getElementsByTagName("p")[0].innerHTML = text;
}

descricao("daqui a dois anos")

function colorChange(colorCode){
    document.getElementsByClassName("main-content")[0].style.backgroundColor = colorCode;
}

colorChange("rgb(76,164,109)")

function colorChange2(colorCode){
    document.getElementsByClassName("center-content")[0].style.backgroundColor = colorCode;
}

colorChange2("white")

function titleModificator (text){
    document.getElementsByClassName("title")[0].innerHTML = text;

}

titleModificator("Exercício 5.1 - JavaScript")

function textToUpper (){

   for (index = 0; index < document.getElementsByTagName("p").length; index += 1){
   let text = document.getElementsByTagName("p")[index].innerText
   let upperText = text.toUpperCase();
   document.getElementsByTagName("p")[index].innerText = upperText;
   }
}

console.log(textToUpper())

function consoleText(){
    console.log(document.getElementsByTagName("p"))
}

console.log(consoleText())