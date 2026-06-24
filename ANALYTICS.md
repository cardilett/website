# Analytics — page & section views

The goal: see **which pages and which sections get the most views**.

## What the site already does

- **Google Tag Manager** is loaded site-wide from the root layout
  (`src/app/layout.tsx`, container `GTM-M7RNN9GQ`).
- **`src/components/Analytics.tsx`** pushes a **`section_view`** event to the
  GTM `dataLayer` the first time each section scrolls into view, with:
  - `section_id` — e.g. `methodology`, `about`, `services`
  - `section_name` — human label (e.g. "How We Work")
  - `page_path` — the page the section is on
- **Page views** are intentionally **not** emitted as a custom event — GA4's
  Enhanced Measurement already records them (see below), and sending our own
  would double-count.

## One-time setup in GA4 + GTM (account side)

You need a GA4 property; then connect it through the existing GTM container.

1. **GA4 property** → Admin → Data Streams → Web. Copy the Measurement ID
   (`G-XXXXXXXXXX`).
2. In GA4, turn on **Enhanced Measurement** and tick **"Page changes based on
   browser history events"** — this captures page views for our single-page
   (App Router) navigations. → gives you **page popularity** in
   *Reports → Engagement → Pages and screens*.
3. **GTM** (container `GTM-M7RNN9GQ`):
   - Tag: **Google Analytics: GA4 Configuration** with your Measurement ID,
     firing on **All Pages**.
   - Variables: create **Data Layer Variables** for `section_id`,
     `section_name`, `page_path`.
   - Trigger: **Custom Event** with event name `section_view`.
   - Tag: **GA4 Event**, event name `section_view`, event parameters
     `section_id` / `section_name` / `page_path` (mapped to the variables),
     using the trigger above.
   - **Submit / Publish** the container.
4. In GA4 → Admin → **Custom definitions**, register `section_name` (and
   `section_id`, `page_path`) as **custom dimensions** so they're reportable.
5. View **section popularity** in GA4 → *Explore* → free-form, dimension
   `section_name`, metric `Event count` (filter to `section_view`).

### Consent note

The site uses a CookieScript consent banner. `dataLayer` events still queue;
GTM/GA4 fire according to your consent configuration. Make sure GA4/analytics
storage is granted (or the tags set to fire) per your consent setup, or stats
won't be collected until the visitor accepts.
