//how to declare a variable
let x;
//how to assign a value
x = 20;
console.log(x);
// how to check a type of a variable
console.log(typeof x);

let Username = "Tarun";
let degree = "MCA";
let result = true;
let cgpa = 8.71;

console.log(typeof Username);
console.log(`your name is ${Username}`);
console.log(typeof degree);
console.log(`your degree name is ${degree}`);
console.log(typeof result);
console.log(`your result is ${result}`);
console.log(typeof cgpa);
console.log(`your score is ${cgpa} - CGPA`);


document.getElementById("name").textContent = Username;
document.getElementById("degree").textContent = degree;
document.getElementById("result").textContent = result;
document.getElementById("cgpa").textContent = cgpa;
