function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateRandomNumbers(limit, min, max) {
  const generatedNumbers = []
  for (let i = 0; i < limit; i++) {
    // - generate a random number using the getRandomNumber
    const randomNumber = getRandomNumber(min, max)
    // - push into the array the generated number if not included
    if (!generatedNumbers.includes(randomNumber)) {
      generatedNumbers.push(randomNumber)
    } else {
      i--
    }
  }
  console.log(generatedNumbers);
  return generatedNumbers
}


function checkNumbers(inputs, numbers) {
  let guessedNumbers = []

  for (let i = 0; i < inputs.length; i++) {
    const inputValue = Number(inputs[i].value.trim());
    if (isNaN(inputValue)){
      // do something
      console.log('This field is nan');
      // the input is here
      console.log(inputs[i]);
      
      
    }
    console.log(inputs[i]);
    
    console.log(inputValue);

    if (numbers.includes(inputValue)) {
      guessedNumbers.push(inputValue)
    }

  }
  return guessedNumbers
}


function startTimer() {

  // Dopo 30 secondi i numeri scompaiono 
  numberEl.innerHTML = ''
  // change the messge shown to the user
  userMessage.innerHTML = 'Type the nunbers below'
  // appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
  formContainerEl.classList.remove('d-none')


}


function handleFormSumbit(e) {
  e.preventDefault()

  const inputs = e.target.querySelectorAll('input')
  console.log(inputs);

  let guessedNumbers = checkNumbers(inputs, generatedNumbers)

  console.log(guessedNumbers);
  const totalGuessed = guessedNumbers.length
  // - read all inputs values from the form

  // - check if each of the numbers if in the generated numbers array
  resultEl.innerHTML = `You guessed: ${totalGuessed} - numbers: ${guessedNumbers}`

}

/* 

**BONUS:**
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. 

*/

/* 

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// Visualizzare in pagina 5 numeri casuali. (function for Math.random() from w3s)
// - grab math random function from w3s to generate the random numbers
// loop for five iterations 
// make a variable to hold the new array with five numbers
// make a function for the numbers generation it should return the array of numbers
// - invoke the function to get the numberrs
const generatedNumbers = generateRandomNumbers(5, 1, 10)
console.log(generatedNumbers);

// Select the dom node
// - update the innerhtml with the generated numbers
const numberEl = document.getElementById('numbers')
// - select the user message field
const userMessage = document.getElementById('user-message')
// update the number el with the numbers generated
numberEl.innerHTML = generatedNumbers
// select the form container
const formContainerEl = document.getElementById('form-container')
// select the form
const formEl = document.querySelector('form')
const resultEl = document.getElementById('result')

// Start the timer
// Da lì parte un timer di 30 secondi.
// - setInteval for a countdonw
// when the count down is zero show the input
setTimeout(startTimer, 3000)
// Add a submit event listener to the formEl
formEl.addEventListener('submit', handleFormSumbit)



// Dopo che sono stati inseriti i 5 numeri,
// - il software dice quanti e quali dei numeri da indovinare sono stati individuati.