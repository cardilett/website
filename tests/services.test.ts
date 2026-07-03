import { describe, it, expect } from 'vitest';
import { readSrc } from './_helpers';

const services = readSrc('src/components/Services.tsx');
const flat = services.replace(/\s+/g, ' ');

describe('Services section heading (Hayat Part 1)', () => {
  it('[#14] heading reads "A Human Resources advisory and consultancy" (not "A complete HR advisory stack")', () => {
    expect(flat).toContain('A Human Resources advisory and consultancy');
    expect(flat, 'old heading still present').not.toContain('A complete HR advisory stack');
  });

  it('[#15] heading emphasis reads "bank of solutions" (not "everything but recruitment.")', () => {
    expect(flat).toContain('bank of solutions');
    expect(flat, 'old emphasis still present').not.toContain('everything but recruitment.');
  });

  it('[#16] practice-areas sentence says "global best-practice" (not "a global firm")', () => {
    expect(flat).toContain('the rigor of global best-practice');
    expect(flat, 'old wording "a global firm" still present').not.toContain('the rigor of a global firm');
  });
});
