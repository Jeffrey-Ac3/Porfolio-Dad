// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal for register entries (with safety fallback)
const entries = document.querySelectorAll('.entry');
if ('IntersectionObserver' in window && entries.length) {
  const observer = new IntersectionObserver((items) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('in-view');
        observer.unobserve(item.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  entries.forEach(entry => observer.observe(entry));

  // Safety net: if something below the fold never triggers (e.g. odd viewport,
  // fast scroll, or full-page capture tools), reveal everything after a short delay.
  window.addEventListener('load', () => {
    setTimeout(() => entries.forEach(entry => entry.classList.add('in-view')), 1200);
  });
} else {
  entries.forEach(entry => entry.classList.add('in-view'));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
