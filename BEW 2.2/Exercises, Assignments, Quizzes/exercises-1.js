// 1. .map() method and Arrow Functions

// You are given an array of numbers. Use the .map() method and arrow function syntax to return a new array where every number is squared.

// Expected Input
// const numbers = [1, 2, 3, 4, 5];
// Expected Output
// [1, 4, 9, 16, 25]

// Submit your code here

const numbers = [1, 2, 3, 4, 5]
const numbersissquared = numbers.map(num => num * num)
console.log(numbersissquared)


// 2..filter() method and Arrow Functions

// Given the same array of numbers, use the .filter() method and arrow function syntax to return a new array that only contains numbers greater than 2.

// Expected Input
// const numbers = [1, 2, 3, 4, 5];
// Expected Output
// [3, 4, 5]
// Submit your code here

const numbers2 = numbers.filter(num => num > 2)

console.log(numbers2)

// 3. .forEach() method and Arrow Functions

// Use the .forEach() method and arrow function syntax to console log each number from the original numbers array.
// Expected Input
// const numbers = [1, 2, 3, 4, 5];
// Expected Output
// 1
// 2
// 3
// 4
// 5
// Submit your code here

numbers.forEach((num) => console.log(num));

// 4. .find() method and Arrow Functions

// Use the .find() method and arrow function syntax to find the first number in the array that is divisible by 3.

// Expected Input
// const numbers = [1, 2, 3, 4, 5, 6];
// Expected Output
// 3
// Submit your code here

const result = numbers.find((num) => num % 3 === 0);

console.log(result)

// 5. Chaining Methods

// Use a combination of .filter() and .map() to return a new array that contains the squares of the numbers greater than 2.

// Expected Input
// const numbers = [1, 2, 3, 4, 5];
// Expected Output
// [9, 16, 25]

// Submit your code here

const numbers3 = numbers.filter( num => num > 2 ) .map(num => num ** 2)

console.log(numbers2)



