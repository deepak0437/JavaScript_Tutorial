// in this exercise we use document.writeln to print any value
// document.writeln("hello World")
// document.writeln("<h1>Hello world</h1>")

// 1. Write a JavaScript function to check whether an 'input' is an array or not.
let checkArray = function(input){
    if (toString.call(input) === "[object Array]"){return true}
    else{ return false }
    // return Array.isArray(input); // return true if input is of type array else false;
}
document.writeln(`checkArray([2,3,7,9,0]) : ${checkArray([2,3,7,9,0])}`);
document.writeln("<br>")
document.writeln("<br>")
// console.log(`checkArray([2,3]) : ${checkArray([2,3])}`);

// 2. Write a JavaScript function to clone an array.
let cloneArray = (arr1, arr2)=>{
    const array3 = [...arr1, ...arr2];
    return array3
}
arr1 = [1, 2, 4, 0]
arr2 = [1, 2, [4, 0]]
document.writeln("After cloning Array : ", cloneArray(arr1,arr2))
document.writeln("<br>")
// console.log(cloneArray(arr1,arr2))

// 3. Write a simple JavaScript program to join all elements of the following array into a string.
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

