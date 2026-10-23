(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add('is-visible'));
  }

  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  // Subtle pointer tilt on desktop cards, disabled for touch/reduced-motion.
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.service-card, .feature-card, .value-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
})();