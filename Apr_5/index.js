const prompt = require("prompt-sync")();

// Array
let fish = ["one", "two", "red", "blue"];

console.log(fish);
console.log(`first: ${fish[0]}`);
console.log(`Count elements: ${fish.length}`);
console.log(fish[2]);
console.log(`Last elemenet: ${fish[fish.length - 1]}`);
console.log();

// Push()
fish.push("Bob");
console.log(`New last elemenet: ${fish[fish.length - 1]}`);

// Pop()
let lastelement = fish.pop();
console.log(`Pop last element: ${lastelement}`);

// Shift()
let firstElement = fish.shift();
console.log(`Shift first element: ${firstElement}`);
console.log(`After shift first element: ${fish[0]}`);
console.log();

// Alternate array creation
let beverages = new Array(2);
beverages.push('Coffee');
beverages.push('Tea');
console.log(beverages);


console.log();
// For each loop
fish = ["one", "two", "red", "blue", "bob"];
fish.forEach(element => {
    console.log(element);
});


// Get specific element from array in HTML and assign to div
// document.getElementById("name").innerHTML = stus[2];


