// 1.--------------------------------------------------------------------------------------------
// Write a js program to find those numbers which are divisible by 7 and multiples of 5, 
// between 1500 and 2700 (both included).
// const divAndMul = function(num1,num2){
//     let solArray = [];
//     for(let i= num1;i<=num2 ;++i) {
//         if((i%7==0 && i%5 == 0)){
//             solArray.push(i)
//             // console.log("The number is "+i);
//         }
//     }
//     return solArray
// }
// let divANdMulValue = divAndMul(1500,2700);
// console.log("numbers which are divisible by 7 and multiples of 5 : ",divANdMulValue)


// 2.--------------------------------------------------------------------------------------------
// Write a js program to convert temperatures to and from Celsius and Fahrenheit.
// C = (5/9) * (F - 32)
// F = (9*C) / (5 + 32)
// const checkTemp = function(temp){
//     const value = Number(temp.slice(0,temp.length - 1))
//     const degree = temp[temp.length - 1].toUpperCase()
//     let temperatureValue = ""
//     if (degree === "C"){
//         temperatureValue = ((9 * value) / 5 + 32) + "F"
//     }
//     else if (degree === "F"){
//         temperatureValue = String(((value - 32) * 5 / 9)) + "C"
//     }
//     else{
//         console.log("Enter Valid Temperature Value")
//     }
//     return temperatureValue
// }
// temp = prompt("Enter Degree")
// const convertTemp = checkTemp(temp)
// console.log(convertTemp)


// 3.--------------------------------------------------------------------------------------------
// Write a js program to guess a number between 50 to 500.
// const randomNumberGenerator = (min,max) => Math.floor(Math.random() * (max - min + 1) + min); //return random num
// const checkRandomNumber = function(randomNumber, inputNumber){
//     if (randomNumber < inputNumber){
//         console.log(`Your Guess ${inputNumber} Is Higher than Random Generated Number`)
//     }
//     else if (randomNumber > inputNumber){
//         console.log (`Your Guess ${inputNumber} Is Lower Than Random Generated Number ` )
//     }
//     else if (randomNumber === inputNumber){
//         console.log ("Congratulations You Won The Game ")
//     }
//     else{
//         console.log('Please Enter A valid Input')
//     }
//     return `Random Number is ${randomNumber}`
// }
// inputNumber = +prompt("Enter any Number between 50 and 500")
// const checkAnswer = checkRandomNumber(randomNumberGenerator(50,500), inputNumber) //passing parameter as function called callback function
// console.log(checkAnswer)


// 4.--------------------------------------------------------------------------------------------
// Write a js program that accepts a word from the user and reverses it.
// const reverseString = (inputString) => {
//     let reversedString = "";
//     for (let i=inputString.length-1;i>=0 ;--i ){
//         reversedString += inputString[i]
//     }
//     const reversedString1 =  inputString.split('').reverse().join('')
//     console.log(`After reversing ${inputString} , we get : ${reversedString1} (by using reverse and join func)`)
//     return reversedString
// }
// inputString = prompt("Enter Any string...")
// const reversesSolString = reverseString(inputString)
// console.log(`After reversing ${inputString} , we get : `,reversesSolString)


// 5.--------------------------------------------------------------------------------------------
// Write a js program to count the number of even and odd numbers in a series of numbers
// const checkEvenOdd = function(arrayNumber){
//     let evenCount = arrayNumber.filter((number) => number %2 == 0).length
//     let oddCount = arrayNumber.filter((number)=> number%2!=0).length
//     console.log(`Count of Even number is ${evenCount}`);
//     console.log(`Count of Odd Number ${oddCount}`)
//     return evenCount+oddCount
// }
// arrayNumber = [2,12,3,5,78,33,55,45,50,98,10,93,77]
// const evenOddSolution = checkEvenOdd(arrayNumber);
// console.log(evenOddSolution)


// 6.--------------------------------------------------------------------------------------------
// Write a js program to sum all the items in a list.
// const addItemsInList =(list)=>{
//     let sumofArray = list.reduce((start,next) => {
//         return start+= next
//     });
//     return sumofArray
// }
// list = [1,2,3,4,5,6,7,8,9,0]
// const resultOfSumArray = addItemsInList(list)
// console.log("Sum of array ",list," is : ",resultOfSumArray)


// 7.--------------------------------------------------------------------------------------------
// Write a js program to get the largest number from a list.
// const findLargestNum = function(list){
//     // largest = array.sort((a,b)=>a-b).reverse()[0];
//     const finalSort = list.sort((a,b)=>b-a)
//     return finalSort[0];
// }
// list = [1,2,3,4,5,6,7,8,9,0]
// const resultLargeNum = findLargestNum(list)
// console.log("Largest number from array ", list ," is : ", resultLargeNum)


// 8.--------------------------------------------------------------------------------------------
// Write a js program to remove duplicates from a list.
// const removeDuplicateFromList=(list)=>{
//     // let uniqueValues= [...new Set (list)]
//     let uniqueValues = []
//     list.forEach((number)=>{
//         if (uniqueValues.includes(number) === false){
//             uniqueValues.push(number)
//         }
//     })
//     return uniqueValues;
// }
// list = [10,11,32,55,10,11,2,1,55,34,18,2]
// const afterremoving = removeDuplicateFromList(list)
// console.log("Old Array conating duplicates : ", list)
// console.log("After removing duplicates : ",afterremoving)


// 9.--------------------------------------------------------------------------------------------
// write a js program to count number of occurence of element from a list
// const numberOfOccurranceElement=(list)=>{
//     const occurenceEle = {}
//     list.forEach((number) => {
//         if (occurenceEle[number]){
//             occurenceEle[number] += 1;
//         }
//         else{
//             occurenceEle[number] = 1
//         }
//     })
//     return occurenceEle;
// }
// list = ['abc', 'def', 'abc', 'efg', 'hij', 'abc', 'def', 'lmn', 'lmn']
// const resultOfOccurence = numberOfOccurranceElement(list)
// console.log(resultOfOccurence)


// 10.--------------------------------------------------------------------------------------------
// write a js program to count number of occurence of specific element from a list 
// const numberOfSpecificOccurrance = (list ,element)=>{
//     // let counterOfelement = list.filter((element_name) => element_name==element).length
//     let counterOfelement = 0
//     list.find((element_name) => {
//         if (element_name === element){
//             counterOfelement += 1;
//         }
//     })
//     return counterOfelement; 
// }
// list = ['abc', 'def', 'abc', 'efg', 'hij', 'abc', 'def', 'lmn', 'lmn']
// const resultOfspecific = numberOfSpecificOccurrance(list,'abc')
// console.log('Number of occurances for abc is ', resultOfspecific);


// 11.--------------------------------------------------------------------------------------------
// Write a js program to convert a list of characters into a string.
// const arrayToString =(list)=> {
//     return list.join('')
// }
// list = ["ja", "Va", "-", "Sc", "Ri", "Pt"]
// const resultArraytoString = arrayToString(list)
// console.log(resultArraytoString)


// 12.--------------------------------------------------------------------------------------------
// Write a js program to find the index of an item in a specified list.
// const indexOfItemInList= (list,itemToFindIndex)=>{
//     return list.indexOf(itemToFindIndex)
// }
// list = [1,2,3,4,5,6,7,8,9,0]
// const resultOfItem = indexOfItemInList(list,8)
// console.log(`Index of 8 in ${list} is `, resultOfItem)


// 13.--------------------------------------------------------------------------------------------
// a) Given an array of cities, using map() method, return/create an array which will include all the cities having only the first letter of each city name capitalized.
// cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];
// const capitalizedFirst = cities.map((element) => {
//     return element[0].toUpperCase() + element.slice(1)
// })
// console.log("Capitalize First letter ",capitalizedFirst)
// b) Using the forEach() loop, console.log the names of all the elements in the citiesCapitalized array including the number representing the position of the element starting with 1 for the first (index) element.
// cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];
// const capitalizedWithposition = cities.forEach((element,index) => {
//     let newElement = `${index+1}. `+element[0].toUpperCase() + element.slice(1)
//     console.log(newElement)
// })
// console.log("\n Capitalize with position ",capitalizedWithposition)


// 14.--------------------------------------------------------------------------------------------
// Reversing a List in js
// const reverseList = (list)=>{
//     let newArray = []
//     // return [...list].reverse();
//     list.forEach((element) => {
//         newArray.unshift(element)
//     })
//     return newArray
// }
// list = [1,2,3,4,5,6,7,8,9,0]
// console.log(reverseList(list))


// 15.--------------------------------------------------------------------------------------------
// js program to seperate two list of +ve and -ve number from array
// const seprateplusminus = (array)=>{
//     let plusArray=[];
//     let minusArray=[];
//     array.forEach((number) => {
//         if(number > 0){
//             plusArray.push(number);}
//         else{
//             minusArray.push(number);}
//     })
//     return {"Plus":plusArray,"Minus":minusArray};
// }
// array = [2,5,-6,-9,7,23,-19,-60,83]
// console.log('seperating the numbers',seprateplusminus(array));


// 16.--------------------------------------------------------------------------------------------
// Flatten this array to one single array using reduce Var array = [[0, 1], [2, 3], [4, 5]]
// const flattenThisArry = (array)=>{
//     // return  array.flat(Infinity)
//     let flatten = array.reduce((flatArray,nextElement) => {
//         if (Array.isArray(nextElement)){
//             return flatArray.concat(flattenThisArry(nextElement))
//         }
//         else{
//             return flatArray.concat(nextElement)
//         }
//     },[])  //let first element be empty list
//     return flatten
// }
// array = [8,9,[0, 1],[2,[3]],[[4,5],[6,7]]]
// console.log('\nflattening an Array ',flattenThisArry(array));


// 17.--------------------------------------------------------------------------------------------
// Filter this array to return just the dogs
// const filterDogs =(animals)=> {
//    // const filteRing1 =  animals.filter(({species})=> {return species === 'dog'})  //it return value in array
//    // const filteRing2 =  animals.find(({species})=> {return species === 'dog'})   //it return only value and first occurence  
//     const filteRing = animals.filter((element) => {
//         if (element.species === "dog"){
//             return element
//         }
//     })
//     return filteRing
// }
// const animals = [{ name: "Jason", species:"rabbit"},{ name: "Jessica", species:"dog"},{ name: "Jacky", species:"owl"},
//                 { name: "Luke", species:"fish"},{ name: "Junior", species:"rat"},{ name: "Thomas", species:"cat"}]
// console.log("after filtering : ", filterDogs(animals))


// 18.--------------------------------------------------------------------------------------------
// Find all of the values in this object that are less than or equal to eighteen
// const findValues = (object) => {
//     const showingAge = object.filter(({age}) => {
//         if (age >= 18){
//             return object
//         }
//     })
//     return showingAge
//     }
// const detailsUser = [{ name: "Jason", age: 10 ,species:"rabbit"},{ name: "Jessica", age: 18 , species:"dog"},{ name: "Jacky", age: 17 , species:"owl"},
//                 { name: "Luke", age: 20 , species:"fish"},{ name: "Junior", age: 23 , species:"rat"},{ name: "Thomas", age: 44 , species:"cat"}]
// console.log(findValues(detailsUser))


// 19.--------------------------------------------------------------------------------------------
// Using array in question 18 use map function to return all the species
// const showSpecies = (object)=> {
//     // const displaySpecies = object.map(({species}) => {return species})
//     const displaySpecies = object.map((element) => {
//         return element.species
//     })
//     return displaySpecies
// }
// const detailsUser = [{ name: "Jason", age: 10 ,species:"rabbit"},{ name: "Jessica", age: 18 , species:"dog"},{ name: "Jacky", age: 17 , species:"owl"},
//                 { name: "Luke", age: 20 , species:"fish"},{ name: "Junior", age: 23 , species:"rat"},{ name: "Thomas", age: 44 , species:"cat"}]
// console.log(showSpecies(detailsUser))


// 20.--------------------------------------------------------------------------------------------
// Write a JavaScript program that prints the elements of the following array.
// const numbersArray = function(array){
//     array.forEach((element, index) => {
//         console.log(`Row ${index}`)
//         for (let i of element){console.log(i)}
//         console.log('\n')
//     })
// }
// array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log('numbersArray: ', numbersArray(array));


// function outer(){
//     function inner(){
//         console.log("Hello World")
//     }
//     return inner
// }
// const answer = outer()
// console.log(answer())


// function myFunc(){
//     let counter = 0
//     return function(){
//         if (counter < 1){
//             console.log("Hiiyou called me");
//             counter ++;
//         }
//         else{
//             console.log("Already called");
//         } 
//     }
// }
// const callFunc = myFunc()
// callFunc()
// callFunc()
// callFunc()
// callFunc()