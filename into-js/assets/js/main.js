console.log('It works ');

// Comments
/*
Create a program that does XYZ
*/

// 📌 Hello world examples
// This is a comment
// dot notation
console.log('Hello World');


// This is a comment
document.writeln(`
  Hello 
  World
  `);

// This is a comment
//alert('Hi there')

// This is a comment
console.dir(document.getElementById('title'));

document.getElementById('title').innerHTML = 'Ciao ciao';



/* 📌 Variables */

const first_name = 'Fabio';
console.log(first_name); // Fabio


const titleElement = document.getElementById('title');
console.log(titleElement);


// Declaration
let miaVariabile2;
console.log(miaVariabile2);// undefined

// Initialization
let cat_name = 'Antifa';
console.log(cat_name);


// Assignment
let other_cat_name;
other_cat_name = 'Anakin';




var miaVariabile3;



// 👉 Variables with: const 


// Cosnt variables must be initialized
// const miaVariabile1;

const age = 45;
//age = 46; // Assignment to constant variable.


// Let can change

let color = 'green';
console.log(color);

color = 'black';
console.log(color);

color = 'red';
console.log(color);


const lastName = 'Rossi'


// 📌 Hoisting
//console.log(user); //ReferenceError: Cannot access 'user' before initialization

let user = 'mario'
console.log(user);


//console.log(another_user); //ReferenceError: Cannot access 'another_user' before initialization
const another_user = 'luigi'
console.log(another_user);


console.log(laptop); // undefined

var laptop = 'My laptop'


console.log(custom_pc);
var custom_pc = 'my custom pc';
console.log(custom_pc);




// 📌 Data Types

let x = 10;
let y = 100;
let movie = 'Mandalorian'


// Strings

"This is a string"
"fabio"
'fabio'
console.log('fabio');
const this_string = 'this is a string'
console.log(this_string);
console.log('this_string'); // this_string




// numbers
4
45
55
console.log(44);


// boolean
true
false
console.log(true);



// 👉 Strings concatenation

const star = 'Star'
const wars = 'Wars'

const star_wars = star + wars
console.log(star_wars);


const my_fullname = 'Fabio' + ' ' + 'Pacific'
console.log(my_fullname);

/* const sum = 2 + '2' + 2.1
console.log(sum); */




const user_name = 'fabio'
const user_email = 'fabio@example.com'

const sentence = `
I am 
${user_name} and my email address is 
${user_email}
`
const other_sentence = 'I am ' + user_name + ' and my email address is ' + user_email

console.log(sentence);
console.log(other_sentence);




// Numbers operations

const sum = 10 + 10
console.log(sum);

const division = sum / 2
console.log(division);

const multiply = division * 20
console.log(multiply);

const subtraction = sum - 2
console.log(subtraction);


/* String/Numbers methods */

console.log(user_name.length)
console.log(user_name.split());
console.log(user_name.replace());


sum.toString()



