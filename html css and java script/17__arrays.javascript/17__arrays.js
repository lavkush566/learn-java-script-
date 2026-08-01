// Chapter 5   arrays
let marks_class_12=[91,82,63,84,false,"not present"];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]); // it will return undefined because there is no element at index 6
console.log("the length of marks_class_12 is", marks_class_12.length);
marks_class_12[6]=89; // it will add the value 89 at index 6
marks_class_12[0]=95; // it will change the value at index 0 to 95
console.log(marks_class_12);