# Hayat Part 1 — acceptance tests

These Vitest tests encode the 23 amendments in
`website tweeking comments - Hayat - 280626 - Part 1.docx`. Each test asserts the
**desired end-state**, so the suite is a live checklist:

- **Green** = the change is already implemented.
- **Red** = the change is still to do.

They read source files (`.tsx` / `.css` / `route.ts`) as text — no browser or
running server needed.

```bash
npm test          # one-shot run
npm run test:watch
```

| Test file | Document items |
|---|---|
| `global.test.ts` | #1 em-dash removal, #3 "Contact us" casing |
| `hero.test.ts` | #4 sub-headline, #5 five stat boxes |
| `services.test.ts` | #14, #15, #16 services heading/sub-copy |
| `cta-crimson.test.ts` | #17–#19 crimson box, #20–#21 action pair under it |
| `navbar.test.ts` | #2 logo size, #13 navbar opacity |
| `ceo-section.test.ts` | #9 title alignment, #10 "Connect with our CEO", #11 #F8E1C8 |
| `contact-flow.test.ts` | #22 success message, #23 reference number + auto-reply |
| `_non-testable.test.ts` | #6, #7, #8, #12 (questions / human tasks — `it.todo`) |

Expected on the **current** codebase: #1, #3, #4, #5 pass (already done);
the rest are red (pending). Edit the expected strings here if Hayat's final
wording changes.
