let promise= new promise(function(resolve, reject){
    alert("world");
    resolve(78)
});



console.log("hello world");
setTimeout(() => {
    console.log("hello world 2 second")
},2000);

console.log("my name is "+"hello three");
console.log(promise);