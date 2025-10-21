console.log('it works');
const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function memberMarkup(member){
  const { name, role, image } = member
  console.log(name, role, image);

  const markupString = `
  <div class="col">
    <div class="card">
      <img class="card-img-top" src="./assets/img/${image}" alt="">
      <div class="card-body">
        <h3>${name}</h3>
        <div>${role}</div>
      </div>
    </div>
  </div>`
  return markupString

}

function renderCards(domEl, teamMembers){
  
  
  
  let colsStrings = ''
  
  // loop over the array
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    //console.log(thisMember);
    
    
    
    const markupString = memberMarkup(thisMember)
   
    //console.log(markupString);
    colsStrings += markupString
    
  }
  
  //console.log(colsStrings);

  
  domEl.innerHTML = colsStrings
}


// select the dom node where insert the columns
const rowEl = document.querySelector('#members .row')
console.log(rowEl);
const formEl = document.querySelector('form')
const nameField = document.getElementById('name')
const roleField = document.getElementById('role')
const imageField = document.getElementById('image')

// Initialise the application
renderCards(rowEl, teamMembers)


// Add items dynamically
formEl.addEventListener('submit', function(e){
  e.preventDefault()

  console.log(nameField.value, roleField.value, imageField.value);
  const name = nameField.value
  const role = roleField.value
  const image = imageField.value

  // ES6 Sintax for objects literal
  const newMember = {
    name, 
    role, 
    image
  }

  console.log(newMember);
  
  teamMembers.push(newMember)
  console.log(teamMembers);
  renderCards(rowEl, teamMembers)

  // clean the inputs
  nameField.value = ''
  roleField.value = ''
  imageField.value = ''

})


