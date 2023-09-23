// while loop
// printing number from 0 to 10
let iVal = 0;
while (iVal <= 10){
    // console.log(iVal)
    iVal++;
}

let sum = 0;
let val = 0
while (val <= 100){
    sum += val;
    val++;
    // console.log(sum);
    // console.log(iVal);
}
console.log(`sum of 1 to 10 number is : ${sum}`)


// for loop
for(let num = 0; num <=10; num++){
    console.log(num)
}

let sumNum = 0
for (let iNum = 0; iNum <= 10; iNum++){
    sumNum += iNum;
}
console.log(sumNum)

// break and switch staetement
for(let num = 0; num <=10; num++){
    if(num == 8){
        console.log("HELLO")
        break;
    }
    if(num == 5){
        console.log("Skip this line")
        continue;
    }
    console.log(num)
}

// do while loop
let inum = 8;
do{
    console.log(inum);
    inum++
}
while(inum <= 10){
    console.log("In while loop")
}