console.log("javascript tutorial 3: var,let,const");
// var a=45;
// var a="p";

let b="harry";
const author="harry";
author=5 //throws an error because we cannot change the value of a constant variable
// b=4; // this is valid because we can change the value of a variable declared with let
console.log(b);

//we are us 

let c=null;
let d=undefined;
{
    let b='this'
    console.log(b);
}
console.log(b);