# Analytics — page & section views

The goal: see **which pages and which sections get the most views**.

## What the site already does

- **Google Tag Manager** is loaded site-wide from the root layout
  (`src/app/layout.tsx`, container `GTM-KT6J7WNS`).
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
3. **GTM** (container `GTM-KT6J7WNS`):
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

The site uses a CookieScript consent banner with **Google Consent Mode v2**.
The root layout (`src/app/layout.tsx`) sets a `gtag('consent', 'default', …)`
block — everything denied except `security_storage` — via a `beforeInteractive`
script, so it runs before GTM and tags start in a denied state. CookieScript
then fires `gtag('consent', 'update', …)` when the visitor accepts/rejects.

For the update to fire, **Google Consent Mode must be enabled for the banner in
the CookieScript dashboard** (republish after toggling). Until a visitor accepts
analytics storage, `dataLayer` events still queue but GA4 won't collect them.
