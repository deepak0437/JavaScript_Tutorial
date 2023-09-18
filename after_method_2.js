// create function to create multiple objects
const person1 = {
    name:"Deepak",
    age:22,
    state:"Bihar",
    Email:"abcd1234@gmail.com",
    about:function(){
        console.log(`My name is ${this.name} and age is ${this.age}`) 
    },
    is18:function(){
        return this.age>=18;
    }
}

const aboutUser = person1.about();
console.log(aboutUser)

// now we create function to create multiple object and then add key value pair and then return object
function CreateUser(firtsName, lastName, Age, Email, State){
    const userDetail = {}
    userDetail.firtsName = firtsName;
    userDetail.lastName=lastName;  // here i am creating new property in the object using dot notation .
    userDetail.Age = Age;        //here i am adding a key with space so that it will work properly as well.
    userDetail.Email = Email ;   /// here i am also giving an array of values for email.
    userDetail.State = State;    //// here i am assigning string value to Punjab which can be used later on.
    userDetail.about = function(){
        console.log(`My name is ${this.firtsName} and age is ${this.Age}`) 
    },
    userDetail.is18 = function(){
        return this.age>=18;
    }
    return userDetail
}
const userCreating = CreateUser("Harshit", "Kumar", 21, "abcd1234@gmail.com", "Bihar")
console.log(userCreating);
console.log(userCreating.is18());
userCreating.about();

// ------------------------------------------------------ //
// storing method in different object
const userMethod = {
    about : function(){
        console.log(`My name is ${this.firtsName} and age is ${this.Age}`) 
    },
    is18 : function(){
        return this.age>=18;
    }
}

function NewCreateUser(firtsName, lastName, Age, Email, State){
    const NewuserDetail = {}
    NewuserDetail.firtsName = firtsName;
    NewuserDetail.lastName=lastName;  // here i am creating new property in the object using dot notation .
    NewuserDetail.Age = Age;        //here i am adding a key with space so that it will work properly as well.
    NewuserDetail.Email = Email ;   /// here i am also giving an array of values for email.
    NewuserDetail.State = State;    //// here i am assigning string value to Punjab which can be used later on.
    NewuserDetail.about = userMethod.about;
    NewuserDetail.is18 = userMethod.is18;
    return NewuserDetail;
}
const userCreating1 = CreateUser("Harshit", "Kumar", 21, "abcd1234@gmail.com", "Bihar")
console.log(userCreating1);

// ------------------------------------------------------ //
// Solution using Object.create
const obj1 = {
    key1:"value1",
    key2:"value2"
}
const obj2 = Object.create(obj1)
obj2.key3 = "value3"
console.log(obj2.key3) //it retrun value3
console.log(obj2.key1) //it return value1 becuase it will go and search in obj1 if obj2 has no any key like key1


const userMethod1 = {
    about : function(){
        console.log(`My name is ${this.firtsName} and age is ${this.Age}`) 
        return true
    },
    is18 : function(){
        return this.age>=18;
    }
}

function NewCreateUser1(firtsName, lastName, Age, Email, State){
    const NewuserDetail1 = Object.create(userMethod1);
    NewuserDetail1.firtsName = firtsName;
    NewuserDetail1.lastName=lastName;  // here i am creating new property in the object using dot notation .
    NewuserDetail1.Age = Age;        //here i am adding a key with space so that it will work properly as well.
    NewuserDetail1.Email = Email ;   /// here i am also giving an array of values for email.
    NewuserDetail1.State = State;    //// here i am assigning string value to Punjab which can be used later on.
    NewuserDetail1.about = userMethod.about;
    NewuserDetail1.is18 = userMethod.is18;
    return NewuserDetail1;
}
const userCreating2 = NewCreateUser1("Harshit", "Kumar", 21, "abcd1234@gmail.com", "Bihar")
console.log("userCreating2",userCreating2)
console.log("calling is18 method from userCreating2", userCreating2.is18())


