const images = ['./certificates/henryCertificate.JPG', './certificates/EFSET_Certificate.JPG'];
let currentIndex = 0;

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const image = document.getElementById('carousel-image');

nextButton.addEventListener('click', handleNext);
prevButton.addEventListener('click', handlePrev);

updateImage(image);

function handleNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(image);
}

function handlePrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(image);
}

function updateImage(imageElement) {
  imageElement.src = images[currentIndex];
}