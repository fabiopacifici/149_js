console.log('It works');

/* 


- Scrivi un programma che stampi i numeri da 1 a 100,
- per i multipli di 3 stampi “Fizz” al posto del numero 
- per i multipli di 5 stampi Buzz.
- per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


Tools: 
- for loop
- const/let
- if/else if/ else
- aritmetic operators %
- relational operator
- logical operator AND

*/


// Scrivi un programma che stampi i numeri da 1 a 100
// - Creo un ciclo for per iterare i numeri fino a 100
for (let i = 1; i <= 100; i++) {
  // Verifico se il numro in questa iterazione e' multiplo di 3 che di 5 stampi (o multiplo 15)
  // - stampo fizz buzz
  // i % 3 === 0 && i % 5 === 0
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    // Verifico se il numero e' multiplo di 3
    // - stampi “Fizz” al posto del numero
    console.log('Fizz');
  } else if (i % 5 === 0) {
    // verifico per il numero e' multiplo di 5
    // - stampi Buzz.
    console.log('Buzz');
  } else {
    // Altrimenti stampo il numero
    console.log(i);
  }
}



