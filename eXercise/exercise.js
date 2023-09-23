// 1. Return the Sum of Two Numbers
function addition(a, b) {
	return a+b
}
// console.log(addition(3,5))

// 2. Return the Next Number from the Integer Passed
function addition(num) {
	return num+1
}
// console.log(addition(6))

// 3. Return the First Element in an Array
let newArray = [1,2,3,4,5,6]
// console.log("First element: " +newArray[0])

// 4. Convert Minutes into Seconds
let Minutes = 70;
// console.log((Minutes * (60)));

// 5. Convert Age to Days
let age = 77;
// console.log(((age*365)));

// 6. Return square of a number
let num = 5
// console.log(num**2)

// 7. Maximum Edge of a Triangle
let trian1 = 9
let trian2 = 18
// console.log((trian1+trian2) - 1)

// 8. Javascript Program to Check if a number is Positive, Negative, or Zero
// let numcheck = +prompt("Enter any number ...")
// if (numcheck > 0){
//     console.log("Number is greater that zero")
// }
// else if (numcheck < 0){
//     console.log("Number is Less than zero")
// }
// else{
//     console.log("Number is equal to zero")
// }

// 9. program to check if a number is prime or not
// let numprime= parseInt(+prompt('enter a number'));
// let isprime = true;
// if (numprime == 1){
//     console.log("1 is neither prime nor composite number")
// }
// else if(numprime>1){
//     for (let i = 2; i < numprime; i++){
//         if (numprime % i == 0){
//             isprime = false
//             break
//         }
//     }
// }
// if (isprime){
//     console.log(numprime, " is prime number")
// }
// else{
//     console.log(`${numprime}, is not a prime`)
// }

// program to convert decimal to binary
// function convertToBinary(x) {
//     let bin = 0;
//     let rem, i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//         console.log(
//             `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//         );
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }
// let number = prompt('Enter a decimal number: ');
// const result = parseInt(number).toString(2);
// console.log('Binary:' + ' ' + result);
// convertToBinary(number);


// ----------------ARRAY question---------------------
// How to get removed elements of a given array until the passed function returns true in JavaScript ?
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removeArr = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 6) {
		removeArr.push(arr[i]);
	} else {
		break;
	}
}
// console.log(removeArr);

let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
let limiter = 5;
let retrieveRemoved = function (array, limiter) {
	let i;
	for (i = 0; i < array.length; i++) {
		if (array[i] >= limiter) {
			return array.slice(0, i);
		}
	}
	return array.slice(i);
}
let removed = retrieveRemoved(array, limiter);
// console.log("The removed elements: " + removed);


// How many numbers in the given array are less/equal to the given value using the percentile formula ?
let arrayR = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
for (let i in arrayR){
	if (i==5){
		arrayR.splice(i, 1)
	}
}
// console.log(arrayR)


//How to convert a 2D array to a comma-separated values (CSV) string in JavaScript ?
let twod = [ [ "a" , "b"] , [ "c" ,"d" ] ]
let new2darray = [...twod[0], ...twod[1]].join(',')
// let new2darray1 = twod[1].join('')
// console.log(new2darray)

// How to count number of occurrences of repeated names in an array of objects in JavaScript ?
let objectArray = [ { employeeName: "Ram", employeeId: 23 }, { employeeName: "Shyam", employeeId: 24 }, { employeeName: "Ram", employeeId: 21 },
	{ employeeName: "Ram", employeeId: 25 }, { employeeName: "Kisan", employeeId: 22 }, { employeeName: "Shyam", employeeId: 20 }
]
const { length } = objectArray;
console.log(`Number of unique names ${length}`);

