// git config --global user.name "your-username"
// git config --global user.email "your-email@example.com"

// for printing any line we use console.log 
// we can use double or single quotes or backticks
console.log("Hello World...!");
// backtick are use for string templates
console.log(`Hello World...!`);

// variable can store some info & we can use that info later
// we can change that info later also
// declare the variable by using var keyword
var firstName = "Harshat Mehta"; ;
console.log(firstName);

// if we have to change value of old variable then we don't need to use again var keyword
firstName = "Varsh yadav";
console.log(firstName);

var Name_of = 'dipak';
console.log(Name_of);

// string
let newNaame = "BirdsAnimals";
// indexing startswith 0
console.log(newNaame[7]);
// find length of string
console.log(newNaame.length);
// print last character of string
console.log(newNaame[newNaame.length-1]);

// trim whitesapaces from string
let spaceName = "   Name  ";
console.log(spaceName.length, spaceName);
spaceName = spaceName.trim()
console.log(spaceName.length, spaceName);

// convert into upper and lower case
let caseName = "DeePak";
console.log(caseName.toLocaleUpperCase());
console.log(caseName.toLowerCase());

// slicing in string
let sliceName = "Deepak Kumar Singh";
let newString = sliceName.slice(5,8);
console.log(newString);

// check data type
let typeName = "Primitive Data Type";
let ageNumber = 34;
console.log(typeof typeName);
console.log(typeof ageNumber);
console.log(typeof "77");
console.log(typeof 98);

// convert one data type to another
let convertStr = "22";
let convertNum = 22;
console.log(typeof (convertNum+"")); //1st method to convert string to number
console.log(typeof (+convertStr));   //1st method to convert number to string

console.log(typeof String(convertNum), convertNum)
console.log(typeof Number(convertStr), convertStr)

// template string
let myAge = 22;
let myName = "Deepak";
console.log("My name is "+ myName + " And My age is "+ myAge);
let aboutMe = `My name is : ${myName} , and My age is : ${myAge}`; // here we are using template string by using backticks
console.log(aboutMe  )

// undifined data type
let unName;
console.log(typeof unName, unName)

// null data type
let nulName = null;
console.log(typeof nulName, nulName) //type of null is always return object
nulName = "PersonName";
console.log(nulName)

// bigInt
let myNumber = 12345;
console.log(typeof myNumber,myNumber)
console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991
console.log(Number.MIN_SAFE_INTEGER);   //-9007199254740991

let frstNumber = BigInt(1234543647854662512456437)
let scndNumber = BigInt(1234)
let thrdNumber = 1234n
console.log(typeof frstNumber, frstNumber);
console.log(typeof scndNumber, scndNumber);
console.log(typeof thrdNumber ,thrdNumber );
console.log(thrdNumber+19n)   // we cannot perform operation with BigInt and Number  Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// boolean and comparision operator
let num1 = 9
let num2 = 8
let num3 = "9"
console.log(num1>=num2);

// == vs === operator
console.log(num1 == num2)
console.log(num1 == num3)
console.log(num1 === num3)

// != and !==
console.log(num1 != num2)
console.log(num1 != num3)
console.log(num1 !== num3) 