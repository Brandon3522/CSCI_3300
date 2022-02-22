const prompt = require("prompt-sync")();

// While loop
/* const HELLO = 'hello';
const QUIT = 'quit';
let option = HELLO;

while (option != QUIT) {
    option = prompt('hello. Enter "quit" to quit: ');

    if (option == HELLO) {
        console.log('Hello!');
    }
}
console.log('Done. '); */
//================================================
// While loop

/* Console.log = alert for html
let number = prompt('Enter a number less than 10: ')
number = parseFloat(number);
while (isNaN(number) || number >= 10) {
    console.log('Error!');
    number = prompt('Enter a number less than 10: ');
    number = parseFloat(number);
}
console.log('Hooray!')
 */

//================================================
// Input validation

/* let response = prompt("Pineapple on pizza? ");
response = response.toUpperCase();

while (response != "N" && response != "Y") {
    console.log("Invalid input");
    response = prompt("Pineapple on pizza? ");
}
if (response == "n" || response == "N") {
    console.log("Nope");
} else {
    console.log("Sweet");
} */

// ===========================================
// Do-While loop
/* let response = '';
do {
    let response = prompt("Pineapple on pizza? ");
    response = response.toUpperCase();

    if (response != 'n') {
        console.log("Invalid input");
        response = prompt("Pineapple on pizza? ");
    }
    
    
 } while (response != "N" && response != "Y");

 if (response == "N") {
    console.log("Nope");
} else {
    console.log("Sweet");

} */

//==============================================
// Guess the number

/* let hidden = Math.floor(Math.random() * 100 + 1);
let guess = 0;
let tries = 0;
do {
    guess = parseFloat(prompt("Enter a guess: "));
    if (guess > hidden) {
        console.log("Lower");
    }
    if (guess < hidden) {
        console.log("Higher");
    }
    tries++;
} while (guess != hidden);
console.log("You got it right in " + tries + "!"); */
