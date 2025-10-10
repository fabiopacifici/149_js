console.log('It works');
/* 
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
*/

// Crea una lista di email di invitati ad una festa.
// - create a varaible where store an array of string
const guests = [
  'gianni@example.com',
  'andrea@example.com',
  'jhonatan@example.com',
  'nella@example.com',
  'michela@example.com',

]

// Chiedi all’utente la sua email
const userEmail = 'gianni@example.com' //prompt('Type your email here');
// Add a variable where store if the user can access the party
let can_access = false


// Controlla che sia nella lista di chi può accedere,
// - loop over the array of guests
// - check if the userEmail is equal to the currentGust
// - if there is a match set the can_access variable to true
// false && true
//console.log(can_access && i < guests.length);




for (let i = 0; !can_access && i < guests.length; i++) {
  const currentGust = guests[i]

  if (currentGust == userEmail) {
    console.log('I found a guest for the party');
    can_access = true
    //break (break not needed if you use )
  }

}

//console.log(can_access);


// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// if the can_access variable is true 
// - print a welcome message
// otherwise
// - print a go home message
//const can_access = guests.includes(userEmail)
if (can_access) {
  console.log('Welcome to the party');

} else {
  console.log('Go home dude');
}





/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generare un numero random da 1 a 6 sia per il giocatore sia per il computer.
// - add a variable where store the player's number
const player_number = Math.ceil(Math.random() * 6)
// - add a variable where store the pc's number
const pc_number = Math.ceil(Math.random() * 6)
console.log(player_number, pc_number);



// check IF player number is greather then pc number
// - player wins
// ELSE IF pc number is greather than the player's number
// - pc wins
// Otherwise
// - try again
let message
if (player_number > pc_number) {

  message = 'You win'

} else if (pc_number > player_number) {

  message = 'PC win'

} else {

  message = 'Try Again'

}


// Print the output here
console.log(message);
