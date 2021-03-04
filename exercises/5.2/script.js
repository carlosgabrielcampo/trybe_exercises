let bodyPosition = document.body

let headText = document.createElement("h1")

let firstDiv = document.createElement("div")

let secondDiv = document.createElement("div")

let firstParagraph = document.createElement("p")

let leftDiv = document.createElement("div")

let rightDiv = document.createElement("div")

let leftImg = document.createElement("img")

let ulRight = document.createElement("ul")

let liUlRight = document.createElement("li")

let numbers = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]








leftDiv.className = "left-content"

rightDiv.className = "right-content"

firstDiv.className = "main-content"

secondDiv.className = "center-content"

headText.innerHTML = "Exercício 5.2 - JavaScript DOM"

leftImg.className = "small-image"

leftImg.src = "https://picsum.photos/200"


firstParagraph.innerHTML = "Lipsum generator: Lorem Ipsum - All the facts"

bodyPosition.appendChild(headText).parentElement.appendChild(firstDiv).appendChild(secondDiv).appendChild(firstParagraph)

firstDiv.appendChild(leftDiv).parentElement.appendChild(rightDiv)

leftDiv.appendChild(leftImg)

rightDiv.appendChild(ulRight)

for (let index = 0; index < numbers.length; index += 1){
    let liUlRight = document.createElement("li")

    liUlRight.innerHTML = numbers[index]

    ulRight.appendChild(liUlRight)
}

headText.className = "title"

for (let index2 = 0; index2 < 3; index2 +=1){
    let h3MainElements = document.createElement("h3")

    h3MainElements.className = "description"

    firstDiv.appendChild(h3MainElements)
}

firstDiv.removeChild(leftDiv)

rightDiv.style.marginRight = "auto"

firstDiv.style.backgroundColor = "green"



for (let index3 = 0; index3 <= 1; index3 += 1){

let listItems = ulRight.lastElementChild

listItems.id = "remove"

ulRight.removeChild(remove)
}

