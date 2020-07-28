'use strict'
// Task 1
// Add functionality to open and close popup.

// Click on #openPopupButton opens popup
// Click on #closePopupButton closes popup
// Click on Escape button closes popup
// To open popup, add class visible

// P.S. event.key equals Escape if this button is pressed
const openButton = document.getElementById("openPopupButton");
//const closeButton = document.getElementsByClassName('popup');
const closeButton = document.getElementsByTagName('section')[0];
//or
//const closeButton = document.querySelector('.popup');

function handler() {
    closeButton.classList.toggle('visible');
}
function handleKeyUp() {
    if (event.key === "Escape") {
        closeButton.classList.toggle('visible');
    }
}

openButton.addEventListener('click', handler)

openButton.addEventListener('keyup', handleKeyUp)

closeButton.addEventListener('click', handler)



