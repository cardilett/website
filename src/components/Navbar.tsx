'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Case-Study' },
  { href: '/contact', label: 'Contact' },
];

const DARK_THEMES = new Set(['indigo', 'indigo-deep', 'crimson']);

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function Navbar() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Preloader — dismiss 500 ms after all assets load
  useEffect(() => {
    const dismiss = () => setTimeout(() => setPreloaderDone(true), 500);
    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
    }
  }, []);

  // Scroll: nav appearance + progress bar + dark-section detection.
  // Re-runs on route change so state recomputes for the new page's sections.
  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('section[data-theme], footer[data-theme]')
      );
      const y = window.scrollY + 70;
      let theme = '';
      for (const s of sections) {
        if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
          theme = s.getAttribute('data-theme') ?? '';
          break;
        }
      }
      setIsDark(DARK_THEMES.has(theme));

      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressRef.current.style.width =
          docHeight > 0 ? `${(window.scrollY / docHeight) * 100}%` : '0%';
      }
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  // Cursor glow on dark sections (pointer devices only)
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window)
      return;

    const onMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;

      const darkSections = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[data-theme="indigo"], [data-theme="indigo-deep"], [data-theme="crimson"]'
        )
      );
      const over = darkSections.some((s) => {
        const r = s.getBoundingClientRect();
        return e.clientY >= r.top && e.clientY <= r.bottom && e.clientX >= r.left && e.clientX <= r.right;
      });
      glow.classList.toggle('is-visible', over);
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const navClass = ['nav', isScrolled && 'is-scrolled', isDark && 'is-dark', isOpen && 'is-open']
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Preloader */}
      <div className={`preloader${preloaderDone ? ' is-done' : ''}`} aria-hidden="true">
        <div className="preloader__mark">
          <img src="/img/logo-combined.png" alt="Cardilett" className="preloader__logo" />
        </div>
      </div>

      {/* Scroll progress */}
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

      {/* Navigation */}
      <header className={navClass} id="nav">
        <div className="nav__inner">
          <Link href="/" className="nav__brand" aria-label="Cardilett home">
            <img src="/img/logo-combined.png" alt="Cardilett" className="nav__brand-logo" />
          </Link>

          <nav className="nav__menu" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={isActive(pathname, href) ? 'is-active' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="nav__cta">
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="nav__drawer">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav__drawer-cta">
            Contact Us →
          </Link>
        </div>
      </header>
    </>
  );
}
