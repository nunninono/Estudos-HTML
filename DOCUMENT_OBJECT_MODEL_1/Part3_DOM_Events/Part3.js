// Declarando as variáveis
let headOne = document.querySelector("#one");
let headTwo = document.querySelector("#two");
let headThree = document.querySelector("#three");
let clickedTwo, clickedThree = false;


// Declarando os eventos do headOne
headOne.addEventListener("mouseover", function(){
    headOne.textContent = "Mouse Currently Over";
    headOne.style.color = "red";
})

headOne.addEventListener("mouseout", function(){
    headOne.textContent = "HOVER OVER ME!";
    headOne.style.color = "black"; 
})

// Declarando os eventos do headTwo
headTwo.addEventListener("click", function(){
    if (!clickedTwo) {
        headTwo.textContent = "CLICKED ON!";
        headTwo.style.color = "blue";
        clickedTwo = true;
    } 
    else {
        headTwo.textContent = "CLICK ME!";
        headTwo.style.color = "black";
        clickedTwo = false;
    }
})


// Declarando os eventos do headThree
headThree.addEventListener("dblclick", function(){
    if (!clickedThree) {
        headThree.textContent = "I WAS DOUBLE CLICKED!";
        headThree.style.color = "red";
        clickedThree = true;
    }
    else {
        headThree.textContent = "DOUBLE CLICK ME!";
        headThree.style.color = "black";
        clickedThree = false;
    }
})