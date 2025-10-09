console.log('It works');


// variable declaration
// - const / let
// - variable name
// - assignment operator (=)
// - a value to asociate to the variable




const role = 'admin'

const user_age = 18


// 📌 Conditionals

// 👉 if block
/* Syntax only 
- if keywork 
- (condition) - the condition to decide if the code has to run or not
- { // your code here } - the code to run if the condition is true


if(condition){
  // your code here
}

*/

const is_open = true
console.log(is_open);

if (is_open) {
  // runs if the is_open variable is true
  console.log('runs only if is_open is true', is_open);

}

const is_close = false
console.log(is_close);
if (is_close) {
  // runs if the is_close variable is true
  console.log('runs only if is_close is true', is_close);
}

console.log('Outside of the if blocks');



// 👉 if/else block
/* 
- if
- (condition)
- {// code to run} - if the condition is true the code runs
- else 
- {// code to run if condition is false}


if (condition) {
  // code to run if condition is true
} else {
  // code to run when false  
}

*/


if (is_open) {
  console.log('is open is true so i run');
} else {
  console.log('is open is false so i run');
}


if (is_close) {
  console.log('is close is true so i run');

} else {

  console.log('is close is false so i run');

}



// 👉 if ( condition)/else if(condition) / else 
/* 
- if
- (condition)
- {// code to run} - if the condition is true the code runs
- else if - keywords
- (condition) - else if condition
- {// code to run if condition is true}
- else 
- { if none of the condition is true}


if (condition) {
  // code to run if condition is true
} else if (condition_two){
 // block to run if the second condition is true
} else {
  // code to run when false  
}

*/

/* 👉 Relational operators */

const x = 3

console.log(x == 4); //false
console.log(3 == 4); // false

// false
if (x == 4) {
  console.log('I should run only if x is equal to 4', x);

}
console.log(x);


if (x != 4) {
  console.log('I should run only if x is not equal to 4', x);
}


if (x > 10) {
  console.log('I run if x is more than 10');

} else if (x < 3) {
  console.log('I run if x is less or equal to 3');

} else {
  console.log('I run if none above is true');

}


console.log(typeof 3);
console.log(typeof '3');

console.log(3 == '3'); // true
console.log(3 === '3'); // true



/* 👉 Logical operators */

const y = 10

/* AND logico */
if (x === 4 && y === 10) {
  console.log('I am running', x, y);
}

/* OR logico */
console.log(x === 4);
console.log(y === 10);

if (x === 4 || y === 10) {
  console.log('I am running if x or y conditions are true', x, y);
}


/* !negazione  */

if (is_open) {
  // runs if the is_open variable is true
  console.log('runs only if is_open is true', is_open);

}


// is_close = true
// !is_close (false)
// is_close = false
// !is_close = true
if (!is_close) {
  // runs if the is_close variable is true
  console.log('runs if its close');
}



// Math random
console.log(Math.random())
console.log(Math.floor(Math.random()));
console.log(Math.ceil(Math.random()));


// Restituisce un numero tra 0 e 9
const num = Math.floor(Math.random() * 10);

// Restituisce un numero tra 1 e 100 
const rand_num = Math.floor(Math.random() * 100) + 1;

console.log(num);
console.log(rand_num);


// 👉 Block scope if/else

// global variable
const global_scoped_variable = 'fabio'

if (is_open) {
  //console.log(global_scoped_variable); //error
  const global_scoped_variable = 'Mario'
  console.log(global_scoped_variable);
  
  // block scope variable
  const block_scoped_variable = 'I am in the block'
  //console.log(block_scoped_variable);
  
}

console.log(global_scoped_variable);
//console.log(block_scoped_variable);

/* */

let validation = true;
const wordA = "Word A";
let wordB = "Word B";

if (validation === true) {
  let wordC = "Word C";
  let wordB = "Word Custom B";
  console.log(wordA); // Word A
  console.log(wordB); // Word custo b
  console.log(wordC); // Word C
}

console.log(wordA); // Word A
console.log(wordB); // Word B
//console.log(wordC);  // error



/* Modulus */

const first_number = 4
const second_number = 7

console.log(first_number % 2);
console.log(second_number % 7);


if(first_number % 2 === 0){
  console.log('First number is even');
}




