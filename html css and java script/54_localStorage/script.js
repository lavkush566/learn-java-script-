let key = prompt("Enter key you want to set in localStorage:");
let value = prompt("Enter value you want to set for the key in localStorage:");

localStorage.setItem(key, value);

console.log(`Key "${key}" with value "${value}" has been set in localStorage.`);
 
if (ket == "red" || key =="blue"){
    localStorage.removeItem(key);
}

if (key == "0") {
    localStorage.clear();
}