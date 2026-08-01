let num =[3,5,1,2,4];

// for(let i=0;i<num.length;i++){
    // console.log(num[i]);
// }

//foreach loops
 num.forEach((element)=>{
     console.log(element * element);
 })

 //Array.form
 let name= "harry";
 let arr = Array.from(name)
 console.log(arr)

 //for...of 
 for(let item of num){
    console.log(item);
 }

 //for...in
 for(let i in num){
    console.log(num[i]);
 }

 