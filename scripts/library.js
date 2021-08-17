let myLibrary = ['Book A', 'Book B', 'Book C'];
let bookCase = document.querySelector('#book-case');


const addBookButton = document.querySelector('#add-book-button');

function openForm() {

    let formContainer = document.querySelector('#add-book-form-container');
    let form = document.querySelector('#add-book-form');
    let submitButton = document.querySelector('#submit-button');

    formContainer.hidden = false;
    submitButton.addEventListener('click', function(event) {

        addBookToLibrary(form.elements['title'].value);
    })
}

// function Book() {

// }

function addBookToLibrary(book) {

    myLibrary.push(book);
    
    for (let i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
    
    let currentbook = document.createElement('div');
    currentbook.innerText = book;
    currentbook.style['border'] = 'solid';
    currentbook.style['height'] = '50px';
    currentbook.style['width'] = '100px';
    currentbook.style['float'] = 'left';
    bookCase.appendChild(currentbook);

}

function displayBooksInLibrary() {

    for (let i=0; i<myLibrary.length; i++) {

        let currentBook = document.createElement('div');
        currentBook.innerText = myLibrary[i];
        currentBook.style['border'] = 'solid';
        currentBook.style['height'] = '50px';
        currentBook.style['width'] = '100px';
        currentBook.style['float'] = 'left';
        bookCase.appendChild(currentBook);
        //console.log(myLibrary[i]);
    }
}

addBookButton.addEventListener('click', openForm);

displayBooksInLibrary();