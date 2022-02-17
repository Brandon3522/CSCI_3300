const prompt = require("prompt-sync")();

// Rounding ex
// if (number > 0) {
// number += 0.5;
// nuber = parseInt(number);
// }
// else {
//     number -= parseInt(number);
//     number = parseInt(number);
// }

// TAX RATES
// const KY_RATE = 0.06;
// const TN_RATE = 0.095;

// let price = prompt("Enter price: ");
// let state = prompt("Enter state: ");

// price = parseFloat(price);
// let sales_tax = 0;

// if (price <= 0) {
//   console.log("Error")
// }

// if (state == "TN") {
//   sales_tax = price * KY_RATE;
// }

// if (state == "KY") {
//   sales_tax = price * TN_RATE;
// }

// if (sales_tax <= 0) {
// 	console.log("Enter valid sales tax");
// }

// else {
// 	console.log(`Sales tax = ${sales_tax}`)
// }


// Grade calculator

// Fail fast
// always put error checks and validation at beginning

let grade = prompt("Enter your grade: ");

grade = parseFloat(grade);

if (isNaN(grade)) {
    console.log("You didn't enter a number. Error!");
} else if (grade > 100) {
    console.log("Error! Grade must be below 100.");
} else if (grade < 0) {
    console.log("Error! Grade must be positive.");
} else if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80 && grade < 90) {
    console.log("Grade: B");
} else if (grade >= 70 && grade < 80) {
    console.log("Grade: C");
} else if (grade >= 60 && grade < 70) {
    console.log("Grade: D");
} else {
    console.log("Failed");
}

console.log(`Your grade is ${grade}`);
