'use strict'
// Task 1
// Write a function pow(x, n) that returns x in power n.
// Create 2 solutions:
//     with operator **
//     with loop
let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the number for power argument:");

// Arrow function
//let calcPower = (a, b) => a ** b;
function calcPower1(num1, num2) {
    return num1 ** num2;
}
// option 1: with function
let textOut = ` option1(function): ${num1} in power of ${num2} is equal: ${calcPower1(num1, num2)}`;
console.log(textOut);
// option 2: with loop
function calcPower2(num1, num2) {
    let res = num1;
    for (let i = 0; i < num2 - 1; i++) {
        res = res * num1;
    }
    return res;
}

textOut = ` option2(loop): ${num1} in power of ${num2} is equal: ${calcPower2(num1, num2)}`;
console.log(textOut);

// Task 2
// Write a function min(a, b) which returns the least of two numbers a and b.
num1 = +prompt("Enter the first number:");
num2 = +prompt("Enter the second number:");
function getMin(num1, num2) {
    return (num1 >= num2) ? num2 : num1;
}
textOut = ` Function(MIN): ${getMin(num1, num2)}  is MIN value for ${num1} and ${num2} `;
console.log(textOut);

// Task 3
// Write a function max(a, b) which returns the greater of two numbers a and b.
function getMax(num1, num2) {
    return (num1 >= num2) ? num1 : num2;
}
textOut = ` Function(MAX): ${getMax(num1, num2)}  is MAX value for ${num1} and ${num2} `;
console.log(textOut);


// Task 4
// Rewrite with arrow functions

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

let arrFunction = a => {
    (confirm(a)) ? alert("You agreed.") : alert("You canceled the execution.");

};
arrFunction("Do you agree?");

// Task 5
// Write a function log(message, logger)
// Parameter logger should have default value console.log
// Example:
// log('Hello!', console.warn) // warning 'Hello!' is logged to console
function log(message, logger = console.log) {
    logger(message);
}
log('Hello!Log', console.log);
log('Hello!info', console.info);
log('Hello!warn', console.warn);
log('Hello!error', console.error);

