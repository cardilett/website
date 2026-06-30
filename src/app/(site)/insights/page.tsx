import type { Metadata } from 'next';
import Insights from '@/components/Insights';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Timely thinking on HR in the UAE essays, articles, and points of view on strategy, total rewards, Emiratisation, and job architecture.',
};

export default function InsightsPage() {
  return (
    <main>
      <Insights />
      <CTASection
        eyebrow="Stay close"
        title={
          <>
            Get our thinking <em>first.</em>
          </>
        }
        sub="Be among the first to read new essays and points of view as we publish them."
      />
    </main>
  );
}
