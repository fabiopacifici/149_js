console.log('it works');
/* 📌 DOM Manipulation */
// log the document 
console.dir(document);

// 👉 select an element by its ID 
/* const menuEl = document.getElementById('menu')
console.dir(menuEl); */



// 👉 select by class (with query selector)
// ⚠️ Selects only the first occurrence

/* const textEl = document.querySelector('section.text')
console.log(textEl);
console.dir(textEl)
console.log(typeof textEl);

const headerEl = document.querySelector('header')
console.log(headerEl.innerHTML);
console.dir(headerEl); */

// HTML Attrubutes 
/* const imgEl = document.querySelector('img')
console.log(imgEl);
console.log(imgEl.alt);
console.log(imgEl.src);
 */

// 👉 innerHTML
// read
/* let menuHtml = menuEl.innerHTML
console.log(menuHtml); */

// write
/* menuEl.innerHTML = '<a class="item" href="">Fabio</a>'
menuEl.innerHTML += `
<ul>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ul> */

/* 

console.log(menuEl.className)

menuEl.style.backgroundColor = 'red' */


// Class list vs Class name
//menuEl.classList.add('fabio')
//menuEl.classList.remove('fabio')
/* menuEl.classList.toggle('fabio')
console.log(menuEl.classList.contains('fabio'))
 */
/* 
// class name
console.log(menuEl.className)

// replace the content
menuEl.className = ' fabioo' // fabio

// aggiunta
menuEl.className += ' fabioo' // keeps the existing classes and adds fabiooo */

// 📌 Add event listener
// save the dom element into a variable
/* const buttonEl = document.querySelector('header > button.btn')
console.log(buttonEl); */

// 👉 With the function name as handler
// add the event listener (click)
/* buttonEl.addEventListener("click", handleClick)


function handleClick(){
  console.log('You clicked the menu button');
}
 */

// 👉 With an anon function

/* buttonEl.addEventListener('click', function(){
  console.log('Your clciked');
  
}) */





// Live coding menu mobile
// the query selectors selects like in CSS
const buttonEl = document.querySelector('header > button.btn')
const menuEl = document.getElementById('menu')
console.log(menuEl);
console.log(buttonEl);

buttonEl.addEventListener('click', () => {
  console.log('clicked');

  // menuEl.classList.toggle('d-none')
  
  // IF the d-none class in included 
  if (menuEl.classList.contains('d-none')) {
    // - remove the class 
    menuEl.classList.remove('d-none')
    buttonEl.innerHTML = '<i class="fa-solid fa-x"></i>'

  } else {
    // Otherwise
    menuEl.classList.add('d-none')
    // - add the class
    buttonEl.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'


})
