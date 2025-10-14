/* Scrivi una funzione che accetti un array di `nomi` e `restituisca` nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function extractInitials(names) {


  // add a variable as an empty array where store the initials
  const initials = []
  // loop over the array of names 
  for(let i = 0; i < names.length; i++ ){
    // put the initial to the new array
    initials.push(names[i].charAt(0).toUpperCase())
  }

  // return the new array
  return initials

}


// Invoca la funzione qui e stampa il risultato in console
const initials = extractInitials(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);

/* Arrow function 

const extractInitials = names => {


  // add a variable as an empty array where store the initials
  const initials = []
  // loop over the array of names 
  for (let i = 0; i < names.length; i++) {
    // take the first name in each iteration
    const thisName = names[i]
    // get the first char
    const char = thisName.charAt(0) // thisName[0]
    // put the initial to the new array
    initials.push(char)
  }


  // return the new array
  return initials

}


// Invoca la funzione qui e stampa il risultato in console
const initials = extractInitials(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);
*/