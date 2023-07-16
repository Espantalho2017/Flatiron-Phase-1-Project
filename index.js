
console.log("Hello Roscoe") ;

fetch("http://localhost:3000/telecom-systems")
  .then((resp) => resp.json())
  .then((cardsArray) => {
    console.log(cardsArray) ;
    displayCards(cardsArray) ;
  }
    );

function displayCards(cardsArray) {
  console.log(cardsArray) ;
  // maybe make main the body tag in my existing index.html???
  const body = document.querySelector('body');
  cardsArray.forEach(card => {
    const h2 = document.createElement('h2');
    h2.innerHTML = card.name;
    body.appendChild(h2);

}
)
}
/*
// my code from fetch lab

function fetchBooks() {
  const booksObject = fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
  return booksObject ;
}
// To pass the tests, don't forget to return your fetch!
// it should call the second function, renderBooks(), 
// passing in the JSON-ified data as the argument.

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

*/


  