const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  function isRead(){
    this.read != this.read;
  }

  function bookInfo(){
    return(this.title,this.author,this.pages,this.read);
  }

}

function addBookToLibrary() {
  // do stuff here
}