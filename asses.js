// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
//     isAvailable: true },
//     { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
//     isAvailable: false },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
//     1866, isAvailable: true },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
//     isAvailable: false },
//     { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//     ];
function allBooks(books){
for(title in books){
    if (title===title)
    return title
}

}
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

console.log(allBooks(books))

//  2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(author){
const uthorName=[]   
// for(author in book){
    author.book.forEach(author => {
        return author.push(uthorName.shift())  
    });

   }
//    console.log(uthorName)

const book = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
console.log(uthorName)
getBooksByAuthor(author)
// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title){
    if(!title===title){
        return "book not found"
    }
    else if (title==title){
        return "true"
    }
    else{
        return "does not belong to the library"
    }

}
   
console.log(returnBook(title))
