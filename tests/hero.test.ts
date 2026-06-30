import { describe, it, expect } from 'vitest';
import { readSrc } from './_helpers';

const hero = readSrc('src/components/Hero.tsx');

// The five stat boxes Hayat specified, in order. Labels in source carry an
// explicit "\n" line break; we match on the visible words, ignoring that break.
const EXPECTED_STATS = [
  { num: '100', suffix: '%', label: 'Emirati-owned & led company' },
  { num: '20', suffix: '+', label: 'Years of experience' },
  { num: '10', suffix: '+', label: 'Industries served across the globe' },
  { num: '100 to 20k', suffix: '+', label: 'Workforce-size management' },
  { num: '15', suffix: '+', label: 'Countries labour law expertise' },
];

describe('Hero section (Hayat Part 1)', () => {
  it('[#4] sub-headline is the "Partnering with government entities…UAE’s vision." copy', () => {
    const normalised = hero.replace(/\s+/g, ' ');
    expect(normalised).toContain(
      'Partnering with government entities, organizations and employees towards overall ' +
        'enhancement, progression and prosperity in alignment with the UAE’s vision.',
    );
  });

  it('[#5] hero shows exactly the five specified stat boxes, in order', () => {
    // Pull the TRUST array body out of the source.
    const arrayMatch = hero.match(/const TRUST\s*=\s*\[([\s\S]*?)\];/);
    expect(arrayMatch, 'TRUST array not found in Hero.tsx').toBeTruthy();
    const body = arrayMatch![1];
    const flattened = body.replace(/\\n/g, ' ').replace(/\s+/g, ' ');

    const entryCount = (body.match(/\bnum:/g) ?? []).length;
    expect(entryCount, 'hero should have exactly 5 stat boxes').toBe(EXPECTED_STATS.length);

    for (const stat of EXPECTED_STATS) {
      expect(flattened, `missing num "${stat.num}"`).toContain(`num: '${stat.num}'`);
      expect(flattened, `missing label "${stat.label}"`).toContain(stat.label);
    }
  });
});
