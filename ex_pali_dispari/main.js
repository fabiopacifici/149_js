
/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// Chiedere all’utente di inserire una parola
// - create a variable and a prompt to the the word from the user
/* const word = 'ada' */
// reverse the word 
/* const reversed = word.split('').reverse().join('')
console.log(reversed);
 */
// check if the reversed word is equal to the word
// - if true we have a palindrom
/* if(word === reversed){
  console.log('is palindrom');
  
} else {
  // - otherwise we don't
  console.log('its not');
  
} */

/**
 * Check if a word is a palindom
 * @param {string} word 
 * @returns boolean
 */
/* function is_palindrom(word) {
  const reversed = word.split('').reverse().join('')
  console.log(reversed);

  if (word === reversed) {
    return true
  } 
  return false
}
 */

/* console.log(is_palindrom(word))
if(is_palindrom(word)){
  console.log(`${word} is palindom`);
} else {
  console.log(`${word} is NOT palindom`);

} */


// Chiedere all’utente di inserire una parola
const word = 'ada' // global variable

// split the work into a sequence of characters (array)
/* const splittedWordArray = []
for (let i = 0; i< word.length; i++){
    const char = word.charAt(i)
    splittedWordArray.push(char)
}
console.log(splittedWordArray); */


/**
 * Splits a string into an array of elements
 * @param {string} word a string to split
 * @returns array
 */
function split(word){
  const splittedWordArray = [] // local or function scoped
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i)
    splittedWordArray.push(char)
  }
  return splittedWordArray
}

const splittedWordArray = split(word) // global variable
console.log(splittedWordArray);


// reverse the array items
/* const newReversedArray = []
for (let i = splittedWordArray.length - 1; i >= 0; i--) {
  const thisChar = splittedWordArray[i]
  newReversedArray.push(thisChar)
} 
console.log(newReversedArray); */


/**
 * Reverse an array and returns it
 * @param {Array} splittedWordArray an array of characters
 * @returns array
 */
function reverseArray(splittedWordArray){
  const newReversedArray = []
  for (let i = splittedWordArray.length - 1; i >= 0; i--) {
    const thisChar = splittedWordArray[i]
    newReversedArray.push(thisChar)
  }
  //console.log(newReversedArray);
  return newReversedArray
}

const revStringArray = reverseArray(splittedWordArray) 
console.log(revStringArray);



// Join the elements of the array into a new string
/* let newReversedString = ''
for(let i = 0; i < revStringArray.length; i++){
  const thisChar = revStringArray[i]
  newReversedString += thisChar
}

console.log(newReversedString); */

function join(revStringArray){
  let newReversedString = ''
  for (let i = 0; i < revStringArray.length; i++) {
    const thisChar = revStringArray[i]
    newReversedString += thisChar
  }

  //console.log(newReversedString);
  return newReversedString
}

const reversedWord = join(revStringArray)
console.log(reversedWord);




// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrom(word){
 
  const splitWordArr = split(word)
  console.log(splitWordArr);

  const revStringArr = reverseArray(splitWordArr)
  console.log(revStringArr);
  
  const joinedReversedString = join(revStringArr)
  console.log(joinedReversedString);

  if(word === joinedReversedString) {
    return true
  }
  return false 

}

console.log(isPalindrom(word));




/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(numb){
  if(numb % 2 === 0){
    return 'pari'
  }
  return 'dispari'
}

function sum(numb_1, numb_2){
  return numb_1 + numb_2
}

// L’utente sceglie pari o dispari
const userChoice = 'pari' // prompt('insert pari o dispari es: [pari/dispari]').toLowerCase()

// inserisce un numero da 1 a 5.
const userNumber = 3 // Number(prompt('type a number between 1 and 5.))
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const pcNumber = getRandomInteger(1, 5)
console.log(userChoice, userNumber, pcNumber);


// Sommiamo i due numeri
const result = sum(userNumber, pcNumber)

// Stabiliamo se la somma dei due numeri è pari o dispari

if (isEven(result) === userChoice){
  console.log('You win');
  
} else {
  console.log('PC wins');
  
}
// Dichiariamo chi ha vinto.


