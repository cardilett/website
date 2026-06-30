import { describe, it, expect } from 'vitest';
import { readTree } from './_helpers';

/**
 * Site-wide checks from Hayat's review document (Part 1).
 * Each test asserts the DESIRED end-state. Green = already done, red = still to do.
 */
describe('Global / site-wide (Hayat Part 1)', () => {
  const src = readTree('src');

  it('[#1] no em-dash (—, U+2014) appears anywhere in src/**', () => {
    const offenders = Object.entries(src)
      .filter(([, text]) => text.includes('—'))
      .map(([path]) => path);
    expect(offenders, `em-dash found in: ${offenders.join(', ')}`).toEqual([]);
  });

  it('[#3] uses "Contact us" (lowercase u), never "Contact Us"', () => {
    const offenders = Object.entries(src)
      .filter(([, text]) => text.includes('Contact Us'))
      .map(([path]) => path);
    expect(offenders, `"Contact Us" found in: ${offenders.join(', ')}`).toEqual([]);
  });
});
