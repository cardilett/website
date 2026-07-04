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
      <CTASection />
    </main>
  );
}
