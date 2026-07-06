alert("Enter the value of a!");
let a = prompt("Enter a here","578");
a = Number.parseInt(a);
alert("you enterd a of type "+(typeof a));
let write =confirm("Do you want to write something in console?");
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write");
}
