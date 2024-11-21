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
