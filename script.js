//Initialize library array

const myLibrary = [];

//Create initial books

let book1 = new Book("Harry Potter", "JK Rowling", 435, true);
let book2 = new Book("The Awakening", "L.J Smith", 256, false);
let book3 = new Book("The Struggle", "L.J Smith", 304, false);
let book4 = new Book("The Fury", "L.J Smith", 256, false);

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

function addBookToLibrary() {
    // do stuff here
  }





console.log(harryPotter.bookInfo());