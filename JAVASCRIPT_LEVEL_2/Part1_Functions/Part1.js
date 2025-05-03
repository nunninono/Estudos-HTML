function helloWorld () {
    console.log("Hello World!");
}

function helloYou (name) {
    console.log("Hello "+name+"!");
}


// Essa função nao é boa, pois funciona para strings tambem
function addNum (num1, num2) {
    console.log(num1+num2);
}

function helloSomeone (name = "Frankie") {
    console.log("Hello "+name);
}

function formal (name = "Sam", title = "Sir") {
    return title+ " "+name;
}

function timesFive (num) {
    var result = num * 5;
    return result;
}