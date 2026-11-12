const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];


const highrated = books.filter( (books)  => books.ratings > 4 ) 
console.log(highrated)

const allTitlesbook = books.map((books) => books.title)
console.log(allTitlesbook)


const titleWithyear = books.find((books) => books.title === '1984')
console.log(titleWithyear)


//sort method 
const sortedBooks = [...books].sort((a, b) => b.ratings - a.ratings);
//     take two books to compare,two books name as a and b
//   a-b = from small to big , b-a is from big to small


console.log(sortedBooks);


const highestRated = [...books].sort((a, b)  => b.ratings - a.ratings) .map((book) => book.title) [0]
console.log(highestRated)