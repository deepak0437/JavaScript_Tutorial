// import array methods

// foreach method
let loopInOf = ["mango", "apple", "grapes", "animal", "birds", "cat"]
let fruit = [1,2,3,4,5,6,7]
function myFunc(number,index){
    console.log(`index is ${index} and element is ${number}`)
}
loopInOf.forEach(myFunc)

// foreach method
// fruit.forEach((element)=>{console.log("the value of the element is "+element)})

const personsArray = [{name:"abc", age:'30'},{name:"xyz", age:'35'}]

personsArray.forEach((user, index) => {
    console.log(`${user['name']} has an age of  ${user["age"]} years and index is ${index}`)
})

// map method
function myFunc1(number){
    console.log(`index is  and element is ${number}`)
}
const NumFunc = fruit.map(myFunc1)

const newNum = fruit.map((number,index)=>{return String(number)+':'+String(index)})
console.log(newNum)

const UserName = personsArray.map((user)=>{
    return user.name+':'+user.age;   
})
console.log(UserName)

// Filter Function
const NumEven = function(number){
    return number%2==0;
}
let outPut = fruit.filter(NumEven);
console.log(outPut)

let arrowfilter = fruit.filter((number)=>{
    if (number % 2 == 0 ){
        return number
    }
})
console.log(arrowfilter)

// reduce method
const sumReduce = fruit.reduce((accumulator, currVal)=>{
    let sumofArray = accumulator+currVal
    return sumofArray
},100)  //now initial value is 100
console.log(sumReduce )
// array = [1,2,3,4,5,6,7]
// accumulator, currVal, return
// 1               2          3
// 3               3          6
// 6               4          10
// 10              5          15
// 15              6          21
// 21              7          28

const userCart = [
    {id:1, pname:"redmi", price:1000},
    {id:2, pname:"oppo", price:1500},
    {id:3, pname:"oneplus", price:700},
    {id:4, pname:"poco", price:800},
]
const totalPrice = userCart.reduce((totalprice , item)=> {
    return totalprice +item.price ;
},0)
console.log(totalPrice)

// sort method
// by default sort method return array by using string assci value
let arraySort = [55,43,12,90,76,18,25]
const finalSort = arraySort.sort((a,b)=>a-b)
console.log("Sorted Array :", finalSort)

const finalSort1 = arraySort.sort((a,b)=>b-a)
console.log("Sorted Array :", finalSort1)

const products = [
    {name:'iphone-user', price: '100'},
    {name: "Samsung", price: "15" },
    {name: "redmi", price: "2900" },
    {name: "poco-mobile", price: "1080" },
]

let sortProduct = products.slice(0).sort((a,b)=>{
    let priceValue = a.price - b.price
    return priceValue
})
console.log(sortProduct)

//  find method
// it return only first occurence  
const productFind = products.find(({ name }) => (name ==='iphone'))   ///return first match element in the array
console.log(productFind)

const isLength = loopInOf.find((string)=>{
    return string.length === 3;
})
console.log(isLength)

const userNamegive = products.find((data)=>{
    let userData = (data.name === "Samsung")
    return userData
})
console.log(userNamegive)

// every method
// if all the element of an array pass condition then true else false

const checkAllans = fruit.every((number)=>{
    return (number%2===0)
})
console.log('check All ans:', checkAllans);

const checkPrice = products.every((data)=>{
    return data.price>=10
})
console.log(`Check Price : ${checkPrice}`)

// some method
// If any one element in array passes condition then returns true otherwise false
const checkSomeAns = loopInOf .some((fruitName)=>{
    return fruitName==='apple' || fruitName=='mango';

})
console.log("check Some Ans:", checkSomeAns );

let checkitems = products.some((product)=>{
    return product.price >= 467 ;    //if price greater than or equal to fourty six seven then return ? true :false
})
console.log("check Some Item:", checkitems );

// fill method
// value , start, end
/* It will replace value with given value */
const mynewArray = [2,4,6,8,5,9,6,8,1]
fillArray = mynewArray.fill(0,2,5)
console.log(fillArray)

// splice method
// index position to delete or insert new item and how many items you want to add/delete from that particular index
// index, deleteCount, item to be added
// start, delete, insert
const mynewArray1 = [2,4,6,8,5,9,6,8,1]
mynewArray1.splice(5,0,"new item") // it will add Moto at position seven and remove one item from that position
console.log("Splice: ",mynewArray1)
