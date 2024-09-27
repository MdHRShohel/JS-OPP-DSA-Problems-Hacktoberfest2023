class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  viewBooks() {
    if (this.books.length === 0) {
      console.log("The library is empty.");
    } else {
      console.log("Library Books:");
      this.books.forEach((book) => {
        console.log(`${book.title} by ${book.author} (ISBN: ${book.ISBN})`);
      });
    }
  }
}

const library = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0-395-07122-7");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0-06-112008-9");

library.addBook(book1);
library.addBook(book2);

library.viewBooks();
library.removeBook("978-0-395-07122-7");

library.viewBooks();
