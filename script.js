// Mobile navigation toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll with offset for sticky header
function smoothScrollTo(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length === 1) return;
    e.preventDefault();
    smoothScrollTo(href);
    // Close menu on mobile after navigation
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggleButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Contact: copy email to clipboard
const copyEmailButton = document.getElementById('copy-email');
if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.getAttribute('data-copy') || '';
    try {
      await navigator.clipboard.writeText(email);
      const original = copyEmailButton.textContent;
      copyEmailButton.textContent = 'Copied!';
      setTimeout(() => { copyEmailButton.textContent = original; }, 1500);
    } catch (err) {
      window.prompt('Copy this email:', email);
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}


