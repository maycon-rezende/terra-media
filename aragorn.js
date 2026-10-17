document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = document.querySelectorAll('.reveal');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    sections.forEach(section => observer.observe(section));
  } else {
    sections.forEach(section => section.classList.add('visible'));
  }

  if (reducedMotion) return;
  const atmosphere = document.querySelector('.atmosphere');
  for (let i = 0; i < 22; i++) {
    const mote = document.createElement('i');
    mote.className = 'mote';
    mote.style.left = `${Math.random() * 100}%`;
    mote.style.top = `${Math.random() * 110}%`;
    mote.style.setProperty('--duration', `${9 + Math.random() * 10}s`);
    mote.style.setProperty('--delay', `${-Math.random() * 14}s`);
    mote.style.setProperty('--drift', `${Math.round(Math.random() * 80 - 40)}px`);
    atmosphere.append(mote);
  }
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.querySelector('.royal-cursor');
    document.addEventListener('pointermove', event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      document.body.classList.add('cursor-active');
    });
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('pointerenter', () => cursor.classList.add('over'));
      link.addEventListener('pointerleave', () => cursor.classList.remove('over'));
    });
  }
});
