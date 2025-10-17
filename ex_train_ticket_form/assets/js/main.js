console.log('it works');

/* 

Descrizione:

Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.



MILESTONE 1:
(SENZA FORM)
✅ Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
✅ Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un `form` in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

✅ Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
✅ (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

*/


// select all DOM elements
// - select the name input
const nameField = document.getElementById('name-field')

// - select the input km
const kmField = document.getElementById('km-field')

// - select the input age
const ageField = document.getElementById('age-field')

// - select the button element
//const buttonEl = document.querySelector('button.generate')
// - select the form
const formEl = document.querySelector('form')

// - select the ticket element
const ticketEl = document.getElementById('ticket')

// prepare other  global variables
// - price per km = 0.21
const price_per_km = 0.21
// - junior_discount 0.8
const junior_discount = 0.8
// - senior_discount 0.6
const senior_discount = 0.6

//console.log(ageField);

// Option 2 (card hidden on screen)
const printTicketEl = document.getElementById('print-ticket')
const nameEl = document.getElementById('name')
const offerEl = document.getElementById('offer')
const wagonEl = document.getElementById('wagon-number')
const cpEl = document.getElementById('cp-code')
const priceEl = document.getElementById('final-price')



//console.log(nameField, kmField, ageField, buttonEl, price_per_km, junior_discount, senior_discount);

// Add an event listener to the button to listen for click
formEl.addEventListener('submit', (e)=>{
  // prevent the form default
  e.preventDefault()
  // - read the value for the name input
  const name = nameField.value
  // - read the value for the km input
  const km = Number(kmField.value)
  // - read the value for the age input
  const age = ageField.value
  
  console.log(km, age);
  
  // Perform the calculation for the ticket price
  // - calculate the standard ticket price
  let ticket_price = price_per_km * km
  let offer_name = 'standard ticket'
  console.log(ticket_price);

  // Check the age value to apply the discount to the calculated price
  // IF age < 18
  if(age === 'minor'){
    // - apply junior discount
    console.log('minor');
    ticket_price = ticket_price * junior_discount
    offer_name = 'Minor ticket'
    
  } else if (age === 'senior') {
    // ELSE IF age > 65 
    // - apply the senior discount
    console.log('senior');
    ticket_price = ticket_price * senior_discount    
    offer_name = 'Senior ticket'

  }
  // OTHERWISE
  // - standard price
  console.log(ticket_price.toFixed(2), offer_name);
  const final_price = ticket_price.toFixed(2)

  //ticketEl.innerText = `Final price: ${final_price} - offer: ${offer_name} `

  const wagon_number = getRandomNumber(3, 10)
  const cp_code = getRandomNumber(80000, 99999)

  ticketEl.innerHTML = generateMarkup(name, offer_name, final_price, wagon_number, cp_code)


  // Option 2
  printTicketEl.classList.remove('d-none')
  nameEl.innerText = name
  offerEl.innerText = offer_name
  wagonEl.innerText = wagon_number
  cpEl.innerText = cp_code
  priceEl.innerText = final_price  
})




/**
 * Generate the ticket card markup
 * @param {String} passenger_name The passenger name
 * @param {String} offer_name The offer name
 * @param {Number} final_price The final price
 * @param {Number} wagon_number The wagon number
 * @param {Number} cp_code The cp code number
 * @returns String 
 */
function generateMarkup(passenger_name, offer_name, final_price, wagon_number, cp_code ){
  return `
    <div class='card'>
          <div class="card-header">
            Ticket
          </div>
          <div class="card-body d-flex gap-2">
            <div class="flex-grow-1">
              Passenger name <br>
              <strong>${passenger_name}</strong>
            </div>

            <div class="flex-grow-1">
              Offer name <br>
              <strong>${offer_name}</strong>
            </div>
            <div class="flex-grow-1">
              Wagon number: <br>
              <strong>${wagon_number}</strong>
            </div>

            <div class="flex-grow-1">
              CP Code:<br>
              <strong>${cp_code}</strong>
            </div>

            <div class="flex-grow-1">
              Price: <br>
              <strong>${final_price}</strong>
            </div>
          </div>
        </div>`
}

/**
 * Generates a random number
 * @param {Number} min The number
 * @param {Number} max The max
 * @returns 
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}