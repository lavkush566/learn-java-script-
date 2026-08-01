// string methods
let name = "harry";
//console.log(name.length);
// console.log(name[0]);   
// console.log(name[1]);
// console.log(name.toUpperCase());  
// console.log(name.toLowerCase());
// console.log(name.slice(1,4)); // it will start from 1 and end at 4-1=3
// console.log(name.slice(0)); // it will start from 0 and end at the last character
// console.log(name.slice(1)); // it will start from 1 and end at the last character
// console.log(name.slice(-4,-1)); // it will start from -4 and end at -1-1=-2
// console.log(name.replace("har","shubham")); // it will replace har with shubham
// console.log(name.replace("r","p")); // it will replace only the first r with p
// console.log(name.replace(/r/g,"p")); // it will replace all the r with p\

let friend = 'rohan';
console.log(name.concat("is a friend of",friend)); // it will concatenate the two strings
console.log(name + " is a friend of " + friend); // it will concatenate the two strings
let friend2 = "                   shubham                 ";
console.log(friend2);
console.log(friend2.trim()); // it will remove the white spaces from the beginning and end of the string

let fr="Raman"+ "Shivika" +"harry";
console.log(fr[0]);
console.log(fr[1]);\
console.log(fr[2]);
console.log(fr[3]);
console.log(fr[4]);
console.log(fr[5]);
// fr [4]="0" // it will not work because strings are immutable in javascript
console.log(fr);