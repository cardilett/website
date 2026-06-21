'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  target: number;
  suffix: string;
  label: string;
}

export default function StatCounter({ target, suffix, label }: Props) {
  const [count, setCount] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const duration = 2000;
        const start = performance.now();

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat reveal" ref={wrapperRef}>
      <div className="stat__num">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
