import { describe, it } from 'vitest';

/**
 * Items from Hayat's review that are NOT pass/fail code facts — they are
 * questions to answer or human content tasks. Recorded here as todos so the
 * suite documents the full scope of the document, not just the testable parts.
 */
describe('Non-testable items (Hayat Part 1) — for humans, not assertions', () => {
  // [#6] "The cookie disclaimer — is this AI-generated? Why does it mention
  // partners/advertising/sharing when I only asked for click analytics?"
  // → Needs a written explanation / disclaimer rewrite decision, not a test.
  it.todo('[#6] explain & justify (or rewrite) the cookie disclaimer wording');

  // [#7] "Why CookieScript? What data can we even collect with no login system?"
  // → Needs a rationale; CookieScript is wired in layout.tsx. Not a test.
  it.todo('[#7] explain the CookieScript choice and what data is actually collected');

  // [#8] "Vertical spacing between sections should be identical." Subjective /
  // visual; better verified in the browser preview than via source assertion.
  it.todo('[#8] confirm identical inter-section spacing (visual review)');

  // [#12] "@Anil: draft a concise, trust-building CEO bio from the LinkedIn
  // profile + attached CV." → Human content task.
  it.todo('[#12] draft the CEO bio copy (content task for Anil)');
});
