console.log('Object Literal');

// 📌 Object literal creation
const person = {
  name: 'fabio',
  lastName: 'Pacific',
  age: 45,
  'current job': 'Teacher',
  favourite_movie: 'starwars',
  printFullName() {
    // ✅ this is the current object
    return `${this['name']} ${this['lastName']}`
    //return this.name + ' ' + this.lastName
  },
  getFirstName: function () {
    // ✅  this is the current object
    console.log('Fabio', this.name)
  },
  /*
  ⚠️ inside the arrow functions the this is not the current oject
  getFirstName: () => {
    console.log('Fabio', this.name)
  }  */

}
// print the object
console.log(person);

// access the object properties
// 1. dot notation
console.log(person.name);

// 2. suqre brackets notation
// with a variable as its key
//const key = prompt('type the name of a key to get the corresponding value from the object', 'name') //'name'
//console.log(person[key]); // key? = 'name' -> person['name']


// with the key directly
console.log(person['name']);

console.log(person["current job"]);
console.log(person.favourite_movie);
console.log(person['favourite_movie']);


// Functions(Methods) inside an object 

console.log(person.printFullName());
console.log(person.getFirstName());



// 👉 Add properties to the object
/* person.cats = ['Antifa', 'Anakin', 'Grogu', 'Mando', 'Jabba', 'Gaza', 'Sabbia', 'Venom', 'Strabi', 'Cookie', 'Tina'] */

person['cats'] = ['Antifa', 'Anakin', 'Grogu', 'Mando', 'Jabba', 'Gaza', 'Sabbia', 'Venom', 'Strabi', 'Cookie', 'Tina']


// 👉 Update properties 
//person.favourite_movie = 'Mandalorian'
person['favourite_movie'] = 'Mandalorian'
// Change the type entirely
person['favourite_movie'] = [person.favourite_movie, 'Mandalorian']

console.log(person);


// 📌 For in loop (objects)


const palla = {
  "prezzo": 12,
  "tipo": "pallina da golf"
};

for (let key in palla) {
  /*   console.log(key);
    console.log(palla);
    console.log(palla[key]); */
  // There is no key called key inside the palla object
  //❌ console.log(palla.key);

  console.log(`${key}: ${palla[key]}`);


}

// 1. key = prezzo -> palla['prezzo']
// 2. key = tipo -> palla['tipo']



// 📌 Complex data types

// Array of arrays
const classes = [
  ['Fabio', 'Mario', 'Luigi'],
  ['Emanuele', 'Giorgio', 'Luigi']
]
console.log(classes);
console.log(classes[0]); //['Fabio', 'Mario', 'Luigi'],
console.log(classes[1]); //['Emanuele', 'Giorgio', 'Luigi']

// Access nested array items
console.log(classes[0][2]); // Luigi
console.log(classes[1][1]); // Giorgio

// Arrays of objects
const movies = [
  {
    id: 1,
    name: 'Star Wars: A New Hope',
    duration: 121,
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Alec Guinness'],
    director: {
      name: 'George',
      lastName: 'Lucas'
    }
  },
  {
    id: 2,
    name: 'The Matrix',
    duration: 136,
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving'],
    director: 'The Wachowskis'
  },
  {
    id: 3,
    name: 'Inception',
    duration: 148,
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy', 'Ellen Page'],
    director: 'Christopher Nolan'
  },
  {
    id: 4,
    name: 'Pulp Fiction',
    duration: 154,
    cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Bruce Willis'],
    director: 'Quentin Tarantino'
  },
  {
    id: 5,
    name: 'The Godfather',
    duration: 175,
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Diane Keaton'],
    director: 'Francis Ford Coppola'
  },
  {
    id: 6,
    name: 'Interstellar',
    duration: 169,
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    director: 'Christopher Nolan'
  }
]

console.log(movies[0]);
console.log(movies[0].name);

const rowEl = document.querySelector('.row')

for (let i = 0; i < movies.length; i++) {
  const thisMovie = movies[i];

  console.log(thisMovie)
  console.log(thisMovie['name']);
  console.log(thisMovie.name);

  const markup = `
    <div class="col">
      <div class="card h-100">
        <h3>${thisMovie.name}</h3>
      </div>
    </div>`

  rowEl.insertAdjacentHTML('beforeend', markup)

}

// complex nested object
const movie = {
  id: 1,
  name: 'Star Wars: A New Hope',
  duration: 121,
  cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Alec Guinness'],
  director: {
    name: 'George',
    lastName: 'Lucas'
  }
}
console.log(movie);


// Access the complex object data
console.log(movie); // object
console.log(movie.cast); // nested array
console.log(movie.cast[1]); //'Harrison Ford'

console.log(movie.director); // nested object
console.log(movie.director.name); // nested object


