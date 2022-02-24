const prompt = require("prompt-sync")();

console.log(isNaN('1'));  // false
console.log(isNaN('string'));  // true

console.log('===========================================')
// Increment, post increment
let x = 2;
let a = 3 + x++;
console.log(`a: ${a}, x: ${x}`);

// Pre increment
let x1 = 2;
let a1 = 3 + ++x1;
console.log(`a: ${a1}, x: ${x1}`);

console.log('===========================================')
// For loop
for (let index = 0; index < 5; index++) {
    console.log('Hello');
}

console.log('===============================================')
// For loop shapes
function execute() {
    
}

console.log('Enter a positve number: ');

let result = '';


