let num=[1,2,3,4,5,6,7,8,9]
let num_more=[11,12,13,14,15,16,17,18,19,]
let num_even_more=[22,24,26,28,30]
// console.log(num.length);
//delete num[0] 
// console.log(num,num_more,num_even_more);
let newArrazy=num.concat(num_more,num_even_more); //
console.log(newArrazy);
console.log(num,num_more);

// sort method
let compare=(a,b)=>{
    return b-a;
}
let num=[551,26,43,45,65,36,57,866,96]
num.sort(compare)
//num.reverse() 
console.log(num);\\


//splice and slice
let num=[551,26,43,45,65,36,57,866,96]
// let deletedValues=num.splice(2,4,1040,1022,1023,1024,)
// console.log(num);
// console.log(deletedValues);

// let newnum=num.slice(3) 
let  newnum=num.slice(3,5) 
console.log(newnum);
 