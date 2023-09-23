// 1.--------------------------------------------------------------------------------------------
// Write a js program to sort (ascending and descending) a dictionary by value.
// const ascAndDesc = function(objectValue){
//     const sortedArray = Object.entries(objectValue).sort((a, b) => a[1] - b[1])
//     .map(entry => [entry[1], entry[0]]);
//     return sortedArray;
// }
// let objectValue = {'c': 3, 'a': 1, 'd': 4, 'b': 2}
// console.log(ascAndDesc(objectValue));


// 2.--------------------------------------------------------------------------------------------
// Write a js script to concatenate the following dictionaries to create a new one.
// const objectConcat = (one, two, three) => {
//     let resultObject = {...one, ...two, ...three};
//     return resultObject
// }
// const dic1 = {1:10, 2:20}
// const dic2 = {3:30, 4:40}
// const dic3 = {5:50, 6:60}
// console.log('Result of concatenation is : ', objectConcat(dic1 , dic2, dic3))


// 3.--------------------------------------------------------------------------------------------
// Write a js program to check whether a given key already exists in a dictionary.
// const isKeyExists = (newObj, value)=>{
//     let checkIng = Object.keys(newObj).some(item => {
//         return item == value;
//     })
//     return checkIng;
// }
// const newObj = {7: 90, 1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
// console.log(isKeyExists(newObj, 5))


// 4.--------------------------------------------------------------------------------------------
// Print a dictionary where the keys are numbers between 1 and 15 and the values are square of keys
// const numberSquareDict = ()=>{
//     let newObject = {}
//     for(let i=1 ;i<=15;i++){
//         newObject[i] = i**2;
//     }
//     return newObject;
// }
// console.log("Number Square Dictionary",numberSquareDict())


// 5.--------------------------------------------------------------------------------------------
// Write a js script to merge two object .
// const  mergeTwoDict = (d1,d2) => {
//     let mergeObject = {...d1,...d2}
//     return mergeObject
// }
// d1 = {'a': 100, 'b': 200}
// d2 = {'x': 300, 'y': 200}
// console.log(`Merged dictonary `, mergeTwoDict(d1,d2))


// 6.--------------------------------------------------------------------------------------------
// Write a js program to sum all the items in a dictionary.
// const totalSumOfItems =(obj)=> {
//     const sumOfItem = Object.values(obj).reduce((firstItem, secondItem) => {
//         return firstItem+secondItem;
//     })
//     return sumOfItem
// }
// myObject = {'data1':100,'data2':-54,'data3':247}
// console.log("sum all the items is : ",totalSumOfItems(myObject))


// 7.--------------------------------------------------------------------------------------------
// Write a js program to remove a key from a dictionary.
// const deleteAkey = (dict,value)=>{
//     console.log("before deleting : ", dict)
//     delete dict[value];
//     return dict;
// }
// myObject = {'a':1,'b':2,'c':3,'d':4}
// console.log('delete A Key ',deleteAkey(myObject,"c"))


// 8.--------------------------------------------------------------------------------------------
// Write a js program to map two lists into a dictionary.
// const listToDictionary=(listOne , listtwo ) =>{
//     if (listOne.length != listtwo.length || listOne.length == 0 || listtwo.length == 0){
//         return null;
//     };
//     let newObject = {}
//     listOne.forEach((element, index) => {
//         newObject[element] = listtwo[index]
//     })
//     return newObject;
//     // const convertToDict = Object.assign(...listOne.map((element, index) =>({
//     //     [element]: listtwo[index] })))
//     // return convertToDict;
// }
// keys = ['red', 'green', 'blue']
// values = ['#FF0000','#008000', '#0000FF']
// console.log(listToDictionary(keys, values))


// 9.--------------------------------------------------------------------------------------------
// Write a js program to sort a given dictionary by key
// const sortByKeys = (obj) => {
//     const sortingObject = Object.keys(obj).sort().reduce((object, key) => {
//         object[key] = obj[key]; 
//         return object;
//     },{}) 
//     return sortingObject;
// }
// color_dict = {'red':'#FF0000', 'green':'#008000', 'black':'#000000', 'white':'#FFFFFF'}
// console.log("Sorted color Dictionary: ",sortByKeys(color_dict))


// 10.--------------------------------------------------------------------------------------------
// Write a js program to get the maximum and minimum values of a dictionary.
// const maxAndMinValues= (userDetail) => {
//     let minValue = Math.min(...Object.values(userDetail));
//     let maxValue = Math.max(...Object.values(userDetail));
//     console.log(minValue, maxValue)
// }
// const userDetail = {age: 54, age1: 18,  age2: 17,  age3: 8, age4: 23, age5: 44}
// console.log(maxAndMinValues(userDetail))


// 11.--------------------------------------------------------------------------------------------
// Write a js program to get a dictionary from an object's fields.
// function creatUser(firstName, lastName, mailId, age, state){
//     const userDetail = Object.create(creatUser);
//     userDetail.firstName = firstName;
//     userDetail.lastName = lastName;
//     userDetail.mailID = mailId;
//     userDetail.age = age;
//     userDetail.state = state;
//     return userDetail;
// }
// const user1 = creatUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = creatUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = creatUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1)


// 12.--------------------------------------------------------------------------------------------
// remove duplicates values from the object in javascript
// const uniqueValuesObject=(object)=>{
//     const uniqueObject = {}
//     for (let key in object){
//         if (object.hasOwnProperty(key)){
//             const value = object[key];
//             let isDuplicate = false;

//             for (let uniqueKey in uniqueObject){
//                 if (uniqueObject.hasOwnProperty(uniqueKey)){
//                     if (uniqueObject[uniqueKey] === value){
//                         isDuplicate = true;
//                         break;
//                     }
//                 }
//             }
//             if (!isDuplicate){
//                 uniqueObject[key] = value;
//             }
//         }
//     }
//     return uniqueObject;
// }
// const duplicateObject = {key1: 'value1',key2: 'value2', key3: 'value1', key4: 'value3',key5: 'value2'};
// console.log(`Duplicate Values : `, uniqueValuesObject(duplicateObject))


// 13.--------------------------------------------------------------------------------------------
// Write a js program to combine two dictionary by adding values for common keys.
// const dictAddvalues = function (obj1, obj2){
//     const finalResult = {};
//     for (let key in obj1){
//         if (obj1.hasOwnProperty(key)){
//             finalResult[key] = obj1[key]
//         }
//     }                                        //first store all key value of obj1 in empty object
//     for (let key in obj2){
//         if (obj2.hasOwnProperty(key)){
//             if (finalResult.hasOwnProperty(key)){    //then check if that key present add value
//                 finalResult[key] += obj2[key]
//             }
//             else{
//                 finalResult[key] = obj2[key]         //else add that new value
//             }
//         }
//     }
//     return finalResult
// }
// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':200}
// console.log("dict add : ", dictAddvalues(d1, d2));


// 14.--------------------------------------------------------------------------------------------
// Write a js program to print all distinct values in a dictionary.
// const findDistinctValueInDict = function (object) {
//     const uniqueValues = []
//     object.forEach(element => {
//         value = Object.values(element).join('')
//         if (!uniqueValues.includes(value)){
//             uniqueValues.push(value)
//         }
//     })
//     return uniqueValues
// }
// const duplicateArray = [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
// console.log("distinct values from Object : ", findDistinctValueInDict(duplicateArray))


// 15.--------------------------------------------------------------------------------------------
// Write a js program to find the highest 3 values of corresponding keys in a dictionary.
// const getHighest3Value = (object) => {
//     const dataArray = Object.entries(object);
//     dataArray.sort((a, b) => b[1] - a[1]);
//     const highestThree = dataArray.slice(0, 3);
//     // const highestValue = highestThree.map(element => {
//     //     return element[0];
//     // })
//     const highestValue = highestThree.reduce((acc, [key, value]) => {
//         acc[key] = value;
//         return acc;
//       }, {});
//     return highestValue
// }
// my_dict = {'a':500, 'b':3967, 'c': 560,'d':400, 'e':5874, 'f': 20}  
// console.log("highest 3 values of corresponding keys : ",getHighest3Value(my_dict))


// 16.--------------------------------------------------------------------------------------------
// Write a js program to convert a given list of lists to a dictionary.
// const convertToDict = (listOflists)=>{
//     let finalResult={}
//     listOflists.forEach(element => {
//         finalResult[element[0]] = element.splice(1,3)
//     })
//     return finalResult
// }
// nestedArray = [[1, 'Jean Castro', 'V'], [2, 'Lula Powell', 'V'], [3, 'Brian Howell', 'VI'], [4, 'Lynne Foster', 'VI'], [5, 'Zachary Simon', 'VII']]
// console.log(convertToDict(nestedArray))
























