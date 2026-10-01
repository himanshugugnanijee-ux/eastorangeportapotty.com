const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('details')?.addEventListener('toggle', (event) => {
  if (window.innerWidth <= 800 && !event.target.open) return;
});
