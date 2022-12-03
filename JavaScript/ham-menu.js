const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-item');
links.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));
