// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.innerHTML = navLinks.classList.contains('open') ? '&times;' : '&#9776;';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.innerHTML = '&#9776;';
  });
});

// ---- Nav background on scroll ----
const nav = document.querySelector('nav');
const floatWhatsapp = document.getElementById('floatWhatsapp');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  nav.classList.toggle('scrolled', scrolled);
  floatWhatsapp.classList.toggle('show', window.scrollY > 400);
});

// ---- Scroll reveal animation ----
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));
