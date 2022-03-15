const prompt = require("prompt-sync")();

console.log("Hello\n");

// Sentinal example
const SENTINAL = -1;
let total = 0;
let value = 0;
let numValues = 0;
let average = 0;


while (value != SENTINAL) {
    total += value;
    value = parseFloat(prompt(`Enter a value or ${SENTINAL} to quit: `));
    value = parseFloat(value);
    numValues ++;
}

numValues --; // offset sentinal

average = "Undefinded. No values";

if (numValues > 0) {
    average = total / numValues;
}


console.log(`Total: ${total}`);
console.log(`Values: ${numValues}`);
console.log(`Average: ${average}`);

let sum1 = 0;
const NUM = 7;

for (let i = 0; i < NUM; i++) {
    let num = prompt("Enter a number: ");
    num = parseFloat(num);
    sum1 += num;
}

console.log(`Sum: ${sum1}`);

