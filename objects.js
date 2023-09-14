console.log("Intro of Objects")
// object is reference type
// how to create object
const objectName = new Object();

const person = {
    name:"Deepak",
    "age":22,
    state:"Bihar",
    name1:"Arrow",
    "code":['python', 'js', 'html']
}
console.log(typeof person)
console.log(person)

// how to access data from objects
console.log(person.name, " ", person.age, "  ", person.code.slice(1,3))

// how to add key value pair to objects
person.gender = "male";
console.log(person)

// difference between dot and bracket notation
// bracket notation
console.log(person["age"], "and", person["code"])
person["Phone Num"] = 12345777;
// dot notation
console.log(person.age,"and" ,person.code )
person.addres = "Gaya";

const key = "email"
person[key] = "abcd@gmail.com"
console.log("Final Dict/Object : ", person )

// how to iterate object or how to use loop
for(let item in person){ 
    console.log(item, ": " ,person[item])     //1st way
}
 
let person_1 = Object.keys(person)
for(let item of person_1){
    console.log(person[item])               //2nd way
}

// computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "newvalue1"
const value2 = "newvalue2"

let newObject = {}
newObject[key1]= value1 ;   
newObject[key2]= value2;     //1st way

let newObject1 = {
    [key1] : value1,
    [key2] : value2
}

console.log('New Object1 : ', newObject1);
console.log('New Object: ', newObject);


// spread opertaor
const newKeyValue = {...newObject, ...person, "key12":"value15"}
const spreadOp = {..."abcd"}
const spreadOp1 = {...['a', 'b', 'c']}
console.log(newKeyValue)
console.log(spreadOp)
console.log(spreadOp1)

// Object destructuring in js
const {code, state, ...restPropes} = person
console.log(code, state)
console.log(restPropes)

// object inside  array
const personsArray = [{name:"abc", age:'30'},{name:"xyz", age:'35'}]   //object inside an Array
// console.log(personsArray)
for(let user of personsArray){
    console.log(user['name'])
}

// nested destructuring
const [user1, user2] = personsArray
const [{name}, {age}] = personsArray
console.log("User Name:", age)

// remove a property from an object
delete newKeyValue['key12']

