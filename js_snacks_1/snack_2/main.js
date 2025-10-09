/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const first_word =  'Gaza' //prompt('Type a word')
const second_word = 'Gaza' //prompt('Type a word') 


if(first_word.length > second_word.length) {
  console.log(`The second word ${second_word} - the first ${first_word}`); 
} else if (second_word.length > first_word.length){
  console.log(`The first word ${first_word} - the second ${second_word}`);
} else {
  console.log('Same length', first_word, second_word); 
}