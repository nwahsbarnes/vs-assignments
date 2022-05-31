const readline = require("readline-sync");
const operations = ["add", "sub", "mul", "div"];


const num1 = parseInt(readline.question("Please enter your first number: "), 10);
const num2 = parseInt(readline.question("Please enter your second number: "), 10);
const operationIndex = readline.keyInSelect(operations, "Please enter the operation to perform: ");
let result = 0;
switch (operationIndex) {
    case -1: // Cancel
        break;
    case 0:
        result = add(num1, num2);
        break;
    case 1:
        result = subtract(num1, num2);
        break;
    case 2:
        result = multiply(num1, num2);
        break;
    case 3:
        result = divide(num1, num2);
        break;
}
console.log("The result is: " + result);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    // Can't divide by 0, so just return 0
    if (num2 === 0) {
        return 0;
    }
    return num1 / num2;
}