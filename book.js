// Library Data Structure

let myLibrary = [];


// Book data structure

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

// Class & Model Functions

function toggleBookForm() {
  document.querySelector('#newBookForm').classList.toggle('hide');
}

function deleteBook(element) {
  let bookCard = element.parentNode;
  myLibrary.splice(bookCard.dataset.libraryIndex, 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  renderBookList();
}

function readBook(element) {
  let bookCard = element.parentNode;
  myLibrary[bookCard.dataset.libraryIndex].toggleReadBook();
  renderBookList();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Using local storage now, can be adjusted to use a database in the future
// Functionality should be split out to make it easy to change
function populateMyLibrary() {
  if(localStorage.getItem('myLibrary')) {
    JSON.parse(localStorage.getItem('myLibrary')).forEach((book) => {
      libraryBook = new Book(book.title, book.author, book.pages, book.read);
      myLibrary.push(libraryBook);
    })
  } else {
    console.log('Adding fake book');
    fakeLibrary();
  }
}

// Initialization

function init() {
  populateMyLibrary();
  renderBookList();
}

// Event Handlers

function addEventHandlers() {
  renderBookFormHandler();
  addBookHandler();
  deleteBookHandlers();
  readBookHandlers();
}

function addBookHandler() {
  let form = document.getElementById('newBookForm');
  form.onsubmit = () => {
    book = new Book(form.elements.title.value, form.elements.author.value, form.elements.pages.value, form.elements.read.value)
    addBookToLibrary(book);
  }
}

function deleteBookHandlers() {
  let deleteBookButtons = document.querySelectorAll('.delete-book');
  deleteBookButtons.forEach((element) => {
    element.onclick = () => deleteBook(element);
  });
}

function readBookHandlers() {
  let readBookButtons = document.querySelectorAll('.read-book');
  readBookButtons.forEach((element) => {
    element.onclick = () => readBook(element);
  });
}

function renderBookFormHandler() {
  const newBookFormButton = document.querySelector('#newBookFormButton');
  newBookFormButton.onclick = () => toggleBookForm();
}

// Rendering

function renderBookList() {
  let bookList = document.querySelector('.book-list');
  bookList.innerHTML = myLibrary.map((book, index) => {
    // Would like to clean this up, pass a template in instead of this long string
    return '<div class="book-card" data-library-index="' + index + '"><div class="book-info">' + book.info() + '</div><button class="read-book">' + (!book.read ? "I've read this book" : "I haven't read this book") +'</button><button class="delete-book">Remove book from my library</button></div>';
  }).join('');
  addEventHandlers();
}

// Test functionality

function fakeLibrary() {
  const myBook = new Book('Moby Dick', 'Herman Melville', 585, false);
  const myBook2 = new Book('Moby Dick2', 'Herman Melville', 585, false);
  const myBook3 = new Book('Moby Dick3', 'Herman Melville', 585, false);
  const myBook4 = new Book('Moby Dick4', 'Herman Melville', 585, false);
  addBookToLibrary(myBook);
  addBookToLibrary(myBook2);
  addBookToLibrary(myBook3);
  addBookToLibrary(myBook4);
}

// Running the program
init();