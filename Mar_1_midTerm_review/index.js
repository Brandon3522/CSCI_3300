const prompt = require("prompt-sync")();

console.log("Hello");
console.log("===================================");

function bobThere(message) {
    let stopPoint = message.length - 2;
    for (let i = 0; i < stopPoint; i++) {  // string must be 3 characters
        if (message[i] == "b" && message[i + 2] == "b") {
           return true;
        }
        
    }
    return false;
}

console.log(bobThere("abcbob"));
console.log(bobThere("b9b"));
console.log(bobThere("bac"));

console.log("===================================");

function redTicket(a, b, c) {
    if (a == 2 && b == 2 && c == 2) {
        return 10;
    }
    else if (a == b && b == b) {
        return 5;
    }
    else if (a != b && a != c) {
        return 1;
    }
    return 0;
}

function test(actual, real) {
    return actual == real;
}

console.log(test(redTicket(2, 2, 2), 10 ));
console.log(test(redTicket(2, 2, 1), 0 ));
console.log(test(redTicket(0, 0, 0), 5 ));


console.log("===================================");
/*
Promt user for 2 numbers. Program will alert which is larger.

If the first input is not a number, report first input is not valid.
If the second number is not a number, report the seond number is not valid,
If both invalid, report both numbers are invalid.

// Use alert, or requried method on test

*/

function is_greater() {
    let num1 = 0;
    let num2 = 0;

    num1 = prompt('Enter the first number: ');
    num2 = prompt('Enter the second number: ');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) && isNaN(num2)) {
        console.log('Both numbers are not valid');  // Use alert, or requried method on test
    }
    else if (isNaN(num2)) {
        console.log('Number 2 is not valid');
    }
    else if (isNaN(num1)) {
        console.log('Number 1 is not valid');
    }
    else if (num1 > num2) {
        console.log(`Number 1 is greater: ${num1}`);
    }
    else if (num2 > num1) {
        console.log(`Number 2 is greater: ${num2}`);
    } 
    else if (num1 == num2) {
        console.log('Numbers are equal');
    }

}

is_greater();

console.log("===================================");

