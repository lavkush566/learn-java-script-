// ====================CHAPTERE2=======================
// problem 1

let age= prompt("what is your age");
if(age>10 && age<20){
    console.log("your age is between 10 and 20");
}   
else{
    console.log("your age is not between 10 and 20")
}

// problem 2
let age = prompt("what is your age");
switch(age){
    case "12":
        console.log("your age is 12");
        break;
    case "13":
        console.log("your age is 13");
        break;
    case "14":
        console.log("your age is 14");
        break;
        default:
            console.log("your age is not special");
}

// problem 3

let num=prompt("what is your age ?")
if(num%2==0 && num%3==0){
    console.log("your number is divisible by 2 and 3");
}
else{
    console.log("your number is not divisible by 2 and 3");
}

// problem 4

// Same as qustion no3 only add or (||) and replace with and(&&)

// problem 5

let a= 19;
let a= age>18?"you can drive":"you cannot drive "
console.log(a);
