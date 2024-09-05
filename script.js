
//Book object initialized

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? 'read' : 'not read yet';

  this.toggleRead = function(){
    this.read = !this.read;
  }

  this.bookInfo = function(){
    return(this.title,this.author,this.pages,this.read);
  }
}

//Create initial books

let book1 = new Book("Harry Potter", "JK Rowling", 435, true);
let book2 = new Book("The Awakening", "L.J Smith", 256, false);
let book3 = new Book("The Struggle", "L.J Smith", 304, false);
let book4 = new Book("The Fury", "L.J Smith", 256, false);
let book5 = new Book("The fast", "L.J Smith", 256, false);

//Initialize library array

const myLibrary = [book1,book2,book3,book4,book5];

//Display the books to content screen

function displayBooks(){
  const libraryContainer = document.getElementById('bookCards');
  libraryContainer.innerHTML = '';
  myLibrary.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');

    const title = document.createElement('p');
    title.classList.add("bookTitle");
    title.textContent = `${book.title}`;

    const author = document.createElement('p');

    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const isRead = document.createElement('p');
    isRead.textContent = `Read: ${book.isRead ? "Yes" : "No"}`;

    const bookButton = document.createElement("button");
    bookButton.classList.add("bookButton");
    bookButton.textContent = "Read";

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Delete";


    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(isRead);
    bookContainer.appendChild(bookButton);
    bookContainer.appendChild(removeButton);

    libraryContainer.appendChild(bookContainer);
  })
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function createBookCard(book, index){
    const card = document.createElement('div');
    card.className = 'card';
}

displayBooks();