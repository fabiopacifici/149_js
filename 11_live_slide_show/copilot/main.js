console.log('Js Carousel');

// Create a variable to store an array of objects representing our slider

// Slider data: each item has id, image (path), text
const slides = [
	{ id: 1, image: './img/01.jpg', text: 'Slide 1' },
	{ id: 2, image: './img/02.jpg', text: 'Slide 2' },
	{ id: 3, image: './img/03.jpg', text: 'Slide 3' },
	{ id: 4, image: './img/04.jpg', text: 'Slide 4' },
	{ id: 5, image: './img/05.jpg', text: 'Slide 5' }
];

// Select DOM nodes
const activeContainer = document.getElementById('active_image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const thumbnailsContainer = document.getElementById('thumbnails');

// active index
let active = 0;

// render the active slide into #active_image
function renderActive() {
	// clear
	activeContainer.innerHTML = '';

	const slide = slides[active];

	const img = document.createElement('img');
	img.src = slide.image;
	img.alt = slide.text;
	img.dataset.index = active;
	console.log(img);
	
	activeContainer.appendChild(img);

	// update thumbnails active state
	updateThumbnails();
}

// render thumbnails
function renderThumbnails() {
	thumbnailsContainer.innerHTML = '';

	slides.forEach((s, index) => {
		const thumb = document.createElement('img');
		thumb.src = s.image;
		thumb.alt = s.text;
		thumb.className = 'thumb';
		thumb.dataset.index = index;
		thumb.style.cursor = 'pointer';
		thumb.addEventListener('click', () => {
			active = index;
			renderActive();
		});

		thumbnailsContainer.appendChild(thumb);
	});

	updateThumbnails();
}

function updateThumbnails() {
	const thumbs = thumbnailsContainer.querySelectorAll('.thumb');
	thumbs.forEach((t) => {
		t.classList.remove('active');
		if (Number(t.dataset.index) === active) t.classList.add('active');
	});
}

// navigation
function showNext() {
	active = active + 1;
	if (active >= slides.length) active = 0;
	renderActive();
}

function showPrev() {
	active = active - 1;
	if (active < 0) active = slides.length - 1;
	renderActive();
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Autoplay (bonus)
let intervalId = null;
function startAutoplay() {
	if (intervalId) return;
	intervalId = setInterval(showNext, 3000);
}

function stopAutoplay() {
	if (!intervalId) return;
	clearInterval(intervalId);
	intervalId = null;
}

// pause on hover over activeContainer
activeContainer.addEventListener('mouseenter', stopAutoplay);
activeContainer.addEventListener('mouseleave', startAutoplay);

// initial render
renderThumbnails();
renderActive();
startAutoplay();
