let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function renderBookList() {
  let bookList = document.querySelector('.book-list');
  bookList.innerHTML = myLibrary.map(book => {
    return '<div class="book">' + book.info() + '</div>';
  }).join('');
}

function toggleBookForm() {
  document.querySelector('#newBookForm').classList.toggle('hide');
}

const newBookFormButton = document.querySelector('#newBookFormButton');
newBookFormButton.onclick = () => toggleBookForm();

const myBook = new Book('Moby Dick', 'Herman Melville', 585, false);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
renderBookList();