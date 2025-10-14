/* Scrivi una funzione che accetti
- un'`array di stringhe `
- e una `lettera` 
e **restituisca** un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 *  Filter by initials
 * 
 * @param {array} names An array of names to filter 
 * @param {string} char The initial char to use for the filter
 * @returns A new array of filtered items
 */
function filterNamesInitial(names, char){


  // add a new array where store the filtered names
  const filteredNames = []
  // loop over the array of names
  for(let i = 0; i < names.length; i++) {
    // get the name in each iteration 
    const thisName = names[i]
    // check IF the name (string) includes the given character
    //
    // thisName[0] === char
    // thisName.includes(char)
    if (thisName.includes(char)){
      // - push the name into the new array
      filteredNames.push(thisName)
    }
  }

  return filteredNames

}

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = filterNamesInitial(names, 's')


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(filteredNames);

