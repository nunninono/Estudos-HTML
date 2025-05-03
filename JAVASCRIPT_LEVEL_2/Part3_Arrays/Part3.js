var countries = ["USA", "Germany", "China"];

countries[2] = "France";

var mixed = [true, 20, "string"];

// nome da variavel.length  pra sabre o tamanho do vetor/array

var myarray = ["one", "two", "three"];

var lastItem = myarray.pop();   // Remover valor do array ( .pop() )

myarray.push("four");   // Add valor no array ( .push() )


// usa-se for ou while pra printar em formato matriz
var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function printArray1 () {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++){
            console.log(matriz[i][j]);
        }
    }
}

function printArray2 () {
    for (var i = 0; i < 3; i++) {
        console.log(matriz[i].join(' '));
    }
}