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

function addBookToLibrary() {
  // do stuff here
}
