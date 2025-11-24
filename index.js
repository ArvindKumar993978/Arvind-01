

const slides = document.querySelectorAll(".slider");
const slideWrapper = document.querySelector(".slide");
const dotsContainer = document.querySelector(".dots");
let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  slideWrapper.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}







