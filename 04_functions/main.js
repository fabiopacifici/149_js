console.log('Works');



// 📌 What's the problem? 

/* const guests = [
  'gianni@example.com',
  'andrea@example.com',
  'jhonatan@example.com',
  'nella@example.com',
  'michela@example.com',

] */

/* const userEmail = 'gianni@example.com' //prompt('Type your email here');
// Add a variable where store if the user can access the party
let can_access = false



for (let i = 0; !can_access && i < guests.length; i++) {
  const currentGust = guests[i]

  if (currentGust == userEmail) {
    console.log('I found a guest for the party');
    can_access = true
    //break (break not needed if you use )
  }

} */



// -- Check if an employee is in the list

/* const employees = [
  'gianni',
  'andrea',
  'jhonat',
  'nella',
  'michela',

] */

/* const employeeName = 'gianni@example.com' //prompt('Type your email here');
// Add a variable where store if the user can access the party
let is_present = false


for (let i = 0; !is_present && i < employees.length; i++) {
  const currentEmployee = employees[i]

  if (currentEmployee == employeeName) {
 
    is_present = true
    //break (break not needed if you use )
  }

} */

/* 📌 Function Declaration 


- funciton
- functionName
- ()
- {// your codehere}

*/

// 👉 Functions without params
function logName() {
  console.log('Fabio');
}


// 👉 Function with params
function logSum(numb_1, numb_2) {
  const result = numb_1 + numb_2
  console.log(result);
}


function printSum(num_one, num_two) {
  const result = num_one + num_two
  document.writeln(result)

}



// 👉 Invoke a function
logName()

// 👉 Invoke a function with arguments

//logSum(firstNumber, secondNumber)

printSum(10, 20)

printSum(1, 2)


const userNumber = 10//prompt('Type a number')
const anotherNumber = 20 //prompt('Type a number')


const firstNumber = Math.ceil(Math.random() * 10) // 5
const secondNumber = Math.ceil(Math.random() * 10)
printSum(userNumber, anotherNumber)


// 📌 Live coding Log time
// Make a function to log the current data
function logTime() {
  const now = new Date()
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hour}:${min}:${sec}`);

}

logTime();



function printTime() {
  const now = new Date()
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  document.writeln(`${hour}:${min}:${sec}`);

}

printTime();


// Return keywork

function getTime() {
  // These variables are local (function) scoped
  // visible only inside the function declaration
  const now = new Date()
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const time = `${hour}:${min}:${sec}`

  return time 

}
//console.log(time);

// Read the return value
getTime(); // '10:50:3'
// 1. log the function call
console.log(`The time now is ${getTime() }`);
// 2. make a variable and use it
const currentTime = getTime()
console.log(currentTime);

'10:50:3'

10

true

['ciao', 'ciao']



// Hosting 
// function declarations are subject to hoisting
// can be invoked before their declaration
calcAge()

function calcAge(){
  console.log('Calculate an age');
}

// but also after
calcAge()



// 📌 Function expression (not hoisted) (BONUS)
//myFunction() // ReferenceError: Cannot access 'myFunction' before initialization
// myFunction is the function's name
const myFunction = function(){
  console.log('This is a function expression');
}

// use the contant to invoke the function after the declaration
myFunction()


/* 
pari o dispari: 

scrivere una funzione per verificare se un numero è pari o dispari,

quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/


// verificare se un numero è pari o dispari

const number = 6

if(number % 2 !== 0) {
  console.log('its odd');
  
} else {
  console.log('its even');
}





const second_number = 5

if (second_number % 2 !== 0) {
  console.log('its odd');

} else {
  console.log('its even');
}



/* 
// Function with logs
function is_even(numb){
  if (numb % 2 !== 0) {
    console.log('its odd');
    
  } else {
    console.log('its even');
  }
  
}


const numberToCheck = 5
is_even(numberToCheck) */

// With return
function is_even(numb) {
  if (numb % 2 === 0) {
    return true

  } 
  return false
}



const numberToCheck = 5
if(is_even(numberToCheck))
{
  console.log(`The number you picked ${numberToCheck} is even`);
  
} else {
  console.log(`The number you picked ${numberToCheck} is odd`);
}
