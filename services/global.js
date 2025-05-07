const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const darkToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (hamburger && navLinks && darkToggle) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  darkToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    const icon = darkToggle.querySelector('i');

    if (icon) {
      icon.classList.toggle('fa-moon', !isDark);
      icon.classList.toggle('fa-sun', isDark);
      icon.classList.toggle('moon-icon', !isDark);
      icon.classList.toggle('sun-icon', isDark);
    }
  });
}
