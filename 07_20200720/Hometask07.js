//'use strict'
// Task 1
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi();// what will it show: "John" or "Pete"?
//It will show us "Hi, Pete"


// Task 2
// Rewrite function showMessage to the self-calling:

showUserInfo("Ivan", "Ivanenko");

function showUserInfo(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;

    (function showMessage() {
        console.log(fullName);
    }())

    //showMessage();
}

// Task 3
// Fix the code

(function () {
    console.info('init...');
}());

const user = { name: 'Ann', age: 54 };
const user2 = { ...user };
user2.age = 40;

user2.sayHi = () => console.log(`Hi from ${user2.name}`);

let userAges = [user, user2].map(item => item.age);
const oldestUserAge = Math.max(...userAges);