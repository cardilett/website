import { describe, it, expect } from 'vitest';
import { readSrc } from './_helpers';

const contact = readSrc('src/components/Contact.tsx');
const contactFlat = contact.replace(/\s+/g, ' ');
const route = readSrc('src/app/api/contact/route.ts');

describe('Contact submission confirmation (Hayat Part 1)', () => {
  // [#22] After submitting, the success message should read exactly this and
  // the panel should turn teal.
  it('[#22] success message matches the "submitted successfully…2 business working days" copy', () => {
    expect(contactFlat).toContain(
      'Your request has been submitted successfully, and we will be in touch with you ' +
        'within 2 business working days',
    );
  });

  it('[#22] the success state is styled teal', () => {
    expect(/teal/i.test(contact), 'no teal styling on the success state').toBe(true);
  });
});

describe('Contact API: reference number + auto-reply (Hayat Part 1)', () => {
  // [#23] Generate a reference number for the request and send an auto-email
  // back to the submitter (their own address), containing only name, subject
  // of interest, preferred communication method and brief context.
  it('[#23] the API generates a reference number', () => {
    expect(/referen/i.test(route), 'no reference-number generation found in route.ts').toBe(true);
  });

  it('[#23] the API sends a confirmation email to the submitter', () => {
    // The only sendMail today targets the admin inbox (CONTACT_TO). A second
    // send addressed to the submitter's own email is required.
    const sendMailCount = (route.match(/sendMail|sendNotificationEmail|sendConfirmation/g) ?? []).length;
    expect(
      /to:\s*email\b/.test(route) || /sendConfirmation/i.test(route),
      'no email addressed to the submitter (their own email) found',
    ).toBe(true);
    expect(sendMailCount, 'expected more than one outbound email path').toBeGreaterThan(1);
  });
});
