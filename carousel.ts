// class Carousel {
//     private images: string[];
//     private currentIndex: number;
  
//     constructor(images: string[]) {
//       this.images = images;
//       this.currentIndex = 0;
  
//       const nextButton = document.getElementById('next-button');
//       const prevButton = document.getElementById('prev-button');
//       const image = document.getElementById('carousel-image') as HTMLImageElement;
  
//       nextButton?.addEventListener('click', this.handleNext.bind(this));
//       prevButton?.addEventListener('click', this.handlePrev.bind(this));
  
//       this.updateImage(image);
//     }
  
//     private handleNext() {
//       this.currentIndex = (this.currentIndex + 1) % this.images.length;
//       const image = document.getElementById('carousel-image') as HTMLImageElement;
//       this.updateImage(image);
//     }
  
//     private handlePrev() {
//       this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
//       const image = document.getElementById('carousel-image') as HTMLImageElement;
//       this.updateImage(image);
//     }
  
//     private updateImage(image: HTMLImageElement) {
//       image.src = this.images[this.currentIndex];
//     }
// }
  
// const images = ['./certificates/henryCertificate.JPG', './certificates/EFSET_Certificate.JPG'];
// const carousel = new Carousel(images);