# Convert the following functions to arrow functions

## Split word function

```js
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

```

## Split reverse Array

```js
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
```

## Joins array

```js
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

```

## Get random integer

```js

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

```

## Is even

```js

function isEven(numb) {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
}
```
