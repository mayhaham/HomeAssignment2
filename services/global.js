function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("nav-open");
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = "🌙";
  } else {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️";
  }
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
