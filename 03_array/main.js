console.log('It works');



const movies = [
  'Starwars',
  'Matrix',
  'Avatar'

]

const numbers = [
  1,
  2,
  3,
  4,
  5
]

// lenght 5
// last index: 4
// numbers.length - 1

console.log(numbers);

console.log(movies);

// Read arrays elements
console.log(movies[0]);
const matrix = movies[1]
console.log(matrix);



// Array's methods
console.log(movies.length); // 3

// Add to the end
movies.push('Imitation game')
console.log(movies);

// Add to the beginning
movies.unshift('Mandalorian')



// Remove the last item
//movies.pop()

// remove the first
//movies.shift()


/* Array looping */

const movie_0 = movies[0]
const movie_1 = movies[1]
const movie_2 = movies[2]
const movie_3 = movies[3]

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);
console.log(movies[5]);

console.log(movies);


for (let i = 0; i < movies.length; i++) {
  const thisMovie = movies[i];
  console.log(thisMovie);
}



for (let i = 0; i < numbers.length; i++){
  const thisNumber = numbers[i]
  
  if(thisNumber % 2 === 0) {
    console.log(`This is even: ${thisNumber}`);
  } else {
    console.log(thisNumber);
  }
  
}



for (let index = array.length - 1; index >= 0; index--) {
  const thisItem = array[index];
  
}