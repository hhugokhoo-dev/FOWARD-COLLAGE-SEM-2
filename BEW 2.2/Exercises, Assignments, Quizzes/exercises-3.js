// 1.Destructuring Assignment

// Here is an object representing a student:



const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

// Your task is to:
// Use destructuring assignment to create variables id, name, and courses from the student object.
// Use destructuring to create variables father and mother from the parents object inside student.

// Expected output:
// console.log(id); // 101
// console.log(name); // John Doe 
// console.log(father); // Mr. Doe


const { id , name, courses } = student 

const { father, mother} = student.parents
console.log(id); 
console.log(name); 
console.log(father);


// 2. Spread Operator

// Here are two arrays:

const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];

// Your task is to:
// Use the spread operator to create a new array arr3 that includes all elements from arr1 and arr2.
// Create a new array arr4 that is a copy of arr1 using the spread operator.

const arr3 = [...arr1,...arr2]
const arr4 = [...arr1]

console.log(arr3)
console.log(arr4)

// 3. Destructuring and Spread Together

// Here is an array of numbers:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Your task is to:
// Use destructuring assignment and the spread operator to create two new arrays: firstHalf and secondHalf where firstHalf includes the first five numbers and secondHalf includes the last four numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [n1, n2, n3, n4, n5, ...secondHalf] = numbers;
const firstHalf = [n1, n2, n3, n4, n5];

console.log(firstHalf);
console.log(secondHalf);


// 4. Spread Operator with Functions

// Here is a function that takes three numbers and returns their sum:

// const number = [ 1, 2, 3 ];

// function sum(a, b, c) {
//     return a + b + c;
// }

// Your task is to:
// Call the sum function with the array [1, 2, 3] as arguments using the spread operator.

const number = [ 1, 2, 3 ];

function sum(a, b, c) {
return a + b + c;
}

const listotalsum = sum(...number)
console.log(listotalsum) 
