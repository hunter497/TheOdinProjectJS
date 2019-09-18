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
    return '<div class="book-card"><div class="book-info">' + book.info() + '</div><button class="delete-book">Remove Book</button></div>';
  }).join('');
}

function toggleBookForm() {
  document.querySelector('#newBookForm').classList.toggle('hide');
}

function deleteBook() {
  // Delete book here, need to look at the parent of the book button I clicked on, and remove that parent book card and nothing else
}

const newBookFormButton = document.querySelector('#newBookFormButton');
newBookFormButton.onclick = () => toggleBookForm();

const deleteBookButton = document.querySelector('.delete-book');
deleteBookButton.onclick = () => deleteBook();

const myBook = new Book('Moby Dick', 'Herman Melville', 585, false);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
renderBookList();