// PROBLEMA 1

let employee1 = {
    name: "Jhon Smith",
    job: "Programmer",
    age: 31,
    nameLength: function() {
        console.log(this.name.length);
    }
}

// chamada
employee1.nameLength();

// PROBLEMA 2

let employee2 = {
    name: "Jhon Smith",
    job: "Programmer",
    age: 31,
}
alert("Name is " + employee2.name + ", Job is " + employee2.job + ", Age is " + employee2.age);