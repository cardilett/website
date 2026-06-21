// Reveal-on-scroll for all .reveal elements
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  els.forEach((el) => io.observe(el));
})();

// Parallax for .parallax-img inside sections
(function initParallax() {
  const imgs = Array.from(document.querySelectorAll('.parallax-img'));
  if (!imgs.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const onScroll = () => {
    for (const img of imgs) {
      const section = img.closest('section');
      if (!section) continue;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -100 || rect.top > vh + 100) continue;
      const progress = (vh - rect.top) / (vh + rect.height);
      img.style.transform = `translateY(${(progress - 0.5) * -60}px) scale(1.05)`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
