const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
//const reversedTeachers = teachers.reverse()
//console.log(reversedTeachers);

for(let i = teachers.length - 1; i >= 0; i--){
  const thisTeacher = teachers[i]
  console.log(thisTeacher);
  reversedTeachers.push(thisTeacher)
}
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(let i = 0; i < teachers.length; i++){
  console.log(teachers[i]);
  const thisTeacher = teachers[i]

  if(thisTeacher.length >= 5){
    longNames.push(thisTeacher)
  }

}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1)
console.log(teachers);

/* for(let i = 0; i < teachers.length; i++){
  if(teachers[i] === 'Ed'){
    teachers.splice(i, 1)
  }

}

console.log(teachers); */


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
//const isFabioPresent = teachers.includes('Fabio');
let isFabioPresent = null;
for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  
  if(thisTeacher === 'Fabio'){
    console.log('I found Fabio');
    isFabioPresent = true
    break;
  }
}
console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

console.log(teachers.join(', '));


let teachersString = '';
for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  //console.log(thisTeacher);
  //teachersString +=  thisTeacher

  /* if(i < teachers.length - 1) {
    teachersString += ', '
  }
   */

/*   if(i === teachers.length - 1) {
    teachersString = teachersString + thisTeacher 
  } else {
    teachersString = teachersString + thisTeacher + ', '
  } */
  
}

console.log(teachersString);
