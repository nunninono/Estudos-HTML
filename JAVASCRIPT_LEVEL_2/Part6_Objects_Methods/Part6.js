let simple = {
    prop: "Hello",
    myMethod: function() {
        console.log("The myMethod was called");
    }
}

// Como printar o metodo
console.log(simple.myMethod);

// como chamar?
simple.myMethod();

let myObj = {
    name: "Nunno",
    greet: function() {
        console.log("Hello" + this.name);
    }
}

myObj.greet()     // -> Hello Nunno 