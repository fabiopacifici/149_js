console.log('Objects part two');

const fullName= 'Mario Rossi'
const age = 120
const job = 'Driver'


// Es5 sintax (still ok)
const person = {
  fullName: fullName,
  age: age,
  job: job
}

console.log(person);


// ES6 better sometimes 
const anotherPerson = {
  name: fullName, 
  age, 
  job
}

console.log(anotherPerson);

// 📌 Dynamic Keys
//const nameKey = prompt('Type the name of a key where store the user fullName', 'name') // name
//const nameValue = prompt(`What value do you want to save in the property ${nameKey}:`) // 'Luigi'

//const ageKey = 'userAge'
//const ageValue = 70

/* ✅ Dynamic key needs suqre brackets */
/* const user = {
  [nameKey]: nameValue, // name: 'Luigi'
  [ageKey]: ageValue
} */
/* console.log(user); */ // { name: 'Luigi' }

// ❌ Key not dynamic
/* const diffentUser = {
  nameKey: nameValue // nameKey: 'Luigi'
}
console.log(diffentUser); //{nameKey: 'Luigi'}
 */


// 📌 Object Descturing

const movie = {
  name: 'Starwars',
  overview: 'lorem',
  length: 120, 
  cast: ['item 1', 'item2']
}

const template = `
  <div class='card'>
    <h2>${movie.name}</h2>
    <div>${movie.overview}</div>
  </div>

`
/* const name = movie.name
const overview = movie.overview
const length = movie.length
const cast = movie.cast
 */

const {name, cast, overview} = movie
console.log(name, cast, overview); // starwars, [], lorem


const markup = `
  <div class='card'>
    <h2>${name}</h2>
    <div>${overview}</div>
  </div>
`



// 📌 Desctucuring Array
const tvShows = ['Mandalorian', 'Lucifer', 'Friends']
console.log(tvShows);

// manually make variables
const firstMovie = tvShows[0]
const secondMovie = tvShows[1]
const thirdMovie = tvShows[2]

// make variables using descructuring
const [mandalorian, , frinds] = tvShows
console.log(mandalorian, frinds);


// 📌 Spred operator (clone/copy/extend)

// 👉 With objects
const user = {
  name: 'Mario',
  age: '70',
  email: '',
  password: ''
}

//✅ clone the user object
const clonedUser = {...user}

// ❌ NOT A CLONE its the same object in memory (same pointer)
//const clonedUser = user
clonedUser.is_admin = true

console.log(user);
console.log(clonedUser);


// 👉 With array

const animals = ['cats', 'dogs', 'lions']

// ❌ Same array in memory
//const clonedAnimals = animals

// ✅ clone
const clonedAnimals = [...animals]
// clone and extend
// const clonedAnimals = [...animals, 'monkey', 'elephant']

animals.push('Dragon')

clonedAnimals.push('Bird')
console.log(animals, clonedAnimals);


// Rest parameter

console.log('Ciao', 1, {name:'mario'}, [1, 2, 4]);


function multiLog(...params){

  console.log(params);
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    console.log(param);
  }
}

//          0    1      2                 3
multiLog('Ciao', 1, { name: 'mario' }, [1, 2, 4])


function makeMarkup(element, ...classes){
  console.log(element);
  console.log(classes);
  const domEl = document.createElement(element)
  domEl.classList.add(...classes)
  domEl.innerText = 'Ciao'
  return domEl
  
}

console.log(makeMarkup('div', 'bg-dark', 'text-white', 'p-4'))
console.log(makeMarkup('p', 'bg-danger', 'text-white', 'py-4'))
const divEl = makeMarkup('div', 'bg-dark', 'text-white', 'p-4')
const testEl = document.getElementById('test')

testEl.appendChild(divEl)