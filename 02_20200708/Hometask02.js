//Task 1
//User inputs 2 numbers (via prompt). Show the sum of these numbers in alert
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let result = +num1 + +num2;
let textOut = ` Sum of ${num1} and ${num2} = ${result}`;
//console.warn(textOut);
alert(textOut);

//Task 2
//User inputs their full name. Show alert with welcome message.
const welcomeMessage = "Hello, ";
let fullName = prompt("Enter your Full Name :");
textOut = welcomeMessage + fullName;
alert(textOut);

//Task 3
//User inputs a number. Show remainder of the division by 2.
let numForDivision = prompt("Enter the number:");
let divTwo = +numForDivision % 2;
textOut = `Division of 2 from ${numForDivision} is ${divTwo}`;
alert(textOut);

// Task 4
// User inputs a float number. Show value before dot and after dot.
let inputFloat = prompt("Enter a float:");
let floatNum = parseFloat(inputFloat);
let beforeDot = Math.floor(floatNum);
let afterDot = (floatNum % 1).toPrecision(3) * (10 ** 3);
textOut = `Inputs: ${inputFloat}. Before "." -> ${beforeDot}. After "." -> ${afterDot} `;
alert(textOut);
