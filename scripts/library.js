let myLibrary = [];
let bookCaseUp = document.querySelector('#read');
let bookCaseDown = document.querySelector('#unread');

const addBookButton = document.querySelector('#add-book-button');

function openForm() {

    let formContainer = document.querySelector('#add-book-form-container');
    let form = document.querySelector('#add-book-form');
    let submitButton = document.querySelector('#submit-button');

    formContainer.hidden = false;
    submitButton.addEventListener('click', function(event) {

        let author = form.elements['author'].value;
        let title = form.elements['title'].value;
        let pages = form.elements['no-of-pages'].value;
        let read = form.elements['read'].value == 'true' ? true : false;

        let newBook = new Book(author, title, pages, read);
        addBookToLibrary(newBook);

        formContainer.hidden = true;
    })
}

function Book(author, title, pages, read) {

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {

    myLibrary.push(book);
    
    for (let i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
    
    let currentBook = document.createElement('div');
    currentBook.className = 'book';
    currentBook.innerText = book.title;
    currentBook.id = myLibrary.length-1;
    
    if (book.read == true) {
        bookCaseUp.appendChild(currentBook);
    } else {
        bookCaseDown.appendChild(currentBook);
    }

    currentBook.addEventListener('click', yell)

}

function yell(e) {
    //console.log(e.target.id)
    let bookDetails = document.querySelector('#book-details');

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    let title = document.querySelector('#book-title');
    let author = document.querySelector('#book-author');
    let pages = document.querySelector('#book-pages');
    let read = document.querySelector('#book-read');

    title.innerText = myLibrary[e.target.id].title;
    author.innerText = myLibrary[e.target.id].author;
    pages.innerText = myLibrary[e.target.id].pages;
    read.innerText = myLibrary[e.target.id].read;

    bookDetails.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        bookDetails.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == bookDetails) {
            bookDetails.style.display = "none";
        }
    }
    
}

function displayBooksInLibrary() {

    for (let i=0; i<myLibrary.length; i++) {

        let currentBook = document.createElement('div');
        currentBook.className = 'book';
        currentBook.innerText = myLibrary[i].title;
        currentBook.id = i;

        if (myLibrary[i].read == true) {
            bookCaseUp.appendChild(currentBook);
        } else {
            bookCaseDown.appendChild(currentBook);
        }
        
    }
}

addBookButton.addEventListener('click', openForm);

function start() {

    for (i=1;i<4;i++) {

        let author = 'Blank'
        let title = String(i);
        let pages = 4;
        let read = true;
        
        let sampleBook = new Book(author, title, pages, read);
    
        myLibrary.push(sampleBook);
    }

    displayBooksInLibrary();

    let books = document.querySelectorAll('.book');

    books.forEach((book) => {
        book.addEventListener('click', yell);
    })
}

start();
