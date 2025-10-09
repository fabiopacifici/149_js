/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
console.log('it works');


// Il software deve chiedere per 10 volte all’utente di inserire un numero.


let sum = null

for (let i = 0; i < 3; i++) {

  console.log('it is repeated');
  const user_number = Number(prompt('type a number'))
  console.log(user_number);
  sum += user_number // sum = sum + user_number
}

console.log(sum);
