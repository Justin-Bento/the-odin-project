class Library {
  constructor() {
    this.myLibrary = []; // Manage library as a class property
  }
  addBookToLibrary(book) {
    this.myLibrary.push(book);
  }
  createBookElement(book) {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} - ${this.getBookStatus(book)}`;
    return li;
  }
  getBookStatus(book) {
    return book.pagesRead === book.numberOfPages ? "Completed" : `Reading (${book.pagesRead}/${book.numberOfPages})`;
  }
  displayLibrary() {
    const body = document.body;
    const ul = document.createElement("ul");

    this.myLibrary.forEach((book) => {
      const li = this.createBookElement(book);
      ul.appendChild(li);
    });

    body.appendChild(ul);
  }
}

// Example Usage:
const myLibrary = new Library();
const book1 = { title: "The Big Short", author: "Michael Lewis", numberOfPages: 94, pagesRead: 94 };
const book2 = { title: "Atomic Habits", author: "James Clear", numberOfPages: 235, pagesRead: 235 };
const book3 = { title: "Animal Farm", author: "George Orwell", numberOfPages: "235", pagesRead: "235" };
const book4 = { title: "Brave New World", author: "Aldous Huxley", numberOfPages: "187", pagesRead: "187" };
const book5 = { title: "What Every Body Is Saying", author: "Joe Navarro", numberOfPages: "187", pagesRead: "187" };
const book6 = { title: "Writing For The Web", author: "Crawford Kilian", numberOfPages: "", pagesRead: "" };
const book7 = { title: "The Design of Everyday Things", author: "Don Norman", numberOfPages: "347", pagesRead: "347" };
const book8 = { title: "Refactor UI", author: "James Clear", numberOfPages: "", pagesRead: "" };

myLibrary.addBookToLibrary(book1);
myLibrary.addBookToLibrary(book2);
myLibrary.addBookToLibrary(book3);
myLibrary.addBookToLibrary(book4);
myLibrary.addBookToLibrary(book5);
myLibrary.addBookToLibrary(book6);
myLibrary.addBookToLibrary(book7);
myLibrary.addBookToLibrary(book8);
myLibrary.displayLibrary();
