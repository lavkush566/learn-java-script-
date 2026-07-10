// =====================================CHAPTER1 PRACTICESET======================== 

//CHAPTER 1 -Q1
// Create a variable of type string and try to add a number to it
let a="harry";
let b=6
console.log(a+b); // it will concatenate the string and number and give output as harry6

//CHAPTER 1 -Q2
//use type of operator to find the type of the variable defined in last question
console.log(typeof(a)); // it will give output as string
console.log(typeof(b)); // it will give output as number    
console.log(typeof(a+b)); // it will give output as string because of concatenation

//CHAPTER 1 -Q3
//create a const object in javascript can you change it to hold a number later
const a1={
    name:"harry",
    section:1
    isprincipal:false
}
console.log(a1);

//CHAPTER 1 -Q4
//try to add a new key to the const object in problem 3 were you able to do it

a1["friend"]="shubham"
a1["name"]="lucky"

//CHAPTER 1 -Q5
//Write a js program to create a word mening dictionary of 3 words

const dict={
    appreciate:"recognize the full worth of",
    ataraxia:"a state of freedom from emotional distuebance and anxiety",
    yakka:"work,especially hard work"
}
console.log(dict.yakka);
console.log(dict[ataraxia]);