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
// Test
console.log(typeof(50));

let num = 10.55;
if (num % 1 > .50) {
    console.log(parseInt(num) + 1)
}
else {
    console.log(parseInt(num))
}
console.log(10.15 / 100 * 100);
console.log(10.15 % 1);

console.log("========================================")

let firstNum = 8;
let secondNum = 25.25;
let thirdNum = 15;
let result = '';

if (firstNum == secondNum && secondNum == thirdNum) {
    result = `The only number (${firstNum}) is the middle number.`;
} else if (firstNum == secondNum) {
    result = `A number is repeated (${firstNum}) is the repeated number.`;
}
else if (secondNum == thirdNum) {
    result = `A number is repeated (${secondNum}) is the repeated number.`;
}
else if (
    (firstNum < secondNum && firstNum > thirdNum) ||
    (firstNum > secondNum && firstNum < thirdNum)
) {
    result = `The first number (${firstNum}) is the middle number.`;
} else if (
    (secondNum < firstNum && secondNum > thirdNum) ||
    (secondNum > firstNum && secondNum < thirdNum)
) {
    result = `The second number (${secondNum}) is the middle number.`;
} else if (
    (thirdNum < firstNum && thirdNum > secondNum) ||
    (thirdNum > firstNum && thirdNum < secondNum)
) {
    result = `The third number (${thirdNum}) is the middle number.`;
}

console.log(result);

console.log(typeof 'secondNum')
