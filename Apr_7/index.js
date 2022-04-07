const prompt = require("prompt-sync")();


let myArray = [];

for (let i = 0; i <= 10; i++) {
    myArray.push(i * 10);
    
}

// Splice removes elements, returns them, and allows insertion
let removed = myArray.splice(5, 2);

console.log(myArray);

console.log(`Removed: ${removed}`);
console.log();

//Object, student GPAs
let student_gpas = {};

// student_gpas['Frank'] = 3.1;
// student_gpas.Frank = 3.1;

// student_gpas['Madison'] = 2.3;
// student_gpas.Madison = 2.3;

// student_gpas['Anna Beth'] = -2.1;

//Alternate way to create an object
student_gpas = {
    Frank: 3.1, Madison: 2.3, "Anna Beth": -2.1 // Space in name requires quotes
};

// Pull data from objects
console.log(student_gpas['Anna Beth']);

console.log(student_gpas.Madison);
console.log();

// Check if key exists in an Object
if ('Madison' in student_gpas) {
    console.log('Madison is a student');
}

if ('Adam' in student_gpas) {
    console.log('Adam is a student');
}
console.log();

// Iterate through all keys
for (let student in student_gpas) {
    console.log(`${student} has GPA: ${student_gpas[student]}.`);
}