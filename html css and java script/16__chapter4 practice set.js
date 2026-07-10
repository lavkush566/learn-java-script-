// Chapter 4 
// problem 1\
let str="har\"";
console.log(str.length);
//problem 2
const sentence = "The quick brown fox jumps over the lazy dog";
const wordToFind = "fox";
console.log(sentence.includes(wordToFind)); // it will return true
// console.log(`The word "${wordToFind}"${sentence.includes(wordToFind) ?'is''is not'}in the sentence`); // it will return false
 //problem 3
 let str2="harry";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
// problem 4\
let str3="please give me Rs 1000";
let amount=number.parseInt(str3.slice(19));
console.log(amount);
console.log(typeof amount);
// problem 5
let friend="rohan";
friend[0]="R"; // it will not work because strings are immutable in javascript
console.log(friend);