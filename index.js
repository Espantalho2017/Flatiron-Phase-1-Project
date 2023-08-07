
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
  const transmitEIRP = e.target["tx-eirp"].value
  const rxRange = e.target["rx-range"].value
  const rxBandwidth = e.target["rx-bandwidth"].value

  console.log(rxFrequency, rxAntennaDiameter, rxApertureEfficiency, 
    lnaNoiseTemp, transmitEIRP, rxRange, rxBandwidth) ;
  // this function maybe needs to return values in an array/object

  // below is a holdover until link margin calculations are added
  // link margin calculations will require multiple functions doing math

    const gain = txGain(txFrequency, txAntennaDiameter, txApertureEfficiency) ;
    const eirp = txEIRP(gain, txPower) ;
    const pathLoss = txPathLoss(txRange, txFrequency) ;
    const linkBudgetCtoN = linkCtoN(eirp, pathLoss, txBandwidth, rxGT) ;


  const linkBudgetCalculation = document.getElementById('linkBudgetCalculation');
  const h2 = document.createElement('h2');
    h2.innerText = `Gain: ${gain} EIRP: ${eirp} PL: ${pathLoss} C/N: ${linkBudgetCtoN}` ;
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


// Below is code to calculate link budget parameters

function txGain(frequency, diameter, efficiency) {
  // Antenna Gain = 10 log10 (4πηA/λ**2)
  // π is pi = 3.14159265359 
  // η is the efficiency, 
  // A is the physical aperture area, 
  area = (Math.PI * ((diameter/2)**2))
  // λ = C/frequency with C as the speed of light
  lambda = 0.299792458/frequency
  console.log(10*Math.log(4*Math.PI*efficiency*area*(lambda**2))/ Math.log(10)) ;
  return 10*Math.log((4*Math.PI*efficiency*area)/(lambda**2))/ Math.log(10) ;
}

function txEIRP(power, gain) {
  // EIRP = gain + 10*log(power in Watts) ;
  console.log(gain + 10*Math.log(power)/ Math.log(10)) ;
  return gain + 10*Math.log(power)/ Math.log(10) ;
}

function txPathLoss(range, frequency) {
  // Path Loss = 20×log(range) + 20×log(frequency) + 92.45 
  console.log(20*Math.log(range)/Math.log(10) + 20*Math.log(frequency)/Math.log(10) + 92.45) ;
  return 20*Math.log(range)/Math.log(10) + 20*Math.log(frequency)/Math.log(10) + 92.45;
}

function linkCtoN (eirp, pathLoss, bandwidth, gOverT) {
  // C/N = EIRP - Path Loss - 10*log(bandwidth) + G/T + 228.6
  console.log(eirp-pathLoss-10*Math.log(bandwidth)/Math.log(10)+gOverT+228.6) ;
  return eirp - pathLoss - 10*Math.log(bandwidth)/Math.log(10) + gOverT + 228.6 ;
}

  