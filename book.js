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

   toggleReadBook() {
     this.read = !this.read;
   }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function renderBookList() {
  let bookList = document.querySelector('.book-list');
  bookList.innerHTML = myLibrary.map((book, index) => {
    // Would like to clean this up, pass a template in instead of this long string
    return '<div class="book-card" data-library-index="' + index + '"><div class="book-info">' + book.info() + '</div><button class="read-book">Read Book</button><button class="delete-book">Remove Book</button></div>';
  }).join('');

  let deleteBookButtons = document.querySelectorAll('.delete-book');
  deleteBookButtons.forEach((element) => {
    element.addEventListener("click", () => deleteBook(element));
  });

  let readBookButtons = document.querySelectorAll('.read-book');
  readBookButtons.forEach((element) => {
    element.addEventListener("click", () => readBook(element));
  });
}

function toggleBookForm() {
  document.querySelector('#newBookForm').classList.toggle('hide');
}

function deleteBook(element) {
  let bookCard = element.parentNode;
  myLibrary.splice(bookCard.dataset.libraryIndex, 1);
  renderBookList();
}

function readBook(element) {
  let bookCard = element.parentNode;
  myLibrary[bookCard.dataset.libraryIndex].toggleReadBook();
  renderBookList();
}

const newBookFormButton = document.querySelector('#newBookFormButton');
newBookFormButton.onclick = () => toggleBookForm();

const myBook = new Book('Moby Dick', 'Herman Melville', 585, false);
const myBook2 = new Book('Moby Dick2', 'Herman Melville', 585, false);
const myBook3 = new Book('Moby Dick3', 'Herman Melville', 585, false);
const myBook4 = new Book('Moby Dick4', 'Herman Melville', 585, false);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);
addBookToLibrary(myBook4);
renderBookList();