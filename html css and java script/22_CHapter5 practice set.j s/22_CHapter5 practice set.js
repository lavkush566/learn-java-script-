//Chapter 5 practice set
// practice problem 1

let arr=[1,2,3,4,5,6,7,83];
let a= prompt("Enter a number");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);

// practice problem 2
let arr=[1,2,3,4,5,6,7,83];
let a;
do{
    a= prompt("Enter a number");
    a=Number.parseInt(a);
    if(a !== 0){
        arr.push(a);
    }while(a != 0);
}
console.log(arr);

// practice problem 3
let arr1 =[1,2,3,4,5,6,7,83,670];
let n=arr1.filter((x)=>{
    return x%10==0;
})
console.log(n);

// practice problem 4
let arr1 =[1,2,3,4,5,6,7,83,670];
let n=arr1.map((x)=>{
    return x*x
})
console.log(n);

// practice problem 5
let arr2=[1,2,3,4];
let n=arr2.reduce((h1,h2)=>{
    return h1 * h2;
})
console.log(n);