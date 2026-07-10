// print number 1 to 20

for(let i=1;i<=20;i++){
    console.log(i);
}

// print number from10 to 1

for(let i=10;i>=1;i--){
    console.log(i);   
}

// print even number from 1 to 50
for(let i=1;i<=50;i++){
    if(i%2===0){
        console.log(i);
    }
}

// print odd number from 1 to 50
for(let i=1;i<=50;i++){
    if(i%2!==0){
        console.log(i);
    }
}

// print the sum of numbers 1 to 100

let sum=0;
for(let i=1;i<=100;i++){
    sum=sum+i;
}
console.log(sum);

// print the multiplication table of 5
let n=5;
for(let i=1;i<=10;i++){
    console.log(n+"*"+i+"="+n*i);
}

// reverse a number

let num=1234;
let reverse=0;
while(num>0){
    let lastDigit=num%10;
    reverse=reverse*10+lastDigit;
    num=Math.floor(num/10);
}
console.log(reverse);

// count digits numbers 
let num=45678910;
let count =0;
while(num>0){
    count++;
    num=Math.floor(num/10);
}
console.log(count);

// find factorial number 
let num=5;
let factorial=1;
for(let i=1;i<=num;i++){
    factorial=factorial*i;
}
console.log(factorial);

// print array elements using for....of
let fruits=["apple","banana","orange","grapes"];
for(let f of fruits){
    console.log(f)
}
