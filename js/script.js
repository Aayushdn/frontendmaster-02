const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  hamburger.classList.toggle("open");
});
