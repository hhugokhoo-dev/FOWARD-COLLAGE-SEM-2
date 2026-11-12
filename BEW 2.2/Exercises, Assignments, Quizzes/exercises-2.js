// We have a list of books, with each book having a title, author, and ratings (a number between 1 to 5).

// 1. .filter() and Arrow Functions

// Using the .filter() method and arrow functions, return an array of books with a ratings value of greater than 4.
// Submit your code here

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];


const highrated = books.filter( (books) => books.ratings > 4 ) 
console.log(highrated)



// 2. .map() method and Arrow Functions

// Using the .map() method and arrow functions, create a new array that contains the titles of all the books.

// Expected output:
// [ "The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "Moby-Dick" ]
// Submit your code here


const allTitlesbook = books.map((books) => books.title)
console.log(allTitlesbook)


// 3. .find() method and Arrow Functions

// Using the .find() method and arrow functions, find the book that has the title '1984' and return the full book object.

// Expected output:
// { title: '1984', author: 'George Orwell', ratings: 4.7 }
// Submit your code here


const titleWithyear = books.find((books) => books.title === '1984')
console.log(titleWithyear)


//  4. .sort() method and Arrow Functions

// Using the .sort() method and arrow functions, return a new array that sorts the books by their ratings in descending order.
// Submit your code


const sortedBooks = [...books].sort((a, b) => b.ratings - a.ratings);

console.log(sortedBooks);


// 5. Chaining Methods

// Using a combination of array methods, find the title of the book with the highest ratings.

// Expected output:
// The Great Gatsby
// Submit your code

const highestRated = [...books].sort((a, b) => b.ratings - a.ratings) .map((book) => book.title) [0]

console.log(highestRated)