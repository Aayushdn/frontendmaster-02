const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
const footDate = document.querySelector(".footDate");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  hamburger.classList.toggle("open");
});

const presentYear = new Date();
footDate.textContent = presentYear.getUTCFullYear();
