console.log('it works');

/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

> - 100km, 10 anni => prezzo corretto:  €16.80
> - 100km, 70 anni => prezzo corretto: €12.60


Tools:
- const/let
- prompt()
- Number()
- if/elseif/else
- relational operators >= and <
- toFixed(2)

*/


/* Data Preparation  */
//let km, age, price_per_km, senior_discount, minors_age;


/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero */
// - Add a contant to store the km to do
const km =  Number(prompt('Type the number of km you want to do in your journy'))
// - Add a contant to store the passenger age
const age = Number(prompt('Type the passenger age'))
// - Add a contant to store the price_per_km 0.21
const price_per_km = 0.25
// - Add a variable to store the minors discount 0.8
const minor_discount = 0.9
// - Add a variable to store the senior discount 0.6
const senior_discount = 0.5; 
const minors_age = 20;
console.log(km, age, price_per_km, minor_discount, senior_discount);


/* Code Elaboration */
// calcolare il prezzo totale del viaggio
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - add a variable where store the the standard ticket price
let tickt_price = price_per_km * km
console.log(tickt_price);
// - Add a standard ticket price message
let message = `Your ticket price is standard`
console.log(message);


// va applicato uno sconto del 20% per i minorenni
// check IF the age is less than 18
if (age < minors_age) {
  // - apply minor discount
  tickt_price = tickt_price * minor_discount
  // - update a default message
  message = `Your ticket has a minor discount 20%`
  console.log(tickt_price, message);
  
} else if(age >= 65){
  // va applicato uno sconto del 40% per gli over 65.
  // check otherwire if the age is over 65
  // - apply senior discount
  tickt_price = tickt_price * senior_discount
  // - update the default message 
  message = `Your ticket has a senior discount 40%`
  console.log(tickt_price, message);
} 

console.log(tickt_price, message);



/* Output to the user */
// - show a message to the user with the final price
alert(`${message}, ticket pice: $ ${tickt_price.toFixed(2)}` )