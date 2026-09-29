const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const setTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
};

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme('light');
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all the fields before sending.');
      return;
    }

    alert(`Thanks ${name}! Your message has been captured for follow-up.`);
    contactForm.reset();
  });
}
