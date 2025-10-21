# Image Slideshow

This document serves as outline for the image slider.

## Pseudo code Slider

console.log('Js Carousel');

// Create a variable to store an array of objects representing our slider

// - each object should have the following keys: id, image, text

// Select the following html elements: #active_slide, #prev, #next, #thumbnails
// Create a variable where store the `active` value, initialize it to 0

// Render the active image on the screen
// - create a function to add the necessary element on the screen

// (bonus) Render the thumbnails underneath the active image
// - create a function to render the thumbs
// - use the DOM API to create each thumb html nodes
// - attach an eventlistener on click to trigger an action
// - when a thumb is clicked set the `active` variable to the clicked thumd index

// Attach an event listener to the next button using its id #next
// - create the function to navitate the slides froward
// - increment the active image of one
// - if the `active` value is greather than the array length
// - set `active` to zero
// - render the active image

// Attach an event listener to the prev button using its id #prev
// - decrement the active image
// - if the `active` is less than zero
// - set active image to the last array's index

// (Bonus) Let the slider autoplay on page load
// - set an interval with setInterval so that the next function is called every 3 seconds
// - attach an event listener to the active_slide so that when mouse enters the interval is stopped using clearInterval
// - attach another event listener to the actvie slide so that when mouse leaves the interval starts again

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  

  <main class="container">

      <div id="active_image">
        <img src="./img/01.jpg" alt="">
      </div>
      <button id="prev">prev</button>
      <button id="next">next</button>
      <div id="thumbnails">
      </div>

  </main>



</body>
</html>
```

```css

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

.container
{
  width: 70%;
  max-width: 1176px;
  margin: auto
}


#thumbnails
{
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 140px
  }
}


```
