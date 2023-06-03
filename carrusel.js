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

//                PROYECTS CARROUSEL

// const imagesProject = ['./files/Proyects/FindYourPerrito-Title.JPG', './files/Proyects/BOOKS4ALL.png', './files/Proyects/study-with-pomo.JPG' ];
// const projects = [
//   {image: './files/Proyects/FindYourPerrito-Title.JPG', link:'https://find-your-perrito-client.vercel.app'}, 
//   {image: './files/Proyects/BOOKS4ALL.png', link: 'https://books4-all-front.vercel.app'},
//   {image: './files/Proyects/study-with-pomo.JPG', link: 'https://study-with-pomo.vercel.app'}
// ]
// let projectIndex = 0;

// const next = document.getElementById('next-button-Project');
// const prev = document.getElementById('prev-button-Project');
// const project = document.getElementById('carousel-image-Project');
// const proj = document.getElementById('0');

// next.addEventListener('click', handleNext);
// prev.addEventListener('click', handlePrev);

// updateImage(project);

// function handleNext() {
//   projectIndex = (projectIndex + 1) % imagesProject.length;
//   updateImage(project);
// }

// function handlePrev() {
//   projectIndex = (projectIndex - 1 + imagesProject.length) % imagesProject.length;
//   updateImage(project);
// }

// function updateImage(imageElement) {
//   imageElement.src = projects[projectIndex].image;
//   proj.href = projects[projectIndex].link;
// }