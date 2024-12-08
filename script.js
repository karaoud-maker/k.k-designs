const carousel = document.querySelector('.carousel');
let rotation = 0;

function rotateCarousel() {
  rotation += 45; // Adjust rotation angle
  carousel.style.transform = `rotateY(${rotation}deg)`;
}

setInterval(rotateCarousel, 3000); // Rotate every 3 seconds
