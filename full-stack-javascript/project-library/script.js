const myLibrary = [];

function Book(title, author, numberOfPages, pagesRead) {
  // the constructor..
  this.title = title; 
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.pagesRead = pagesRead;
  this.status = function() {
    if (this.pagesRead && this.numberOfPages === this.pagesRead) {
      return "completed";
    } else if (this.pagesRead === 0) {
      return "haven't read";
    } else {
      return "currently reading";
    }
  };
}

const book1 = new Book("The Big Short", "Michael Lewis", 264, 137);
const book2 = new Book("Atomic Habits", "James Clear", 253, 253);
const book3 = new Book("Animal Farm", "George Orwell", 94, 94);
const book4 = new Book("Brave New World", "Aldous Huxley", 235, 0); //235
const book5 = new Book("What Every Body Is Saying", "Joe Navarro", 235, 0); //235
const book6 = new Book("Writing For The Web", "Crawford Kilian", 187, 187);
const book7 = new Book("The Design of Everyday Things", "Don Norman", 347, 347);

function addBookToLibrary() {
  // do stuff here
}
