let carInfo = {make:"Toyota", year: 1990, model:"Camry"};

// Mostra todos os valores
console.log(carInfo);
    
// Print específico
console.log(carInfo["make"]);  

let myNewO = {a: "Hello", b: [1, 2, 3], c: inside['a', 'b']};

// saídas
console.log(myNewO['a']);    // -> "Hello"
console.log(myNewO['b']);    // -> [1, 2, 3]
console.log(myNewO['b'][1]);     // -> 2    
console.log(myNewO['c']['inside'][1]);   // -> "b"

// Mudar parametros

carInfo['year'] = 2006;
carInfo['year'] += 1;

console.dir(carInfo);   // Mostra de forma melhor p/ visualização (apenas para console)