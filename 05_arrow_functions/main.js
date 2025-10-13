
/**
 * Splits a string into an array of elements
 * @param {string} word a string to split
 * @returns array
 */
function split(word) {
  const splittedWordArray = [] // local or function scoped
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i)
    splittedWordArray.push(char)
  }
  return splittedWordArray
}

/**
 * Reverse an array and returns it
 * @param {Array} splittedWordArray an array of characters
 * @returns array
 */
function reverseArray(splittedWordArray) {
  const newReversedArray = []
  for (let i = splittedWordArray.length - 1; i >= 0; i--) {
    const thisChar = splittedWordArray[i]
    newReversedArray.push(thisChar)
  }
  //console.log(newReversedArray);
  return newReversedArray
}

/**
 *  ## Joins a string
 *  this function takes an array of strings and joins them into a single string
 * @param {Array} revStringArray The array to join
 * @returns string
 */
function join(revStringArray) {
  let newReversedString = ''
  for (let i = 0; i < revStringArray.length; i++) {
    const thisChar = revStringArray[i]
    newReversedString += thisChar
  }

  //console.log(newReversedString);
  return newReversedString
}

/**
 *  ## Checks a palindrom
 *  this functions checks if a given word is a palindrom
 * @param {string} word the word to check
 * @returns boolean
 */
function isPalindrom(word) {

  const splitWordArr = split(word)
  console.log(splitWordArr);

  const revStringArr = reverseArray(splitWordArr)
  console.log(revStringArr);

  const joinedReversedString = join(revStringArr)
  console.log(joinedReversedString);

  if (word === joinedReversedString) {
    return true
  }
  return false

}

/**
 * ## Generates a random number
 * This function takes a min and max and return a random number beetween the two included
 * @param {number} min the min number to generate
 * @param {number} max the max number to generate
 * @returns number
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* function isEven(numb) {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
} */

/* function sum(numb_1, numb_2) {
  return numb_1 + numb_2
}
 */


/*

📌 Function expressions 

- named functions
- anonymous functions

// named functions 
function name_your_function(){
  // your code 
}


// anonymous function
function(){
  // your code goes here 
}
*/

// not subject to hoisting

// sumNumber() cannot access the function here (not hoisted)

const sumNumber = function () {
  // your code here 
  console.log('This is a function expression');

}


sumNumber()

//splitWord()

/**
 * Splits a string into an array of elements
 * @param {string} word a string to split
 * @returns array
 */
/* const splitWord = function(word) {
  const splittedWordArray = [] // local or function scoped
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i)
    splittedWordArray.push(char)
  }
  return splittedWordArray
}
 */


/* Variable scope */

a = 0;
b = "buongiorno"
var c = "ciao";

saluta();

console.log("a is " + a);
console.log("b is " + b);

function saluta() {
  var d = "asd";
  console.log("a is " + a);
  var b = a + 1;
  console.log("b is " + b);
  console.log(c);
}

// a is 0
// b is 1
// ciao
// a is 0
// b is buongiorno


/* 📌 Arrow functions 

// Syntax
- () can be omitted | parentesis mandatory if we have zero or more than one parameter
- => must be present | You MUST remeber the arrow
- {} can be omitted | when on a sinle line (simple expression) can be omitted - when omitted the return keyword in implicit (you don't need to write it)



// option 1
const functionName = () => {
  // code to run here 
  // retun must be explicit 
  
  retun something
}

// option 2
const functionName = numb => {
  // your code here 
  // you can access the parameter numb here  

  // retun must be explicit 
  retun something
}

// option 3
const functionName = (numb, str) => {
  // your code here 
  // you can access the parameter numb and str here  

  // retun must be explicit 
  retun something
}

// option 4 (without parentesis and implicit return )
const logFunctionName = numb => console.log(numb * 2) 
const getFunctionName = numb => numb * 2 

// option 5 (with parentesis, and implicit return)
const antorherFunction = (numb_1, numb_2) => numb_1 + numb_2

*/



// 👉 Covert from function declaration to arrow function
/* 
function sum(numb_1, numb_2) {
  return numb_1 + numb_2
}

*/

// this function needs two params, parenthesis () are mandatory
/* const sum = (numb_1, numb_2) => {
  return numb_1 + numb_2
} */

const sum = (numb_1, numb_2) => numb_1 + numb_2
console.log(sum(5, 3)) // 8


/* 
const splitWord = function(word) {
  const splittedWordArray = [] // local or function scoped
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i)
    splittedWordArray.push(char)
  }
  return splittedWordArray
}

*/

// Uncaught ReferenceError: Cannot access 'splitWord' before initialization
//splitWord('Fabio')

const splitWord = word => {
  const splittedWordArray = [] // local or function scoped
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i)
    splittedWordArray.push(char)
  }
  return splittedWordArray
}
console.log(splitWord('Fabio'))




// ==============================================================
// =============================================================
// in array

/* const guests = [
  'gianni@example.com',
  'andrea@example.com',
  'jhonatan@example.com',
  'nella@example.com',
  'michela@example.com',

] */


/* let can_access = false */


// Controlla che sia nella lista di chi può accedere,
// - loop over the array of guests
// - check if the userEmail is equal to the currentGust
// - if there is a match set the can_access variable to true
// false && true
//console.log(can_access && i < guests.length);


/* const userEmail = 'test@exaple.com' */

/* for (let i = 0; !can_access && i < guests.length; i++) {
  const currentGust = guests[i]

  if (currentGust == userEmail) {
    console.log('I found a guest for the party');
    can_access = true
    //break (break not needed if you use )
  }

} */

//console.log(can_access);


// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// if the can_access variable is true 
// - print a welcome message
// otherwise
// - print a go home message
//const can_access = guests.includes(userEmail)
/* if (can_access) {
  console.log('Welcome to the party');

} else {
  console.log('Go home dude');
} */


  /**
   * ## In array
   * finds an element inside an array
   * @param {Array} heysack The array to look into
   * @param {any} needle The string to look for
   * @returns boolean
   */
/* function inArray(heysack, needle) {
  let can_access = false


  for (let i = 0; !can_access && i < heysack.length; i++) {
    const currentGust = heysack[i]

    if (currentGust == needle) {
      console.log('I found the needle in the heyack');
      can_access = true
      //break (break not needed if you use )
    }

  }

  return can_access

} */


const guests = [
  'gianni@example.com',
  'andrea@example.com',
  'jhonatan@example.com',
  'nella@example.com',
  'michela@example.com',

]
const userEmail = 'jhonatan@example.com'
//inArray(guests, userEmail)


/* const found = inArray(guests, userEmail)
console.log(found);
 */

// Convert to arrow function
/* 
function inArray(heysack, needle) {
  let can_access = false


  for (let i = 0; !can_access && i < heysack.length; i++) {
    const currentGust = heysack[i]

    if (currentGust == needle) {
      console.log('I found the needle in the heyack');
      can_access = true
      //break (break not needed if you use )
    }

  }

  return can_access

}

*/


const inArray = (heysack, needle) => {
  let can_access = false


  for (let i = 0; !can_access && i < heysack.length; i++) {
    const currentGust = heysack[i]

    if (currentGust == needle) {
      console.log('I found the needle in the heyack');
      can_access = true
      //break (break not needed if you use )
    }

  }

  return can_access

}

console.log(inArray([1, 2, 3, 5], 3))




// 👉 Convert is even
/* 

function isEven(numb) {
  if (numb % 2 === 0) {
    return true
  }
  return false
}
  
*/

const isEven = numb => numb % 2 === 0