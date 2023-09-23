
// function decleration
function singSong(){
    console.log("welcome to java Script....!");
}
singSong()

function sumTwonum(num1,num2){
    singSong()
    return num1+num2;
}
console.log(sumTwonum(2,2))

// function expression
let sayhello = function(){
    console.log("welcome to Script code....!");
}
sayhello()

// arrow function
let arrowFunc = () => {
    console.log("welcome to Script code Arrow Function....!");
}
arrowFunc()

let sumnum = (num1,num2) => {
    singSong()
    return num1+num2;
}
console.log(sumnum(9,2))

// hoisting 
// we can call function before creating a function but it will happen only in function decleration
sumThreenum(9,2,8);
function sumThreenum(num1,num2,num3){
    singSong()
    return num1+num2+num3;
}
console.log(sumThreenum(9,2,8))

// function inside function
let apparrow = (strings) => {
    let myFunc = (num1, num2) => {
        let num3 = num1+num2
        return "Function inside function that is " + strings +" return "+ String(num3)
    }
    console.log(myFunc(5,4))
    return "Main Function "
}
console.log(apparrow("Arrow Function"))


// Lexical Scope
let lexiName = "Main Valriable"

let newFunc = () => {
    let funcInside = (num1,num2) => {
        let mult = num1 * num2
        console.log(lexiName + ", Multiple of num1 and num2 i.e " + num1 +" " + num2 + " is " + mult )
    }
    funcInside(60,7)     // Main Variable

    return "Return new function or main function"
}

newFunc()


// Block scope 
// we can only use let and const for block use
let outSide = "Out Side"
{
    let blockVar = 'Block let or const'
    console.log(blockVar, outSide)
}
// console.log(blockVar) it will return Uncaught ReferenceError because blockVar variable is decleard iside block

// function scope
// If we have to call any other's block variable then we use var 
let varFunc = () => {
    if (true){
        var innerVar = "Inner Varible";
        console.log(innerVar);
    }
    
    let max = false
    if (max == false){
        console.log("Calling same inner variable " + innerVar);
    }
}
varFunc();

// Default parameters
function myDefaultParam(name="Nikhil", age=98 ){
    let myDetail = `My name is ${name} and my age is ${age}`
    return myDetail
}
console.log(myDefaultParam('Raj'))

// Rest parameters
const sumRestParams = (a, b, ...c) => {
    console.log("Value of a is : "+ a)
    console.log("Value of b is : "+ b)
    console.log("Value of c is : "+ c)
    const sumOffall = (neWarray) => {
        let aLLsum = 0
        for (let i of neWarray){
            aLLsum +=i;
        }
        console.log(aLLsum)
    }
    let neWarray = [a , b, ...c]
    console.log("New Array : ", neWarray)
    sumOffall(neWarray)
}
sumRestParams(1,2,3,4,5,5,78,88,7,17)

// Param destructuring
const personsArray = {name:"abc", age:'30'}
const personName = ({name,age}) =>{        // Destructure the object
    console.log("pesron name : "+name);
    console.log("Person Age : "+ age);
}
personName(personsArray)

// callback functions
function secondFunc(){
    console.log("This is second function")
}

function firstFun(abc){  
    console.log("this is first function")
    console.log(abc) // now we can call secondFunc by using variale abc this is called callback function
    console.log("calling secondFunc by using variale abc")
    abc();   

}
firstFun(secondFunc)  //passing secondFunc as parameter


// Function returning function
function funcRtrn(){
    function newfuncRtn(){
        console.log("Function returning function");
    }
    return newfuncRtn
}
let finalFun = funcRtrn()
finalFun()