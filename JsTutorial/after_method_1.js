// after method 
// iterables
// It means were we can use loop
let loopInOf = ["mango", "apple", "grapes", "animal", "birds"]
for(let item of loopInOf){
    console.log("For of Loop : ", item)
}
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// array like object
// which has length property and we can access by index, like string
const nameYour = "Harshit"
console.log(nameYour.length, nameYour[2])

// set in javascript
// 1. it is iterable
// 2. no duplicate values allowed (only unique items)
// 3. unordered collection (order is not guaranted)
// 4. set also have it's own method
// 5. we can only use set when we have only unique value 
var mySet = new Set() // empty set
mySet.add('a')     // add a single value to the set
mySet.add(['a'])   // add an Array as well
console.log(mySet)
let newSet = new Set([1,2,3,4,5,6])
let newSetStr = new Set("Harshit")
newSet.forEach((item)=>{
    console.log(item)})

// how to check element present in set or not
if (newSet.has(15)){
    console.log("It is present")
}
else{
    console.log("It is not present")
}
for (let i of newSet){
    console.log(`set item: ${i}`)
}
// 5. we can only use set when we have only unique value 
const setArray = [1,2,3,4,5,1,2,3,4,5,6,7,6,7,8]
let mysetArray = new Set(setArray) 
console.log(mysetArray)


// Map data structure
// map will also store key value pair
// 1. it is iterable
// 2. ordered collection with keys and values
// 3. map also have its own methods
// 4. we can use any type for both key & value
/* let mappy = new Map(); */ /* this will create empty map*/
// mappy.set("age", '20');    /* adding entry into map using .set() function */
// mappy.set(["name"],'harshit');      /* you can pass anything here but make sure that they are immutable objects so that we
// mappy.set(["age"],'20');      /* you can pass multiple arguments while setting entries inside map */
// mapy.get("age");           /* getting age from map using get() function */

const personDetail = new Map()
personDetail.set("PersonName", "Harshit");
personDetail.set("Age",20)
personDetail.set([1,2,3,4],20)
personDetail.set({key:"addresses"})
// personDetail.set({key:"address"}, {city:'Bangalore', state : 'Karnataka'})
// personDetail.set({key:"address"}, {city:'Mumbai', state : 'MH'});
console.log(personDetail.get("PersonName"))
console.log(personDetail.keys())
// console.log(personDetail);
for (let key of personDetail.keys()){
    console.log(key)
}
for (let [key,value] of personDetail){
    console.log(key,value)
}

// clone using object.assign
// var obj = Object.create({},obj,{a:{writable:true}})
const person1 = {
    name:"Deepak",
    "age":22,
    state:"Bihar",
    name1:{"one":'ones', "two":'twos'},
    "code":['python', 'js', 'html']
}

let person2 = Object.assign({},person1)
console.log(person2)

// optional chaining
console.log(person1.name1.two)
console.log(person1?.name1?.two)

// create your own method and this keyword
// function inside object
const personMethod = {
    name:"Deepak",
    "age":22,
    about:function(){
        console.log(`My name is ${this.name} and age is ${this.age}`) 
        return "Everything is Fine"
    }
}
console.log(personMethod.about())
// "use strict"
// console.log(this)

// call apply and bind
function movieDetails(music, movie){
    console.log(`My name is ${this.name} and age is ${this.age} and state is ${this.state} and ${music} and ${movie}`) 
}
const userDetail1 = {
    name:"Deepak",
    "age":22,
    state:"Bihar",
    about:function(music, movie){
        console.log(`My name is ${this.name} and age is ${this.age} and state is ${this.state} and ${music} and ${movie}`) 
    }
}
const userDetail2 = {
    name:"Harish",
    "age":15,
    state:"Up",
}
userDetail1.about.call(userDetail2, "Guitar", "Mortaz")
// we can also use about function outside objects
movieDetails.call(userDetail1,"Piano",'TZPER')  //call
movieDetails.apply(userDetail1,["Piano",'ABCDDD'])  //apply
var newAboutFunction = movieDetails.bind(userDetail1,'Piano','XYZ');   //bind
console.log(newAboutFunction) //it return function and in future we call that function then we can use newAboutFunction

// in arrow function we can not use this keyword because
// it will be bound to the parent scope of wherever you are using that arrow function


