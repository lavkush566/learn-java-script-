
const f =()=>{
    try {
        let a = 0;
        console.log("Before Error");
        //  console.log(p); // p declare nahi hai
    console.log("After Error");
    return
} catch (err) {
    console.log("Catch block executed");
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log("Finally block executed");
}
} 

f();

console.log("End")