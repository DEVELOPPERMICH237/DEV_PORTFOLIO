// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form handler
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
  e.target.reset();
});