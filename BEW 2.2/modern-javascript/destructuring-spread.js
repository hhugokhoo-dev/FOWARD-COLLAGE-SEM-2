// object destructuring

const students ={
    name: "John",
    age: 18,
    garde: "Diploma",
    parents:{
        father: "Mark Doe" ,
        mother: "Jane Doe"
    }
}
const name = students.name //simple way
const { age , garde } = students  // destructing

console.log(name)
console.log(age)
console.log(garde)

//nested destructing 


const { parents: { father, mother } } = students;
console.log(father);
console.log(mother);
//destructuring arrays 
const color = ['red', 'green' ,'blue']
const [firstColor, secondColor, thirdColor] = color 
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)

//destructuring function parameters 
function greetPerson({ name , age }) {
console.log(`Hello, ${name}, You are ${age} years old.`)

}
const person = {
name:"Jackie Chan ",
age: 67
}
greetPerson(person)


//wrote me the above function,it greetPersonDestrucing, do it the way without destructiring. the call of the function has to be the same ,
// only passing person as an entire object variable in.

const greetPersonDestrucing = (person) => {
    console.log(`Hello, ${person.name}. You are ${person.age} years old.`)

}
greetPersonDestrucing(person)


//Default value with destructuring 
const car = {
    brand: "Toyota",
    model:  "Camry",
    colour: "blue"

}
const {brand, model, colour = "black" } = car
console.log(colour)

//can do the same thing with array
const shoes =["Air Jordan", "Yeezy", "White Shoe"] 
const [firstShoe, secondShoe, thirdShoe = "Speedcat"] = shoes
console.log(thirdShoe)