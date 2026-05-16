// nn bb ss u --primitives in js

let a = null; // null
let b = 345; // number
let c = true; // boolean  -- can alsobe false
let d = BigInt("567")+ BigInt("3");   // bigInt
let e = "lucky"; // string 
let f = Symbol("I am a nice symbol"); // symbol
let g // undifined

console.log(a,b,c,d,e,f,g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// OUTPUT 
// null 345 true 570n 'lucky' Symbol(I am a nice symbol) undefined
// NULL
// NUMBER
// BOOLEAN


// non primitive data type in js is object

const item = {
    "harry": true,
    "shubh": false,
    "rohan": 67,
    "hitesh": undefined
}
console.log(item["rohan"]);
// OUTPUT
<<<<<<< HEAD
// 67
=======
// 67
>>>>>>> 63f11c1664ecbf62ba3d9fea3b5d7c57560b9064
