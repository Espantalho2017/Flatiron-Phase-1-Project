
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
  document.getElementById("create-link-budget-form").addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault() ;
  // use Event.preventDefault() to 
  // prevent the default action of the "submit" event from occuring
  console.log(e.target) ;

  // below are the input values for the Transmit side of the LB Form
  const txFrequency = e.target["tx-frequency"].value
  const txAntennaDiameter = e.target["tx-antenna-diameter"].value
  const txApertureEfficiency = e.target["tx-aperture-efficiency"].value
  const txPower = e.target["tx-power"].value
  const txRange = e.target["tx-range"].value
  const txBandwidth = e.target["tx-bandwidth"].value
  const rxGT = e.target["rx-g-over-t"].value  

  console.log(txFrequency, txAntennaDiameter, txApertureEfficiency, 
    txPower, txRange, txBandwidth, rxGT) ;
  // this function maybe  needs to return values in an array/object

  // below are the input values for the Receive side of the LB Form
  const rxFrequency = e.target["rx-frequency"].value
  const rxAntennaDiameter = e.target["rx-antenna-diameter"].value
  const rxApertureEfficiency = e.target["rx-aperture-efficiency"].value
  const lnaNoiseTemp = e.target["lna-noise-temp"].value
  const txEIRP = e.target["tx-eirp"].value
  const rxRange = e.target["rx-range"].value
  const rxBandwidth = e.target["rx-bandwidth"].value

  console.log(rxFrequency, rxAntennaDiameter, rxApertureEfficiency, 
    lnaNoiseTemp, txEIRP, rxRange, rxBandwidth) ;
  // this function maybe needs to return values in an array/object

  // below is a holdover until link margin calculations are added
  // link margin calculations will require multiple functions doing math
  const linkBudgetCalculation = document.getElementById('linkBudgetCalculation');
  const h2 = document.createElement('h2');
    h2.innerText = `Link Margin is ${txFrequency} until site is upgraded` ;
    linkBudgetCalculation.appendChild(h2);
}


// Below is code to Fetch Link Budget Cards from BackEnd Database

console.log("Hello Roscoe") ;

function fetchCards () {
  fetch("http://localhost:3000/telecom-systems")
  .then((resp) => resp.json())
  .then((cardsArray) => {
    console.log(cardsArray) ;
    displayCards(cardsArray) ;
   const divCardsContainer = document.getElementById('cardInfo');
   cardsArray.forEach(card => {
    const h2 = document.createElement('h2');

})
  }
    );
}

function displayCards(cardsArray) {
  console.log(cardsArray) ;
  const divCardsContainer = document.getElementById('cardInfo');
  cardsArray.forEach(card => {
    const tableHead = document.createElement('h2');
    // h2 tag for now; in future title row of cards to display as Table Head
    tableHead.innerText = [card.radioLinkType , ' ',
                    card.inputValue , '   ',
                    card.inputValueUnits] ;
    divCardsContainer.appendChild(tableHead);

}
)
}

// Below is code for button click event to Fetch LB Cards from BackEnd Database

  const cardsButton = document.getElementById('cardsButton')
  console.log(cardsButton) ;
  cardsButton.addEventListener('click', fetchCards);

console.log("roscoe");



  