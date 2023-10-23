// let array_num = [{
//     'A':190,
//     'B':155,
//     'C':110,
//     'D':108,
//     'E':130,
//     'F':170,
//     'G':100,
//     'H':167,
//     'I':112,
//     'J':150
// }];
let array_num = [{
    'A':60,
    'B':115,
    'C':90,
    'D':80,
    'E':95,
    'F':150,
    'G':50,
    'H':100,
    'I':170,
    'J':90,
}]
function rounding(value) {
    if (value.toString().includes('.00') || value.toString().includes('.0') || !value.toString().includes('.')) {
        return parseInt(parseFloat(value));
    } else {
        return parseFloat(value).toFixed(2)
    }
}

let person_amount = array_num[0];
let marklist = Object.entries(person_amount).sort((a, b) => a[1] - b[1]);
let sorted_person_amount = Object.fromEntries(marklist);
console.log("Sorted Person Amount : ", sorted_person_amount);
// console.log(Object.values(sorted_person_amount).reduce((a, b) => a + b), rounding(Object.values(sorted_person_amount).reduce((a, b) => a + b) / Object.keys(sorted_person_amount).length, 3));
let avg_amount = Number(rounding(Object.values(sorted_person_amount).reduce((a, b) => a + b) / Object.keys(sorted_person_amount).length));
console.log(Object.values(sorted_person_amount).reduce((a, b) => a + b), avg_amount)
for (let [key, value] of Object.entries(sorted_person_amount)) {

    let index_of_dict = Object.keys(sorted_person_amount);

    if (Number(sorted_person_amount[index_of_dict[0]]) == avg_amount) {
        continue;
    } 
    else if (Number(sorted_person_amount[index_of_dict[0]]) <= avg_amount) {
        let given_value = Number(rounding(avg_amount - Number(sorted_person_amount[index_of_dict[0]])));

        let new_value_left = 0;
        for (let i = index_of_dict.length - 1; i >= 1; i--) {
            
            if (Number(Number(sorted_person_amount[index_of_dict[i]])) >= avg_amount + given_value) {
                console.log(key, 'has given to ', index_of_dict[i], given_value);
                sorted_person_amount[index_of_dict[i]] = rounding(Number(sorted_person_amount[index_of_dict[i]]) - given_value);
                sorted_person_amount[index_of_dict[0]] = rounding(Number(sorted_person_amount[index_of_dict[0]]) + given_value);
            }
            else if (Number(sorted_person_amount[index_of_dict[i]]) > avg_amount){
                if (new_value_left == 0){
                    console.log(key,'has given to ', index_of_dict[i], rounding(Number(sorted_person_amount[index_of_dict[i]])-avg_amount))
                    sorted_person_amount[index_of_dict[0]] = rounding(Number(sorted_person_amount[index_of_dict[0]])+(Number(sorted_person_amount[index_of_dict[i]])-avg_amount))
                    sorted_person_amount[index_of_dict[i]] = rounding(Number(sorted_person_amount[index_of_dict[i]]) - (Number(sorted_person_amount[index_of_dict[i]])-avg_amount))
                    new_value_left = Number(rounding(avg_amount - Number(sorted_person_amount[index_of_dict[0]])));
                }
                else{
                    if (Number(sorted_person_amount[index_of_dict[i]] - avg_amount) >= new_value_left){
                        console.log(key,'has given to ', index_of_dict[i], new_value_left)
                        sorted_person_amount[index_of_dict[0]] = Number(rounding(Number(sorted_person_amount[index_of_dict[0]]) + new_value_left));
                        sorted_person_amount[index_of_dict[i]] = Number(rounding(Number(sorted_person_amount[index_of_dict[i]]) - new_value_left));
                        new_value_left = Number(rounding(avg_amount - Number(sorted_person_amount[index_of_dict[0]])));
                    }
                    else if (Number(sorted_person_amount[index_of_dict[i]] - avg_amount) < new_value_left){
                        sorted_person_amount[index_of_dict[0]] = Number(rounding(Number(sorted_person_amount[index_of_dict[0]]) + (Number(sorted_person_amount[index_of_dict[i]])-avg_amount)));
                        sorted_person_amount[index_of_dict[i]] = Number(rounding(Number(sorted_person_amount[index_of_dict[i]]) - (Number(sorted_person_amount[index_of_dict[i]])-avg_amount)));
                        new_value_left = Number(rounding(avg_amount - Number(sorted_person_amount[index_of_dict[0]])));
                    }
                    console.log('noooo')
                }
            }

            if (Number(sorted_person_amount[index_of_dict[0]]) === avg_amount)
                console.log()
                break;
        }
    }


    marklist = Object.entries(sorted_person_amount).sort((a, b) => a[1] - b[1]);
    sorted_person_amount = Object.fromEntries(marklist);
}

console.log("After Sorted Person Amount : ", sorted_person_amount);

