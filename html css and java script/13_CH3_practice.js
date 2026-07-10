//=====================================CHAPTER 3 PRACTICE====================================================================================
let marks={
    harry:90,
    shubham:9,
    lovish:56,
    monika:4
}
// Problem no 1
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}

//problem no 2
for(let key in marks){
    console.log("The marks of "+key+" are "+marks[key]);
}
//problem no 3
let cn=43;
let i
while(i!=cn){
    console.log("try again");
    i=prompt("Enter the number");
}
console.log("You have entered the correct number");

// problem no 4

const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
cosole.log("The mean of 1,2,3,4,5 is",mean(1,2,3,4,5));