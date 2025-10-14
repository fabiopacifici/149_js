/* Scrivi una funzione che accetti:
- una stringa contenente un nome 
- restituisca un saluto seguito dal nome fornito. 


Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greet(name){
  // year,month,day,hours
  const now = new Date()
  now.setHours(2)
  console.log(now);
  
  const hour = now.getHours()
 
  let message // undefined

  if( hour >=5 && hour <= 13) {
    message = 'Buongiorno'
  } else if ( hour > 13 && hour < 17) {
    message = 'Buonpomeriggio'
  } else if (hour >= 17) {
    message = 'Buonasera'
  } else {
    message = 'Buonanotte'
  }
  

  
  return `${message} ${name}`

}

// Invoca la funzione qui e stampa il risultato in console
const greetings = greet(name)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(greetings);

