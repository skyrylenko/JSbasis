'use strict'
// Task 1
// User inputs a number. Check the number and write a message if it's odd or even.
let num1 = prompt("Enter the number");
let divTwo = ((+num1 % 2) == 0) ? "even" : "odd";
let textOut = ` The entered number ${num1} is ${divTwo} `;
console.log(textOut);


// Task 2
// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it
const rangeStart = 14;
const rangeEnd = 90
num1 = +prompt("Enter your age:");
//variant 1
if (num1 >= rangeStart && num1 <= rangeEnd) {
    textOut = `The entered number(${num1}) is in the range ${rangeStart} and ${rangeEnd}`;
} else {
    textOut = `The entered number(${num1}) is out of the range ${rangeStart} and ${rangeEnd}`;
}
console.log(textOut);
//variant 2
if (!(num1 >= rangeStart && num1 <= rangeEnd)) {
    textOut = `The entered number(${num1}) is out of the range ${rangeStart} and ${rangeEnd}`;
} else {
    textOut = `The entered number(${num1}) is in the range ${rangeStart} and ${rangeEnd}`;
}
console.log(textOut);

// Task 3
// Write to console number sequence (console.log):
// 0, 2, 4, 6, 8, 10
let seqNumber = 0;
while (seqNumber <= 10) {
    if (seqNumber % 2 == 0) {
        console.log(seqNumber);
    }
    seqNumber++;
    //prompt(`${seqNumber}`);
}

// Task 4
// Write to console number sequence (console.log):
// 1, 3, 5, 7, 9
seqNumber = 0;
while (seqNumber <= 10) {
    if (seqNumber % 2 !== 0) {
        console.log(seqNumber);
    }
    seqNumber++;
    //prompt(`${seqNumber}`);
}

// Task 5
// Write a user login application.
// Information about task is here: https://javascript.info/task/check-login
let loginName = prompt("Who is there?");
let pwd = "";
if (loginName == "" || loginName == null) {
    alert("Cancelled");
} else {
    if (loginName == "Admin") {
        pwd = prompt("Enter the password:");
        if (pwd == "TheMaster") {
            alert("Welcome!");
        } else {
            alert("Wrong password");
        }
    } else {
        alert("I don’t know you");
    }
}
