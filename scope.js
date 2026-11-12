//variable scope and definition

//2 different types of scope (technically 3)

//---Function Scope
//---Block Scope
//---Global Scope (By default)

//Keywords to declare a variable
/*
    var - Function Scope
    let - Block Scope
    const - Block Scope
*/


//what is a scope ?
// Scope is the area of code in which a variable is relevant
// Commonly defined by curly brackets
// Most commonly used by if/else, loops, and functions

var name = 'jack';

function printName() {
    var name = 'John';
    console.log(name); // John
}

printName();
console.log(name); // jack

var name = 'jack';

if(true){
    var name = "John";
    console.log(name) // John
}

// printName();
console.log(name); // John

//Use function-scoped deeclaration: let and const

let fruit="Apple"

if (true){
    let fruit = "Banana";
    console.log(fruit)
}
  console.log(fruit)

  //the dirrerent between var + let vs const = const, cannot reasign the variable

//   const car = 'Toyota';
// car = 'Honda'; // Uncaught TypeError: Assignment to constant variable.


const car = 'Toyota';

if (true) {
    const car = 'Honda';
    console.log(car); // Honda
    if(true){
        // const car = "Mazda"
        console.log(car)
    }
}


console.log(car); // Toyota

const ball = ["volleyball", "basketball", "football"]

ball.push("american football")

console.log(ball)