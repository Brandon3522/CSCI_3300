// Arrays
let array = []

for (let i = 0; i <= 10; i++) {
    array.push(i);
}

for( let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

function sumArray(array) {
    let sum = 0;

    for ( let i = 0; i < array.length; i ++) {
        sum += array[i];
    }

    return sum;
}


let myArray = [5, 5, 5];
let mySum = sumArray(myArray);
console.log('Sum: ' + mySum);

console.log()

// Objects
let myObject = {
    'name': 'Bob',
    'age': 50,
    'occupation': 'Engineer'
}

for (let value in myObject) {
    console.log(value + ":" + " " + myObject[value]);
    if ('something' in myObject) {
        console.log('true');
    }
}
console.log();

myObject['name'] = 'Tom'; // OR myObject.name = 'Tom'
console.log(myObject['name']);

console.log();
let myarray2 = [1, 5, 10, 6, 20, 11];
function max(list) {
    let max = list[0];
    for(let num of list) {
        if (max < num) {
            max = num;
        }
    }
    return max;
}

let maxNum = max(myarray2);
console.log(maxNum);
