'use strict'
// Task 0
// Task 0
// Log message Hello! to the console every 0.5 seconds.
// After 5 seconds stop this logging
const timerId = setInterval(() => console.log('Hello!'), 500);
setTimeout(() => clearInterval(timerId), 5000);

// Task 1
// Create validation for #userForm Validation rules:

// fields username and jobTitle should contain string value (min. 3, max 20 characters)
// field age should be a number from 0 to 115
// If the field has invalid value, add class invalid to this field
const form = document.querySelector('form');

form.addEventListener('change', function (event) {
    // get input which triggered event
    event.preventDefault();

    const input = event.target;
    // console.log(input.value);
    // console.log(event.target);
    // console.log(event.currentTarget);


});

form.addEventListener('submit', function (event) {
    // get input which triggered event
    event.preventDefault();

    const input = event.target;
    const data = new FormData(this);
    form.elements["username"].classList.remove("invalid");
    form.elements["age"].classList.remove("invalid");

    for (let value of data) {
        //console.log(name);
        //console.log(value);
        //console.log(input.target);
        //console.log(event.target);
        //console.log(event.currentTarget);


        if (value[0] == "username" && value[1].length < 3 || value[1].length > 20) {
            const el = form.elements["username"];
            el.classList.toggle("invalid");
        }
        if (value[0] == "age" && value[1] < 0 || value[1] > 115) {
            const el = form.elements["age"];
            el.classList.toggle("invalid");
        }
    }

});
