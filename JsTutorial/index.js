// DOM
// Document object model
console.log("DOM")
// select element using get element by id
// console.dir(document.getElementById("main-heading"))
const mainHeading = document.getElementById("main-heading")
console.log(mainHeading)

// select element using query selector
const mainHeadingSelector = document.querySelector("#main-heading")
console.log(mainHeadingSelector)

const headerSelector = document.querySelector(".header")
console.log(headerSelector)

const divSelector = document.querySelector("div.headline h2")
console.log(divSelector)

const allNevItem = document.querySelectorAll('.nav-item')
console.log(allNevItem)

// change text
// textContent and inner Text
// we can change text by using textContent
const mainHeading1 = document.getElementById("main-heading")
console.log(mainHeading1.textContent)
console.log(mainHeading1.innerText)
mainHeading1.textContent = "Try To Do Own Works"
console.log(mainHeading1.textContent);
console.log(mainHeading1.innerText);

// change style of element
const mainHeading2 = document.getElementById("main-heading")
console.log(mainHeading2.style)
mainHeading2.style.color = "green"
mainHeading2.style.backgroundColor = "white"


// get and set attribute
const ankerTags = document.querySelector(".nav-items .nav-item a")
console.log(ankerTags)
let hrefValue = ankerTags.getAttribute('href'); // return value of the tag
let hrefValue1 = ankerTags.setAttribute('href', 'https://codprog.com');
console.log(hrefValue1)


// get multiple elements using get Element by class name
// get multiple elements using querySelectorAll
const allNevItem1 = document.getElementsByClassName('nav-item')
console.log(allNevItem1)
// we cannot use foreach method to to iterate thorugh HTMLCollection
const allNevItem2 = document.getElementsByTagName('a')
for(let i of allNevItem2){
    let navItems = i
    navItems.style.backgroundColor = "white"
    navItems.style.color = "black";
    navItems.style.fontWeight = "bold"
}








console.log(document.getElementsByClassName("todo-list")[0])
function myFunction(){
    document.getElementsByClassName("todo-list")[0].style.display = "block"
}

function closeAll(){
    document.getElementsByClassName("todo-list")[0].style.display = "none"
}

// npx create-react-app appname
// npm start

// create-react-app