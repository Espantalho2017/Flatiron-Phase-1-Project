
// Creating Link Budget Form versus Table to Input LB Values

// Form code help from Flatiron tasklister-mini-project lab
// lecture from Monica Gerard found in Slack on May 3 but dated 4-14
// helped with below code; 
// Monica says Single Purpose Functions used below makes code pretty

document.addEventListener("DOMContentLoaded", () => {
  addingMoreEventListeners();
});
// get the form and add an event listener
function addingMoreEventListeners() {
  // you can nest the 2 commands like below
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault() ;
  // use Event.preventDefault() to 
  // prevent the default action of the "submit" event from occuring
  console.log(e.target.value);
  const txFrequency = e.target["tx-input-frequency"].value
  const txAntennaDiameter = e.target["tx-antenna-diameter"].value
  const txApertureEfficiency = e.target["tx-aperture-efficiency"].value

  console.log(txFrequency, txAntennaDiameter, txApertureEfficiency) ;
  // this function probably needs to return values in an array/object
  // the console.log above is not showing, so function not invoked correctly
}


// Below is code to Fetch Link Budget Cards from BackEnd Database

console.log("Hello Roscoe") ;

// document.addEventListener('DOMContentLoaded', function() {
function fetchCards () {
  fetch("http://localhost:3000/telecom-systems")
  .then((resp) => resp.json())
  .then((cardsArray) => {
    console.log(cardsArray) ;
    displayCards(cardsArray) ;
   const divCardsContainer = document.getElementById('cardInfo');
   cardsArray.forEach(card => {
    const h2 = document.createElement('h2');
    // html display method used below needs improvement
 //   h2.innerText = [card.radioLinkType , '   ',
 //                   card.frequencyUpLink , '   ',
 //                   card.antennaDiameterUpLink] ;
 //   divCardsContainer.appendChild(h2);

})
  }
    );
}
// });

function displayCards(cardsArray) {
  console.log(cardsArray) ;
  const divCardsContainer = document.getElementById('cardInfo');
  cardsArray.forEach(card => {
    const h2 = document.createElement('h2');
    // html display method used below needs improvement
    h2.innerText = [card.radioLinkType , ' ',
                    card.inputValue , '   ',
                    card.inputValueUnits] ;
    divCardsContainer.appendChild(h2);

}
)
}

// Below is code for button click event to Fetch LB Cards from BackEnd Database

// const cardsButton = document.getElementById('cardsButton')
// console.log(cardsButton) ;
// cardsButton.addEventListener('click', fetchCards);

// function fetchButton() {
  document.addEventListener('DOMContentLoaded', fetchCards);
// } ;
// fetchButton() ;
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


  