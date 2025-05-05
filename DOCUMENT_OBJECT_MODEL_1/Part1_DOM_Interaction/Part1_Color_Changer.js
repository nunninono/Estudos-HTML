// Atribuindo uma parte do codigo a sua variável
let myheader = document.querySelector("h1")

console.log(myheader)    // -> <h1>This is the header</h1>
        
myheader.style.color = "red"

console.log(myheader)    // -> <h1 style="color: red;">This is the header</h1>

// Changing color code
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

// Simple function for clarity
function changeHeaderColor() {
    let colorInput = getRandomColor();
    myheader.style.color = colorInput;
}

// Now perform the action over intervals (milisseconds)
setInterval("changeHeaderColor()", 1000);