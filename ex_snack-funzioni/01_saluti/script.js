/* Scrivi una funzione che accetti una `stringa` contenente un nome e `restituisca` un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Greets a user by its name
 * @param {string} name The name of the person to greet
 * @return {string} A greeting message
*/
function greet(name){

  const greetings = `Ciao ${name}`  
  return greetings

}

// Invoca la funzione qui e stampa il risultato in console
const greetings = greet(userName)

//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(greetings);

/* Arrow function */
/* 
const greet = (name)=> `Ciao ${name}`


const greetingsUser = greet(userName) // ' Ciao Mario '
console.log(greetingsUser); */
