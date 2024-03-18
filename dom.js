let carouselImage = 0;
const carousel = document.querySelectorAll('.carousel-dom');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', prevCarousel);
nextButton.addEventListener('click', nextCarousel);

function moveCarousel(index) {
  carousel.forEach((slide) => {
    slide.style.display = 'none';
  });
  carousel[index].style.display = 'block';
}

function nextCarousel() {
  carouselImage++;
  if (carouselImage >= carousel.length) {
    carouselImage = 0;
  }
  moveCarousel(carouselImage);
}

function prevCarousel() {
  carouselImage--;
  if (carouselImage < 0) {
    carouselImage = carousel.length - 1;
  }
  moveCarousel(carouselImage);
}

moveCarousel(carouselImage);


function registration() {
    if (confirm("Apakah yakin ingin mendaftar?")) {
      alert("Terima kasih telah mendaftar!");
    }
  }

  function trash() {
    if (confirm("Apakah yakin ingin menghapus?")) {
    }
  }