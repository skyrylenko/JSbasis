'use strict'
// Task 1
// Add inline style to even children inside grid-1.
// Inline style property background with value #aff0ad
const gridId = document.getElementById("grid-1");

for (let node of gridId.children) {
    //console.log(node);
    //console.log(inc);
    node.style.background = "#aff0ad";
}

// Task 2
// Add class grid-item-background to odd children inside grid-1.
let inc = 0;
for (let node of gridId.children) {
    inc++;
    //console.log(node);
    console.log(inc);
    if (inc % 2 == 0) {
        node.classList.toggle("grid-item-background");
        //node.innerHTML = '<div class="grid-item-background"></div>';
    }
}
// Task 3
// Read text from prompt and add this text to element .text-placeholder
// To insert text use:
// element.innerText = 'Some text';
// If the text contains substring '1', add class numeric to the .text-placeholder element

const txtFormPrompt = prompt();
//console.log(txtFormPrompt);

//const placeHolder = document.getElementsByClassName('text-placeholder');
//const placeHolder = document.getElementsByTagName('p');
const placeHolder = document.querySelector(".text-placeholder");

placeHolder.innerText = txtFormPrompt;
if (txtFormPrompt.includes("1")) {
    placeHolder.classList.add("numeric");

}
console.log(placeHolder);
// placeHolder.innerText = txtFormPrompt;
//document.getElementsByClassName('text-placeholder').innerText = "sfsdfprompt";
//element.classList.toggle("number");



