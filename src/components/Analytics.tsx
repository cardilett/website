'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { sendGTMEvent } from '@next/third-parties/google';

/**
 * Section-level analytics.
 *
 * Page views are already captured by GA4 Enhanced Measurement (which tracks
 * browser-history changes, including App Router client navigations), so we do
 * NOT emit a custom page_view here — that would double-count.
 *
 * What GA4 can't do on its own is tell you which *section* of a page people
 * actually reached. This reports a `section_view` to the GTM dataLayer the
 * first time each identified section scrolls into view, so GA4 can rank the
 * most-viewed sections per page. See ANALYTICS.md for the GTM/GA4 setup.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const seen = new Set<string>();

    const labelFor = (el: HTMLElement) =>
      el.querySelector('.eyebrow')?.textContent?.trim() ||
      el.querySelector('h2, h3')?.textContent?.trim() ||
      el.id;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting || seen.has(el.id)) continue;
          seen.add(el.id);
          io.unobserve(el);
          sendGTMEvent({
            event: 'section_view',
            section_id: el.id,
            section_name: labelFor(el),
            page_path: pathname,
          });
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
