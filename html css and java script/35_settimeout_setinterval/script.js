document.write("hello world");
 
const sum = (a,b,c)=>{
    console.log("yes i am running" +(a +b+c))
    a+b
    }

    setTimeout(sum,1000,1, 2, 7)
    setInterval(function(){
        alert("setinterval")

    },3000)
// let a= setTimeout(function(){
//     alert("I am inside of settimeout")
// }, 3000)
// let b =prompt("do you want to run the settimeout function?")
// if(b=="n"){
//     clearTimeout(a)
// }
// clearTimeout(a)
// console.log(a)