/* Scrivi una funzione che accetti:
- una stringa 
- e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word){
  // add a list of vowels
  const vowels = ['a', 'e', 'i','o', 'u']
  //const vowels = 'aeiou';

  // add a variable where store the counter
  let counter = 0;
  // loop over the string 
  for(let i = 0; i < word.length; i++){
    // take the character 
    const thisChar = word[i]
    // check if the vowels include the current character
    // -  increment the counter 
    if(vowels.includes(thisChar)){
      counter++
    }
  }


  // return the counter
  return counter

}

// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(result);
