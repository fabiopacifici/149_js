const people = [
  { id: 1, name: 'Paolo', age: 35 },
  { id: 2, name: 'Giulia', age: 24 },
  { id: 3, name: 'Marco', age: 67 }
];
// Loop over the array using a for loop

for (let i = 0; i < people.length; i++) {
  // get the element in the array
  //👇 the element in the array for each iteration 
  const element = people[i]

  // log the value
  console.log(element, i, people);
}

// 📌 Array Methods

// Array.forEach() !its a method loop
// .forEach()
// (element, index, array)=>{}
// {your code here}

const movies = ['Matrix', 'Starwars', 'Avatar'] // array of strings
// with an anonymous function (take only what you need)
movies.forEach(function (movie) {
  console.log(movie); // string
})


// with an arrow function (take only what you need)
movies.forEach((movie) => {
  console.log(movie); // string
  console.log(movie.length);

})


// with an arrow function (you can have also index and array params)
movies.forEach((movie, i, arr) => {
  console.log(movie);
})


people.forEach((person) => {
  console.log(person);
  console.log(typeof person); // object
  // square brackets notation 
  console.log(person['name']);
  // dot notation
  console.log(person.name);

  console.log(`${person.name} age: ${person.age}`);


})

people.forEach(person => {
  console.log(person);
})

// define a function
function handleLoopPeople(person, i, arr) {
  console.log(person, i, arr);

}
// With a callback handler
people.forEach(handleLoopPeople)

/* 💡 This is the same approach we use for the listeners
buttonEl.addEventlinster('click', (e)=>{})
buttonEl.addEventlinster('click', function(e){})

function myFunction(e){

}

buttonEl.addEventlinster('click', myFunction ) */


// 📌 3 different syntax
// 1. with an anoymous arrow function as callback
// 2. with an anonimus function declaration as callback
// 3. with a function hanler


//👉 1. with an anoymous arrow function as callback
people.forEach((currentValue, index, arr) => {
  // your code here 
  // you can use currentValue, index and arr
})

//👉 2. with an anonimus function declaration as callback
people.forEach(function (currentValue, index, arr) {
  // your code here 
  // you can use currentValue, index and arr
})

// 👉 3. with a function hanler
// - declare a function with a >name<
function handleForEach(currentValue, index, arr) {
  // your code here 

}
// - invoke the .forEach and pass the handler
people.forEach(handleForEach)



// 📌 Arra.map() creates a new array
// add a new empty array here
// ->
const peopleNames = []
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  //console.log(person.name);
  // push to the array
  peopleNames.push(person.name)
}

// log the array
console.log(peopleNames);

// 👉 with array.map()

const newNames = people.map((currentValue) => {
  console.log(currentValue.name);
  return currentValue.name
})

console.log(newNames);

/* const fullData = people.map((currentValue) => {
  console.log(currentValue.name);
  return `name: ${currentValue.name} age: ${currentValue.age}`
}) */
/* const fullData = people.map((currentValue) => `name: ${currentValue.name} age: ${currentValue.age}`) */

const fullData = people.map(person => `name: ${person.name} age: ${person.age}`)
console.log(fullData);


// 📌 Filter array.filter()
// filtering with a for loop
const numbs = [10, 3, 5, 6, 11, 20]

// create a new array with only even numbers
const evenNumbs = []  // [10, 6, 20]
for (let i = 0; i < numbs.length; i++) {
  const numb = numbs[i];
  if (numb % 2 === 0) {
    evenNumbs.push(numb)
  }
}

// log the new array of even numbers here
console.log(evenNumbs);


const evenNumbers = []  // [10, 6, 20]
numbs.forEach((numb) => {

  if (numb % 2 === 0) {
    evenNumbers.push(numb)
  }
})

// log the new array of even numbers here
console.log(evenNumbers);

// 👉 With Array.filter()
// Array.filter(callback)
// callback: (currentValue, index, array)=>{}
// {return true|false}
//[10, 3, 5, 6, 11, 20]
// [10, 6, 20 ]

// Option 1
/* const evenNumbersWithFilter = numbs.filter((numb)=> {
  if (numb % 2 === 0) {
    return true
  }
  return false
}) */

// Option 2
//const evenNumbersWithFilter = numbs.filter((numb) => numb % 2 === 0)

// Option 3
const evenNumbersWithFilter = numbs.filter(numb => numb % 2 === 0)


console.log(evenNumbersWithFilter);


// 📌 Find an item inside an array and returns it.
/* 
const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
- const result = array.find(callback)
- callback: (currentValue, index, array)=>{}
- { return condition}

*/
/* const foundPerson = people.find((person) => {
  if (person.id === 3) {
    return true
  }
  return false
}) */

/* const foundPerson = people.find((person)=>{
  return person.age > 60
}) */

const foundPerson = people.find((person) => {
  return person.id === 6
})

console.log(foundPerson); // undefined



/* 

### **Snack 1**
repo: js-array-snacks
*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).


Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.
*/

const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
]

// with a for loop?
// with a for each? 
const petrol = []
/* for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if(car.fuel === 'benzina') {
    petrol.push(car)
  }
}

console.log(petrol); */

cars.forEach((car)=>{
  if (car.fuel === 'benzina') {
    petrol.push(car)
  }
})

const diesel = []
/* for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.fuel === 'diesel') {
    diesel.push(car)
  }
}

console.log(diesel); */

cars.forEach((car) => {
  if (car.fuel === 'diesel') {
    diesel.push(car)
  }
})


const otherCars = []
/* for(let i = 0; i < cars.length; i++){
  const car = cars[i];
  if(car.fuel !== 'benzina' && car.fuel !== 'diesel'){
    otherCars.push(car)
  }
}

console.log(otherCars); */
cars.forEach((car) => {
  if (car.fuel !== 'benzina' && car.fuel !== 'diesel') {
    otherCars.push(car)
  }
})

console.log(petrol, diesel, otherCars);



// with filter?

const petrolCars = cars.filter((car) => car.fuel === 'benzina')
console.log(petrolCars);

const dieselCars = cars.filter((car) => car.fuel === 'diesel')
console.log(dieselCars);

const otherCarsList = cars.filter((car) => car.fuel !== 'benzina' && car.fuel !== 'diesel')
console.log(otherCarsList);