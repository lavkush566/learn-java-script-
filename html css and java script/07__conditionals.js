// ====================================CONDITIONALS=======================================
Let a =prompt("hey whats you age?");
a=Number.parseInt(a);//Converting the string to a number 
if(a<0){
    alert("This is invalid age ");
}
else if(a<9){
    alert("You are a kid and you cannot even think of driving");
}   
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You can now  drive as you are above 18");
}
console.log("Done");

console.log("you can",a<18?"not drive":"drive"); //This is called ternary operator and it is used to write a short if else statement

// ====================================SWITCH STATEMENT =======================================
Let day =3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
        default:
            console.log("Invalid day");
}
