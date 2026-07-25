/*let p1= new Promise((resolve,reject) => {
    console.log("Promise is pending")
    setTimeout(()  =>  {
        console.log("I am promise and i am resolved")
        resolve(true)
        
    },5000)
})

let p2= new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("I am promise and i am rejeced")
        // resolve(true)
        reject(new Error("I am an error"))
        
    },5000)
})

console.log(p1,);
console.log(p2);*/

let p1 = new Promise((resolve, reject) => {
    console.log("Promise 1 is pending");

    setTimeout(() => {
        console.log("I am promise 1 and I am resolved");
        resolve(true);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise 2 is pending");

    setTimeout(() => {
        console.log("I am promise 2 and I am rejected");
        reject(new Error("I am an error"));
    }, 5000);
});

p1.then((value) => {
    console.log("p1 Result:", value);
});

p2.catch((error) => {
        console.log("p2 Error:", error.message);
    });