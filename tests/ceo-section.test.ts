import { describe, it, expect } from 'vitest';
import { readSrc, readTree } from './_helpers';

const css = readSrc('src/app/globals.css');
const components = readTree('src/components');
const allComponentText = Object.values(components).join('\n');
const ceoConnect = readSrc('src/components/CeoConnect.tsx');
const team = readSrc('src/components/Team.tsx');

describe('Section title alignment (Hayat Part 1)', () => {
  // [#9] Every post-hero section title should be centered or right-aligned.
  // Today, .section__head--centered is centered, but a bare .section__head is
  // left-aligned. Assert no section uses the bare (left) variant.
  it('[#9] no section uses the left-aligned bare "section__head" (must be --centered/--right)', () => {
    const offenders = Object.entries(components)
      .filter(([, text]) => /className="section__head"/.test(text))
      .map(([path]) => path);
    expect(
      offenders,
      `left-aligned section titles in: ${offenders.join(', ')}`,
    ).toEqual([]);
  });
});

describe('"Connect with our CEO" CTA — CEO section only (Hayat Part 1)', () => {
  // [#10] The CEO/founder section gets its own CTA: a centered "Connect with our
  // CEO" button that, only when clicked, reveals the CEO's email, mobile,
  // WhatsApp and LinkedIn. Every other section keeps its normal action pair.

  it('[#10] CEO button reads "Connect with our CEO"', () => {
    expect(ceoConnect).toContain('Connect with our CEO');
    // It is rendered as a button, not the removed "Explore our services" link.
    expect(/<button/i.test(ceoConnect), 'CEO CTA should be a <button>').toBe(true);
  });

  it('[#10] the CEO section uses CeoConnect and drops the default SectionCTA', () => {
    expect(team).toContain('<CeoConnect');
    expect(team, 'Team section should no longer render the shared SectionCTA').not.toContain(
      '<SectionCTA',
    );
  });

  it('[#10] "Explore our services" is removed from the CEO CTA', () => {
    expect(ceoConnect).not.toContain('Explore our services');
  });

  it('[#10] contact details are revealed on click (interactive client component)', () => {
    expect(/^['"]use client['"]/m.test(ceoConnect), 'CeoConnect must be a client component').toBe(
      true,
    );
    // A toggle gate so details only appear after the button is clicked.
    expect(/useState|onClick/.test(ceoConnect), 'no click/state toggle found').toBe(true);
    expect(/\{\s*open\s*&&/.test(ceoConnect), 'details should be gated behind the open state').toBe(
      true,
    );
  });

  it('[#10] reveals email, mobile, WhatsApp and LinkedIn', () => {
    expect(ceoConnect).toContain('hayat@cardilett.ae');
    expect(/whatsapp/i.test(ceoConnect), 'no WhatsApp reference').toBe(true);
    expect(/linkedin/i.test(ceoConnect), 'no LinkedIn reference').toBe(true);
    expect(/mobile/i.test(ceoConnect), 'no mobile reference').toBe(true);
  });

  it('[#10] the button is centered', () => {
    // .ceo-connect centers its contents (button + revealed details).
    const block = css.match(/\.ceo-connect\s*\{[\s\S]*?\}/)?.[0] ?? '';
    expect(/align-items:\s*center/.test(block), '.ceo-connect should center its button').toBe(true);
  });
});

describe('Founder/CEO section background (Hayat Part 1)', () => {
  // [#11] The section behind the Founder & CEO box should use #F8E1C8 so it
  // visually opens a new section.
  it('[#11] the colour #F8E1C8 is defined in the stylesheet', () => {
    expect(/#F8E1C8/i.test(css), '#F8E1C8 not found in globals.css').toBe(true);
  });
});
