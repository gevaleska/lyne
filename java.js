
const texts = [
  "Lyne Digital",
  "Digital Creative Service",
  "Solusi kreatif untuk website, media, dan konten Anda."
];

let currentIndex = 0;

function rotateText() {
  const textElement = document.getElementById("rotating-text");
  if (!textElement) return; // jaga-jaga

  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = texts[currentIndex];
    textElement.style.opacity = 1;
    currentIndex = (currentIndex + 1) % texts.length;
  }, 300);
}

setInterval(rotateText, 3000);

document.addEventListener("DOMContentLoaded", () => {
  setInterval(rotateText, 3000);
});


document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slider = document.querySelector(".portfolio-slider");
  const totalSlides = document.querySelectorAll(".portfolio-slide").length;

  function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Biar fungsi bisa dipanggil dari tombol HTML
  window.moveSlide = moveSlide;
});


