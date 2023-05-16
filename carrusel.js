const images = ['./certificates/henryCertificate.JPG', './certificates/EFSET_Certificate.JPG'];
const certificates = [
  {image: './certificates/henryCertificate.JPG', link:'https://certificates.soyhenry.com/new-cert?id=32fcafea6c28a1df17ef7984d43235e80183be429a9d618508b4bae40a3788cd'}, 
  {image: './certificates/EFSET_Certificate.JPG', link: 'https://www.efset.org/cert/DpiorT'}
]
let currentIndex = 0;

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const image = document.getElementById('carousel-image');
const Certi = document.getElementById('0');

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
  imageElement.src = certificates[currentIndex].image;
  Certi.href = certificates[currentIndex].link;
}