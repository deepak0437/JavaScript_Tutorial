// array
let fruit = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(fruit)
console.log(fruit[3])
fruit[2] = 5
console.log(fruit) //to change element of list
console.log(typeof fruit)
console.log(Array.isArray(fruit))

// push and pop method
fruit.push("z")     //push is like append
console.log(fruit)
fruit.pop()
console.log(fruit)

// shift and unshift method
let newEle = fruit.unshift("v")
let newElem = fruit.unshift("f")
console.log(fruit, newEle, newElem)

let shfEle = fruit.shift()
console.log(fruit )

// Javascript Array unshift() method	
// This method adds an elements to the beginning of the array.	
// This method shifts the index of the first element by 1.	
// Javascript Array push() method
// This method adds elements to the end of the array.
// This method adds a new index at the last of the array.

// primitve data types (string, number, ....)
let num1 = 9
let num2 = num1
console.log("Num1 : ", num1)
console.log("Num2 : ", num2)
num1++   /// incrementing value
console.log("Num1 : ", num1)  //it will return 10
console.log("Num2 : ", num2)  //it will return 9
// it's not changing the original value but creating another copy in memory

// reference data types (array)
let array3 = [1,2,3,4,5,6]
let array1 = [1,2,3,4,5,6]
let array2 = array1
console.log('Array1: ', array1);    
console.log('Array2: ', array2 );
array1.push(8)
console.log('Array1: ', array1);    
console.log('Array2: ', array2 ); //both will print update array

// how to copy or clone array
// It means if I change in first array then it should not be change in second array
let arrayNew1 = [1,2,3,4,5,6,7];
let arrayNew2 = arrayNew1.slice(0);  //first method by using slicing 
let arrayNew3 = [].concat(arrayNew1); //second method by using concat function
let arrayNew4 = [...arrayNew1];      //third method by spread perator to copy array into other variable
let neArrays = [..."ABCDEF"];
let neArrays1 = [..."ABCDEF", ...array1, ...array3];
arrayNew1.push(9)
console.log(arrayNew1 === arrayNew2) 
console.log(arrayNew1 === arrayNew3) 
console.log(arrayNew1 === arrayNew4) 
console.log(arrayNew1, arrayNew2, arrayNew3, arrayNew4)

// adding new element with concate in array

let arrnew1 = [1,2,3,4,5];
let arrnew2 = arrnew1.slice(0).concat([7,8,9]) ; //first method by using slice
let arrnew3 = [].concat(arrnew1, [7,8,9,10]); //second method by using concate
let arrnew4 = [...arrnew1, 17,8,19];    // third method by spreading operator a
let arrnew5 = [...arrnew1,...[7,8,9]];    // third method by spreading operator b
console.log('Array1: ', arrnew1);    
console.log('Array2: ', arrnew2);
console.log('Array3: ', arrnew3);
console.log('Array4: ', arrnew4);
console.log('Array5: ', arrnew5);

// for loop in array
let loopArray = ["mango", "apple", "grapes", "animal", "birds"]
let emptyArray = []
for( let i=0;i<loopArray.length;i++){
    // console.log(loopArray[i]);
    emptyArray.push(loopArray[i].toUpperCase());
}
console.log("New Array : ", emptyArray);

// while loop in array 
let i = 0
while(i < loopArray.length){
    console.log("while Loop: ",loopArray[i])
    i++
}

// use const for creating array
// to creating array we mostly use const keyword becuase it will not create copy array
const myConstArry = ['a','b', 'c'];
console.log(myConstArry)

let loopInOf = ["mango", "apple", "grapes", "animal", "birds"]
// For of loop // if we need direct value of element then we use for of
for(let item of loopInOf){
    console.log("For of Loop : ", item)
}

// For in loop  // if we need indexing value of element then we use for in
for(let item in loopInOf){
    console.log("For in Loop : ", item)
}

// Array destructuring in js
let myVar = ["mango", "apple", "grapes", "animal", "birds"]
let [myVal1, , myVal2] = myVar
console.log(myVal1, myVal2)
let [val1, val2, ...val3] = myVar
console.log(val3) //creating new array from existing array

