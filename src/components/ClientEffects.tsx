'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  // Reveal-on-scroll for all .reveal elements.
  // Re-runs on route change because the shared (site) layout does not remount,
  // so each new page's .reveal nodes need a fresh observer.
  useEffect(() => {
    const els = document.querySelectorAll<Element>('.reveal');

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
    return () => io.disconnect();
  }, [pathname]);

  // Parallax for section background images
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
    if (!imgs.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
}
