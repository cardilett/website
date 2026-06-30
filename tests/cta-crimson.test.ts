import { describe, it, expect } from 'vitest';
import { readSrc } from './_helpers';

// Hayat's "crimson box" is the Services gateway card (.services__gateway),
// confirmed against the screenshot. #17–21 all target it / the area under it.
const services = readSrc('src/components/Services.tsx').replace(/\s+/g, ' ');
const consult = readSrc('src/components/ConsultationCTA.tsx');
const consultFlat = consult.replace(/\s+/g, ' ');
const css = readSrc('src/app/globals.css');
const cta = readSrc('src/components/CTASection.tsx').replace(/\s+/g, ' ');
const sectionCta = readSrc('src/components/SectionCTA.tsx').replace(/\s+/g, ' ');

describe('Services crimson box — gateway card (Hayat Part 1)', () => {
  it('[#17] box title is "Explore our complete HR advisory and consultancy stack"', () => {
    expect(services).toContain('Explore our complete HR advisory and consultancy stack');
  });

  it('[#18] box body is the "Cardilett provides integrated advisory solutions…" copy', () => {
    expect(services).toContain(
      'Cardilett provides integrated advisory solutions, from specialized consulting engagements ' +
        'to large-scale transformation programs which enable you to realize strategic objectives ' +
        'and maintain competitive advantage. We serve as your dedicated strategic partner ' +
        'throughout your organizational growth journey.',
    );
  });

  it('[#19] the gold link inside the box reads "Explore how we can help you"', () => {
    expect(services).toContain('Explore how we can help you');
  });
});

describe('Under the crimson box — consultation CTA (Hayat Part 1)', () => {
  it('[#20] the gold "Explore our services" link under the box is removed (uses ConsultationCTA)', () => {
    expect(services).toContain('<ConsultationCTA');
    expect(services, 'Services should not render the shared SectionCTA pair').not.toContain(
      '<SectionCTA',
    );
  });

  it('[#21] CTA is a teal "Book your free consultation" button', () => {
    expect(consultFlat).toContain('Book your free consultation');
    expect(/btn--teal/.test(consult), 'button should use the teal style').toBe(true);
  });

  it('[#21] the button is centered', () => {
    const block = css.match(/\.consult-cta\s*\{[\s\S]*?\}/)?.[0] ?? '';
    expect(/justify-content:\s*center/.test(block), '.consult-cta should center the button').toBe(
      true,
    );
  });

  it('[#21] clicking opens a popup dialog with the consultation form fields', () => {
    expect(/^['"]use client['"]/m.test(consult), 'must be a client component').toBe(true);
    expect(/role="dialog"/.test(consult), 'popup should be a dialog').toBe(true);
    // Fields from the provided mock.
    expect(consultFlat).toContain('Preferred communication method');
    expect(consultFlat).toContain('Subject of interest');
    expect(consultFlat).toContain('Contact number');
    expect(consultFlat).toContain('Submit my request');
    expect(consultFlat).toContain('Declarations');
  });

  it('[#22] on submit the popup shows the "submitted successfully…2 business working days" copy', () => {
    expect(consultFlat).toContain(
      'Your request has been submitted successfully, and we will be in touch with you within 2 ' +
        'business working days.',
    );
  });
});

describe('Adjacent components left untouched (Hayat Part 1)', () => {
  // The separate crimson CTA *band* (CTASection) is NOT the doc's crimson box.
  it('[restored] CTASection keeps its original copy', () => {
    expect(cta).toContain('Ready to make HR your');
    expect(cta).toContain('Explore our services');
  });

  // The shared section-end pair stays at original colours/positions elsewhere.
  it('[restored] shared SectionCTA keeps "Contact us" + "Explore our services"', () => {
    expect(sectionCta).toContain('Contact us');
    expect(sectionCta).toContain('Explore our services');
  });
});
