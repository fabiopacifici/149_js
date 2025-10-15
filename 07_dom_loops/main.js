console.log('It works');


const moviesList = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Forrest Gump',
  'Inception',
  'The Matrix',
  'Fight Club',
  'The Lord of the Rings: The Return of the King',
  'Interstellar'
]

const listEl = document.getElementById('list')
//  📌With template literal
// Add a variable to hold the list items
let items = ''
// loop over the array of items
for (let i = 0; i < moviesList.length; i++) {
  // - save the current item into a variable
  const thisMovie = moviesList[i]
  // - create the list item markup and plance the varaible into it
  // const li = `<li class='list-item'>${thisMovie}</li>`
  items += `<li class='list-item'>${thisMovie}</li>`
}
// Update the listEl inner html adding the list items
console.log(items);

listEl.innerHTML = items



// Dom API
for (let i = 0; i < moviesList.length; i++) {
  const movie = moviesList[i];
  const li = document.createElement('li')
  li.append(movie)
  console.log(li);
  li.addEventListener('click', () => console.log('clicked'))
  listEl.appendChild(li)


}

/* Print a long markup */


const rowEl = document.querySelector('.row')
console.log(rowEl);
let colItems = ''
for (let i = 0; i < moviesList.length; i++) {
  const movie = moviesList[i];
  const cardMarkup = `
        <div class="col-12">
          <div class="card h-100">
            <img src="" alt="" class="card-img-top">
            <div class="card-body">
              <h3>${movie}</h3>
            </div>
          </div>
        </div>
      `
  colItems += cardMarkup

}


rowEl.innerHTML = colItems




const tvList = [
  'Breaking Bad',
  'Game of Thrones',
  'The Wire',
]
let tvItems = ''
for (let i = 0; i < tvList.length; i++) {
  const tvShow = tvList[i];
  const cardMarkup = `
        <div class="col-12 col-md-4">
          <div class="card h-100">
            <img src="" alt="" class="card-img-top">
            <div class="card-body">
              <h3>${tvShow}</h3>
            </div>
          </div>
        </div>
      `

  tvItems += cardMarkup

}


rowEl.innerHTML = tvItems


const cards = document.querySelectorAll('.card')
console.log(cards);
