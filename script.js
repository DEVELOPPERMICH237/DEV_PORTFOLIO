
// Safe DOM-ready handlers for footer year and contact form
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thanks! Your message has been sent.');
      e.target.reset();
    });
  }
});