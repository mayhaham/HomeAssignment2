var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("nav-links");

hamburger.onclick = function () {
  if (navLinks.className === "nav-links") {
    navLinks.className = "nav-links nav-open";
  } else {
    navLinks.className = "nav-links";
  }
};

var darkToggle = document.getElementById("dark-mode-toggle");
var body = document.body;

darkToggle.onclick = function () {
  if (body.className === "dark-mode") {
    body.className = "";
    darkToggle.innerHTML = '<i class="fas fa-moon moon-icon"></i>';
  } else {
    body.className = "dark-mode";
    darkToggle.innerHTML = '<i class="fas fa-sun sun-icon"></i>';
  }
};
