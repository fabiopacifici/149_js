console.log('Js Carousel');


/* # Preparation (select all nodes and make global variables) */
// Create a variable to store an array of objects representing our slider
// - each object should have the following keys: id, image, text
const slides = [
  {
    id: 1,
    image: '01.jpg',
    text: 'Slide 1'
  },
  {
    id: 2,
    image: '02.jpg',
    text: 'Slide 2'

  },
  {
    id: 3,
    image: '03.jpg',
    text: 'Slide 3'

  },
  {
    id: 4,
    image: '04.jpg',
    text: 'Slide 4'

  }, {
    id: 5,
    image: '05.jpg',
    text: 'Slide 5'

  }
]

//console.log(slides);

// Select the following html elements: #active_image, #prev, #next, #thumbnails
const activeSlideEl = document.getElementById('active_image')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
const thumsEl = document.getElementById('thumbnails')
let autoplayId;
// Create a variable where store the `active` value, initialize it to 0
let activeIndex = 0
//console.log(activeSlideEl, prevEl, nextEl, thumsEl, activeIndex);


// Render the active image on the screen
// - (TODO) create a function to add the necessary element on the screen
//activeSlideEl.innerHTML = `<img src="./img/${slides[activeIndex].image}" alt="">`
renderActiveImage(activeSlideEl, slides[activeIndex].image)
renderThumbnails(slides, thumsEl)


// Attach an event listener to the next button using its id #next
// - create the function to navitate the slides froward
// - increment the active image of one
// - if the `active` value is greather than the array length
// - set `active` to zero
// - render the active image
nextEl.addEventListener('click', next)

// Attach an event listener to the prev button using its id #prev
// - decrement the active image
// - if the `active` is less than zero
// - set active image to the last array's index

prevEl.addEventListener('click', prev)




// (Bonus) Let the slider autoplay on page load

// - set an interval with setInterval so that the next function is called every 3 seconds
autoplayId = setInterval(next, 3000)

// - attach an event listener to the active_slide so that when mouse enters the interval is stopped using clearInterval
activeSlideEl.addEventListener('mouseenter', stopAutoplay)
// - attach another event listener to the actvie slide so that when mouse leaves the interval starts again
activeSlideEl.addEventListener('mouseleave', restartAutoplay)


/* Functions */
function renderActiveImage(activeSlideEl, image) {
  activeSlideEl.innerHTML = `<img src="./img/${image}" alt="">`
}

function renderThumbnails(slides, thumsEl) {
  // (bonus) Render the thumbnails underneath the active image
  // - loop over the array of slides
  // - for each slide generate the corresponding thumbnail

  // - create a function to render the thumbs
  for (let i = 0; i < slides.length; i++) {
    const thisThumb = slides[i];
    console.log(thisThumb);
    // - use the DOM API to create each thumb html nodes
    const thumbImageEl = document.createElement('img')
    // <img src="./img/01.jpg" alt="">
    thumbImageEl.src = `./img/${thisThumb.image}`
    thumbImageEl.alt = thisThumb.text
    console.log(thumbImageEl);

    // Make the thumb clickable
    // - attach an eventlistener on click to trigger an action
    // - when a thumb is clicked set the `active` variable to the clicked thumd index
    thumbImageEl.addEventListener('click', function () {
      //console.log(i, this);
      activeIndex = i
      renderActiveImage(activeSlideEl, slides[activeIndex].image)

    })

    thumsEl.appendChild(thumbImageEl)
  }
}

function next() {
  console.log('Clicked', activeIndex);
  ++activeIndex;
  console.log(activeIndex);
  if (activeIndex >= slides.length) {
    activeIndex = 0
  }

  // Render the active image on the screen
  // - (TODO) create a function to add the necessary element on the screen
  renderActiveImage(activeSlideEl, slides[activeIndex].image)

}

function prev() {
  console.log('Clicked', activeIndex);
  --activeIndex

  if (activeIndex < 0) {
    activeIndex = slides.length - 1
  }

  renderActiveImage(activeSlideEl, slides[activeIndex].image)
}

function stopAutoplay() {

  clearInterval(autoplayId)

}

function restartAutoplay() {
  //console.log('start the autoplay');
  autoplayId = setInterval(next, 3000)

}