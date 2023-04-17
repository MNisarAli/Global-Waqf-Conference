// Select hamburger button and navigation menu.
const hamburgerButton = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('#navigation-menu');
const body = document.querySelector('body');

// Toggle the navigation menu when the hamburger button is clicked.
hamburgerButton.addEventListener('click', () => {
  const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
  hamburgerButton.setAttribute('aria-expanded', !expanded);
  navigationMenu.classList.toggle('active');
  body.classList.toggle('active');
});

// Close the navigation menu when a link is clicked.
const links = document.querySelectorAll('.nav-item');
links.forEach((link) => link.addEventListener('click', () => {
  hamburgerButton.setAttribute('aria-expanded', false);
  navigationMenu.classList.remove('active');
  body.classList.remove('active');
}));
