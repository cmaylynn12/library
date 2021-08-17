let myLibrary = ['Book A', 'Book B', 'Book C'];

const addBookButton = document.querySelector('#add-book-button');

function openForm() {
    let form = document.querySelector('#form');

    form.hidden = false;
}

function addBookToLibrary() {

}

function displayBooksInLibrary() {

    for (let i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

addBookButton.addEventListener('click', openForm);
