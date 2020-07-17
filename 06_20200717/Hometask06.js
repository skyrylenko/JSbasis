'use strict'
// Task 1
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Add object method sayHi. This method should log to console phrase 'Hello, from XXX' (XXX - user name)
//******
//let object = new Object();
let user = {};
user = {
    name: "John",
    surname: "Smith"
};
user.name = "Pete";

user.sayHi = function () {
    console.log(`Hello, from ${this.name}`)
}
user.sayHi();
console.table(user);


// Task 2
// Find average age for users

const users = [
    { name: 'Ivan', age: 35, gender: 'male' },
    { name: 'Ann', age: 33, gender: 'female' },
    { name: 'Jane', age: 40, gender: 'female' },
    { name: 'Alex', age: 20, gender: 'male' },
    { name: 'Sam', age: 52, gender: 'female' }
];

let userArray = [];
for (let i = 0; i < users.length; i++) {
    userArray.push(users[i].age);
    //console.log(users[i].age); //  age
}
let arraySum = userArray.reduce((accumulator, item) => accumulator + +item, 0);
let result = arraySum / userArray.length;
console.log(`The average age is ${result}`);


// Task 3
// Check for emptiness
// P.S. you can go through object with for...in or use Object.keys()

function isEmptyKey(obj) {
    let internalArray = Object.keys(obj);
    return (internalArray.length == 0) ? true : false;
}
function isEmptyFor(obj) {
    for (let keyValue in obj) {
        return false;
    }
    return true;
}
let schedule = {};
schedule["08:30"] = "wake up";
result = `First approach result with "for...in": ${isEmptyKey(schedule)}, the second one with "Object.key":${isEmptyFor(schedule)}. `;
alert(result);
// alert(isEmptyKey(schedule)); // true
// alert(isEmptyFor(schedule)); // true
//debugger;

// Task 4
// Multiply numeric properties by 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//multiplyNumeric(menu);
console.table(menu);
function multiplyNumeric(obj) {
    for (let keyValue in obj) {
        //console.log(keyValue);
        //console.log(menu[keyValue]);
        (typeof (obj[keyValue]) == "number") ? obj[keyValue] = obj[keyValue] * 2 : obj[keyValue];
    }
}
multiplyNumeric(menu);

console.table(menu);

// Task 5
// Create calculator
let calculator = {
    firstNum: 0,
    secondNum: 0,
    read: function (firstNum, secondNum) {
        this.firstNum = prompt("Enter the first number");
        this.secondNum = prompt("Enter the second number");
    },
    sum: function () {
        return +this.firstNum + +this.secondNum;
    },
    mul: function () {
        return +this.firstNum * +this.secondNum;
    }
};
//debugger;

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Task 6
// Create chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}

ladder.up().up().down().up().down().showStep(); // 1
