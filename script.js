let slideImage = 0;
const slides = document.querySelectorAll('.carousel-slide');

function moveSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}

function nextSlide() {
  slideImage++;
  if (slideImage >= slides.length) {
    slideImage = 0;
  }
  moveSlide(slideImage);
}

function prevSlide() {
  slideImage--;
  if (slideImage < 0) {
    slideImage = slides.length - 1;
  }
  moveSlide(slideImage);
}

moveSlide(slideImage);


function registration() {
    if (confirm("Apakah yakin ingin mendaftar?")) {
      alert("Terima kasih telah mendaftar!");
    }
  }

  function trash() {
    if (confirm("Apakah yakin ingin menghapus?")) {
    }
  }
  