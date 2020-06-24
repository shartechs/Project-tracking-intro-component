// Variables //
const hamburger = document.getElementById("hamburger");
const { body } = document;

// Mobile menu //
hamburger.addEventListener("click", () => {
  body.classList.toggle("show-nav");
});
