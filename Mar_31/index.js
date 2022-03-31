const prompt = require("prompt-sync")();

// Function with parameters
function addTwoValues(a, b) {
    let total = a + b;
    return total;
}

let fishPrice = 10;
let chipPrice = 5;
let total = addTwoValues(fishPrice, chipPrice);
console.log("Total: " + total)
console.log();

// Pass by values/Reference
// Strings, Numbers, Booleans pass-by-value
function setNumberFour(num) {
    num = 4;
}

let value = 5;
console.log('Before function: ' + value);
setNumberFour(value);
console.log('After: ' + value);
console.log();

// Date method
// Date = object, therefore pass-by-reference
let today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getDate())

today.setYear(1992);
console.log(today);
console.log();

let firstcontact = new Date(2056, 3, 5);
console.log(firstcontact);

let today0 = new Date();
let firstDayOfYear = new Date(today0.getFullYear(), 0, 1); // JAN 1, 2022
console.log(firstDayOfYear);
console.log();

function setDateToMoonLanding(date) {
    date.setYear(1969);
    date.setMonth(6);
    date.setDate(20);
}

let moonLanding = new Date();
setDateToMoonLanding(moonLanding);
console.log(moonLanding);

console.log();

//Variable Scope - Variable declaration
// Global variables
function myFun() {
    x = 42;
}

function another() {
    x = 52;
}

function different() {
    console.log(x);
}

myFun();
another();
different();
console.log(x);

// Local variables
function myFunc() {
    let x1 = 42;
}

myFunc();
// console.log(x1); // Error, undefined

console.log();
// Function varibles
// Let keyword
function lestGo() {
    let x = 4;
    console.log(x); // 4
    if (true) {
        let x = 5; // Redefined since in different scope
        console.log(x); // 5
        if (true) {
            let x = 6;
            console.log(x); // 6
        }
        console.log(x) // 5
    }
    console.log(x) // 4
}

lestGo();

console.log();

// var keyword - don't use
function lestGo0() {
    var x = 4;
    console.log(x); // 4
    if (true) {
        var x = 5;
        console.log(x); // 5
        if (true) {
            var x = 6;
            console.log(x); // 6
        }
        console.log(x); // 6
    }
    console.log(x); // 6
}

lestGo0();

console.log();
// Example
// message += `<li>${value}</li>`

// documnet.getbyid().inner = "<ul>" + message + "</ul>"