console.log('It works');

/**
 * Generates random numbers between min and max
 * @param {number} min The min number of the range
 * @param {number} max the max number of the range
 * @returns number
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

// Creare un array di oggetti
// - con le seguenti proprietà: nome e peso.
const bicycles = [
  {
    name: 'Cannondale',
    weight: 10
  },
  {
    name: 'Cannondale',
    weight: 15
  },
  {
    name: 'Cannondale',
    weight: 12
  },
  {
    name: 'Cannondale',
    weight: 8
  },
  {
    name: 'Cannondale',
    weight: 13
  },
  {
    name: 'Cannondale',
    weight: 18
  },
  {
    name: 'Cannondale',
    weight: 20
  },
]

let lightestBike = bicycles[0] /*  {
    name: 'Cannondale',
    weight: 10
  }, */
// loop over the array of items
for (let i = 0; i < bicycles.length; i++) {
  const thisBicycle = bicycles[i]
  /*   console.log(thisBicycle);
    console.log(thisBicycle.name);
    console.log(thisBicycle.weight); */

  // Make the comparison
  console.log(lightestBike.weight, thisBicycle.weight);
  if (thisBicycle.weight < lightestBike.weight) {
    lightestBike = thisBicycle
  }

}


//console.log(`The lightest bike is ${lightestBike.name} weight: ${lightestBike.weight}kg`);


/**
 * Finds the latest bike inside an array
 * @param {Array} bikes The array of bicycles
 * @returns string
 */
function getLightestBike(bikes) {

  let lightestBike = bikes[0] /*  {
    name: 'Cannondale',
    weight: 10
  }, */
  // loop over the array of items
  for (let i = 0; i < bikes.length; i++) {
    const thisBicycle = bikes[i]
    /*   console.log(thisBicycle);
      console.log(thisBicycle.name);
      console.log(thisBicycle.weight); */

    // Make the comparison
    console.log(lightestBike.weight, thisBicycle.weight);
    if (thisBicycle.weight < lightestBike.weight) {
      lightestBike = thisBicycle
    }

  }
  /*   console.log(`The lightest bike is ${lightestBike.name} weight: ${lightestBike.weight}kg`);
   */
  return `The lightest bike is ${lightestBike.name} weight: ${lightestBike.weight}kg`
}


//console.log(getLightestBike(bicycles));

/*

Snack2**
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
const teams = [
  {
    name: 'Team 1',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 2',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 3',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 4',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 5',
    points: 0,
    fauls: 0
  }

]

console.log(teams);





// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Dot notation
teams[0].points // 0
teams[0].fauls // 0

teams[0].points = getRandomNumber(1, 30)  // 0
teams[0].fauls = getRandomNumber(1, 30) // 0

//console.log(teams[0].points, teams[0].fauls);

// Square brakets notation
teams[0]['points']
teams[0]['fauls']

//console.log(teams);


/* 
teams[1].points = getRandomNumber(1, 30)  // 0
teams[1].fauls =  getRandomNumber(1, 30) // 0

console.log(teams[1].points, teams[1].fauls);
*/




for (let i = 0; i < teams.length; i++) {
  const thisTeam = teams[i]
  console.log(thisTeam);


  // Read only
  // with dot notation ?
  thisTeam.points // 0
  thisTeam.fauls // 0
  // with suqre brakets notation ?
  thisTeam['points'] // 0
  thisTeam['fauls'] // 0

  /* for (const key in thisTeam) {
    console.log('KEY is', key);
    if(key==='points' || key === 'fauls'){
      thisTeam[key] = getRandomNumber(1, 200)
    } 
  }
 */
  // Update the value
  thisTeam.points = getRandomNumber(1, 20)
  thisTeam.fauls = getRandomNumber(1, 30)

  // log the data!!
  console.log(thisTeam.points, thisTeam.fauls);



}

console.log(teams);


// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// create a new empty array (the new array to map )
const newTeam = []
// loop over the array of teams
for (let i = 0; i < teams.length; i++){
  // - get the element in this iteration
  const thisTeam = teams[i]
  // - make a new object with only name, fauls
  const newObject = {
    name: thisTeam.name,
    fauls: thisTeam.fauls
  }
  // - push the item inside the new array
  newTeam.push(newObject)
}


console.log(newTeam);

