import { describe, it, expect } from 'vitest';
import { readSrc } from './_helpers';

const css = readSrc('src/app/globals.css');

describe('Navbar (Hayat Part 1)', () => {
  // [#13] Hayat prefers the top banner NOT be transparent. The desired end-state
  // is a fully opaque navbar background. Today the nav is semi-transparent
  // (rgba alpha 0.72 / 0.88), so this asserts that no translucent navbar
  // background remains — it will be RED until the change is made.
  it('[#13] navbar background is opaque (no translucent rgba on .nav)', () => {
    const navBlock = css.match(/\.nav\s*\{[\s\S]*?\}/)?.[0] ?? '';
    const scrolledBlock = css.match(/\.nav\.is-scrolled\s*\{[\s\S]*?\}/)?.[0] ?? '';
    const translucent = /rgba\(\s*251,\s*248,\s*243,\s*0?\.\d+\s*\)/;
    expect(translucent.test(navBlock), '.nav still uses a translucent background').toBe(false);
    expect(translucent.test(scrolledBlock), '.nav.is-scrolled still uses a translucent background').toBe(
      false,
    );
  });

  // [#2] "Make the logo a size or two smaller." The logo is an <img> sized via
  // .nav__brand-logo height. This is a soft/subjective check: assert the desktop
  // logo height is smaller than today's 72px. Adjust the threshold to whatever
  // size is agreed with Hayat.
  it('[#2] desktop logo height is reduced below the current 72px', () => {
    const block = css.match(/\.nav__brand-logo\s*\{[\s\S]*?\}/)?.[0] ?? '';
    const height = Number(block.match(/height:\s*(\d+)px/)?.[1] ?? NaN);
    expect(Number.isFinite(height), 'could not read .nav__brand-logo height').toBe(true);
    expect(height).toBeLessThan(72);
  });
});
