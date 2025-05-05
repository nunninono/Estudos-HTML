// Restart Button
let restart = document.querySelector("#b");

// Grab All The Squares
let squares = document.querySelectorAll("td");

// Clear All The Squares
function clearBoard() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

restart.addEventListener("click", clearBoard);

// Check The Square Marker

let cellOne = document.querySelector("#one");
let cellTwo = document.querySelector("#two");
let cellThree = document.querySelector("#three");
let cellFour = document.querySelector("#four");
let cellFive = document.querySelector("#five");
let cellSix = document.querySelector("#six");
let cellSeven = document.querySelector("#seven");
let cellEight = document.querySelector("#eight");
let cellNine = document.querySelector("#nine");

// For Loop To Add Event

/* SIMPLE WAY
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }
    else if (this.textContent === 'X') {
        this.textContent = 'O';
    }
    else {
        this.textContent = '';
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
*/

cellOne.addEventListener("click", function(){   
    if (cellOne.textContent === '') {
        cellOne.textContent = 'X';
    }
    else if (cellOne.textContent === 'X') {
        cellOne.textContent = 'O';
    }
    else {
        cellOne.textContent = '';
    }
})

cellTwo.addEventListener("click", function(){   
    if (cellTwo.textContent === '') {
        cellTwo.textContent = 'X';
    }
    else if (cellTwo.textContent === 'X') {
        cellTwo.textContent = 'O';
    }
    else {
        cellTwo.textContent = '';
    }
})

cellThree.addEventListener("click", function(){   
    if (cellThree.textContent === '') {
        cellThree.textContent = 'X';
    }
    else if (cellThree.textContent === 'X') {
        cellThree.textContent = 'O';
    }
    else {
        cellThree.textContent = '';
    }
})

cellFour.addEventListener("click", function(){   
    if (cellFour.textContent === '') {
        cellFour.textContent = 'X';
    }
    else if (cellFour.textContent === 'X') {
        cellFour.textContent = 'O';
    }
    else {
        cellFour.textContent = '';
    }
})

cellFive.addEventListener("click", function(){   
    if (cellFive.textContent === '') {
        cellFive.textContent = 'X';
    }
    else if (cellFive.textContent === 'X') {
        cellFive.textContent = 'O';
    }
    else {
        cellFive.textContent = '';
    }
})

cellSix.addEventListener("click", function(){   
    if (cellSix.textContent === '') {
        cellSix.textContent = 'X';
    }
    else if (cellSix.textContent === 'X') {
        cellSix.textContent = 'O';
    }
    else {
        cellSix.textContent = '';
    }
})

cellSeven.addEventListener("click", function(){   
    if (cellSeven.textContent === '') {
        cellSeven.textContent = 'X';
    }
    else if (cellSeven.textContent === 'X') {
        cellSeven.textContent = 'O';
    }
    else {
        cellSeven.textContent = '';
    }
})

cellEight.addEventListener("click", function(){   
    if (cellEight.textContent === '') {
        cellEight.textContent = 'X';
    }
    else if (cellEight.textContent === 'X') {
        cellEight.textContent = 'O';
    }
    else {
        cellEight.textContent = '';
    }
})

cellNine.addEventListener("click", function(){   
    if (cellNine.textContent === '') {
        cellNine.textContent = 'X';
    }
    else if (cellNine.textContent === 'X') {
        cellNine.textContent = 'O';
    }
    else {
        cellNine.textContent = '';
    }
})