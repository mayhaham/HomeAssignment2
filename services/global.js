let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("nav-links");
let darkToggle = document.getElementById("dark-mode-toggle");
let body = document.body;
let icon = darkToggle.querySelector("i");

hamburger.onclick = function () {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
};

darkToggle.onclick = function () {
  if (body.className === "dark-mode") {
    body.className = "";
    icon.className = "fas fa-moon moon-icon";
  } else {
    body.className = "dark-mode";
    icon.className = "fas fa-sun sun-icon";
  }
};
