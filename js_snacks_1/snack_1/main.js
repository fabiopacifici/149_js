/* 

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

const first_number =  10 //Number(prompt('Type your first number'))
const second_number = 2 //Number(prompt('Type your second number'))



if(first_number > second_number){
  console.log(`The number ${first_number} is greather than ${second_number}`);
  
} else if(second_number > first_number) {
  console.log(`The number ${second_number} is greather than ${first_number}`);

} else {
  console.log(`The number ${second_number} is equal to ${first_number}`);
}
