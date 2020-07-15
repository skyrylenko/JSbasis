'use strict'
// Task 1
// Tell if copying worked https://javascript.info/task/item-value
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
//alert(fruits.length); // 4

// Task 2
// https://javascript.info/array
// Array activities
// a)Create an array styles with items "Jazz" and "Blues" => ["Jazz", "Blues"]
let myArray = ["Jazz", "Blues"];
// b)Append “Rock-n-Roll” to the end => ["Jazz", "Blues", "Rock-n-Roll"]
//myArray.splice(2, 0, "Rock-n-Roll");
//myArray.concat(["Rock-n-Roll"]);
//or
myArray.push("Rock-n-Roll");
// c)Replace the value in the middle by “Classics” => ["Jazz", "Classics", "Rock-n-Roll"]
let idx = myArray.indexOf("Blues");
myArray.splice(idx, 1, "Classics");
// d)Prepend Rap and Reggae to the array => ["Rap", "Reggae", "Jazz", "Classics", "Rock-n-Roll"]
myArray.splice(0, 0, "Rap", "Reggae");

// Task 3
// Create a function getAverageAge(array) input: '15, 60, 45, 30' output: 37.5 use split() for string
// https://javascript.info/array-methods

const inputStr = "15, 60, 45, 30";
function getAverageAge(str) {
    let splitArray = str.split(", ");
    let len = splitArray.length;
    let splitArraySum = splitArray.reduce((accumulator, item) => accumulator + +item, 0);
    let result = splitArraySum / len;
    return result;
}

console.log(getAverageAge(inputStr));

// Task 4
// Filter items from range https://javascript.info/task/filter-range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns 
// an array of them.
// The function should not modify the array. It should return the new array.
let arr = [5, 3, 8, 1];

function filterRange(inArray, inNumFirst, inNumSecond) {
    let result = inArray.filter(item => (item >= inNumFirst && item <= inNumSecond));
    return result;
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)

// Task 5
// Get value without currency https://javascript.info/task/extract-currency
//https://javascript.info/string
const currChar = "$";
function extractCurrencyValue(currencyStr) {
    if (currencyStr.indexOf(currChar) == 0) {
        //let result = +currencyStr.slice(1);
        //let result = currencyStr.substring(1);
        //let result = currencyStr.substring(1, currencyStr.length);
        //let result = currencyStr.substr(1, currencyStr.length);
        //or
        let result = "";
        for (let i = 1; i < currencyStr.length; i++) {
            result = result + currencyStr[i];
        }
        return +result;
    } else {
        return "NaN";
    }
}

alert(extractCurrencyValue("$120") === 120); //true

// Task 6
// Make name right https://javascript.info/task/ucfirst
let inStr = prompt("Enter the string here:");

function ucFirst(str) {
    let firstChar = str[0].toUpperCase();
    let result = str[0].toUpperCase() + str.slice(1);
    return result;
}

alert(`${inStr} -> ${ucFirst(inStr)}`);