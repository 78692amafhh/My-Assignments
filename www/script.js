// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle && mobileToggle.addEventListener('click', () => {
  const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', String(!expanded));
  if (mobileMenu) {
    if (mobileMenu.hasAttribute('hidden')) {
      mobileMenu.removeAttribute('hidden');
    } else {
      mobileMenu.setAttribute('hidden', '');
    }
  }
});

// Accessible dropdown (Pages)
const pagesBtn = document.getElementById('pagesBtn');
if (pagesBtn) {
  const dropdown = pagesBtn.nextElementSibling;
  pagesBtn.addEventListener('click', (e) => {
    const expanded = pagesBtn.getAttribute('aria-expanded') === 'true';
    pagesBtn.setAttribute('aria-expanded', String(!expanded));
    // toggle attribute on parent for CSS selector
    pagesBtn.parentElement.setAttribute('aria-expanded', String(!expanded));
  });

  // close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      pagesBtn.setAttribute('aria-expanded', 'false');
      pagesBtn.parentElement.setAttribute('aria-expanded', 'false');
    }
  });

  // close when clicking outside
  document.addEventListener('click', (ev) => {
    if (!pagesBtn.parentElement.contains(ev.target)) {
      pagesBtn.setAttribute('aria-expanded', 'false');
      pagesBtn.parentElement.setAttribute('aria-expanded', 'false');
    }
  });
}
