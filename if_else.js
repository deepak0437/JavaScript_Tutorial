let myAge = 19;
if(myAge>18){
    console.log("This user is Eligible")
}
else{
    console.log("This user is not eligible")
}

let num = 15
if(num%2==0){
    console.log(`${num} is even number`)
}
else{
    console.log(`${num} is odd number`)
}

// false value like 0, false, null, "", undefined
// true value like non empty string , an number

let charName = 'depak'
if(charName){
    console.log("This is true")
}
else{
    console.log("This is false")
}

let age = 7;
let drink;
if(age>9){
    drink = "greater"
}
else{
    drink = "samller"
}
console.log(drink)

// ternary operator
let myVote = age>15 ? "yes" : "No";
console.log(myVote)

// and operator or operator
// for and we use && and for or we use ||
let firstName = "harsh";
let yourAge = 22;
if(firstName[0] == "h" && yourAge > 25){
    console.log("You are eligible")
}
else{
    console.log("you are not eligible")
}

if(firstName[0] == "h" || yourAge > 25){
    console.log("You are eligible")
}
else{
    console.log("you are not eligible")
}

// nested if else 
let winNum = 19;
let userGuss = 55;   //userGuss = +prompt("Guess A Number");
if (userGuss === winNum){
    console.log("Your Guess is right")
}
else{
    if(userGuss<winNum){
        console.log("Number is less than winNum")
    }
    else{
        console.log("Number is greater than winNum")
    }
}

// else if in js
let marks = +prompt("Enter you total marks out 100")
if(marks >= 90 && marks < 101){
    console.log("You got A+ grade..!")
}
else if(marks >= 80 && marks < 90){
    console.log("You got A grade..!")
}
else if(marks >=70  && marks < 80){
    console.log("You got B+ grade..!")
}
else if(marks >= 60  && marks < 70){
    console.log("You got B grade..!")
}
else if(marks >= 50  && marks < 60){
    console.log("You got c+ grade..!")
}
else if(marks >= 40  && marks < 50){
    console.log("You got c grade..!")
}
else if(marks < 40){
    console.log("Need Improvment .. Take care..!")
}
else{
    console.log("Please enter valid number")
}

// switch statment
let day = 1
switch(day){
    case 0:
        console.log("Day 1")
        break;
    case 1:
        console.log("Day 2")
        break;
    case 2:
        console.log("Day 3")
        break;
    case 3:
        console.log("Day 4")
        break;
    default:
        console.log("Invalid day")
}