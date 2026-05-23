// program to add first n natural numbers
let sum=0;
let n= prompt ("Enter the value of n");
n=number.parseInt(n);
for(let i=0; i < n;i++){
    sum+=(i+1);

}

console.log("sum of first "+ n+"natural numbers is"+sum);

// for in loops

let object={
    harry:90,
    shubh:80,
    shivika:70,
    ritika:57,
    shiv:23
}
for(let a in obj){
    console.log("Maeks of" + a + "are" + obj[a]);
}

// for of loops 
for(let b of "harry"){
console.log(b);
}
