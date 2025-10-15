console.log('yto');


/* 
Example single field without form

const nameField = document.getElementById('name-field')
console.log(nameField.value);

const clickButton = document.querySelector('button.click')
clickButton.addEventListener('click', ()=>{
  console.log(nameField.value);

})
 */


// Select the dom elements
// - select the form tag
const formEl = document.querySelector('form')
// - select all form fields here
const titleField = document.getElementById('title-field')
const nameField = document.getElementById('name-field')
const companyField = document.getElementById('company-field')
const roleField = document.getElementById('role-field')
const emailField = document.getElementById('email-field')
const phoneField = document.getElementById('phone-field')
const companyPicField = document.getElementById('company-pic-field')
// - select all card fields
const companyEl = document.getElementById('company')
const titleEl = document.getElementById('title')
const nameEl = document.getElementById('name')
const roleEl = document.getElementById('role')
const phoneEl = document.getElementById('phone')
const emailEl = document.getElementById('email')
const companyPicEl = document.getElementById('company-pic')


console.log(formEl, titleField, nameField, companyField, roleField, emailField, phoneField, companyPicField);
console.log(companyEl, titleEl, roleEl, phoneEl, emailEl, companyPicEl);


// Add an eventlistener to the form element
formEl.addEventListener('submit', (event)=>{
  // - prevent the default behaviour
  event.preventDefault()
  console.log(event);
  
  // - read the inputs values
/*   console.log(titleField.value);
  console.log(titleEl.textContent); */

  // - update with those all card elements
  titleEl.textContent = titleField.value
  nameEl.textContent = nameField.value
  companyEl.textContent = companyField.value
  roleEl.textContent = roleField.value
  phoneEl.textContent = phoneField.value
  emailEl.textContent = emailField.value
  companyPicEl.src = companyPicField.value
  
})
