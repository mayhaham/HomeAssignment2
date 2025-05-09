var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("nav-links");
var darkToggle = document.getElementById("dark-mode-toggle");
var body = document.body;

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
  } else {
    body.className = "dark-mode";
  }
};
