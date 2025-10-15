console.log('it works');
/* 
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...

*/


/* 

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

// create a variable to store the image element
const imageEl = document.querySelector('img')
console.log(imageEl);
const imageOn = './assets/img/yellow_lamp.png'
const imageOff = './assets/img/white_lamp.png'

// create a variable to store the button element
const buttonEl = document.querySelector('button')
console.log(buttonEl);

// Add an event listener for clicks to the button
buttonEl.addEventListener('click', function(){
  // - read the src value of the image
  //const imageSrc = imageEl.src
  //console.log(imageSrc);
  //console.log(imageEl.src);
  // - replace the src value with the yellow image
  //imageEl.src = imageOn
  // replace the content of the button when the bulb is on
  //buttonEl.textContent = 'Spengi'
  
  // if the image's `src` includes white
  // buttonEl.textContent.includes('Accendi')
  if(imageEl.src.includes('white')){
    // - turn on the ligth
    // - replace the src with the imageOn
    imageEl.src = imageOn
    // - change the button text to Spengi
    buttonEl.textContent = 'Spengi'

  } else {
    // Otherwise
    // - turn off the light
    // - replace the src with the imageOff
    // - replace the button text to Accendi
    // - replace the src with the imageOn
    imageEl.src = imageOff
    // - change the button text to Spengi
    buttonEl.textContent = 'Accendi'
  }
    
})

