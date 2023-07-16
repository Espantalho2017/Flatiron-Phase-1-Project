
console.log("Hello Roscoe") ;

function fetchCards () {
  fetch("http://localhost:3000/telecom-systems")
  .then((resp) => resp.json())
  .then((cardsArray) => {
    console.log(cardsArray) ;
    displayCards(cardsArray) ;
  }
    );
}

function displayCards(cardsArray) {
  console.log(cardsArray) ;
  const main = document.querySelector('main');
  cardsArray.forEach(card => {
    const h2 = document.createElement('h2');
    // html display method used below needs improvement
    h2.innerHTML = [card.radioLinkType , '   ',
                    card.frequencyUpLink , '   ',
                    card.antennaDiameterUpLink] ;
    main.appendChild(h2);

}
)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchCards();
});

console.log("roscoe");

/*
// my code from fetch lab
// you did not need for booksObject = fetch , but Flatiron fetch lab
// assignment required that for npm test to give grade of PASS

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


  