import type { Metadata } from 'next';
import CaseStudies from '@/components/CaseStudies';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Impact',
  description:
    'Anonymised outcomes from Cardilett engagements across the UAE audit remediation, pay re-grading, engagement uplift, and faster HR decision-making.',
};

export default function WorkPage() {
  return (
    <main>
      <CaseStudies />
      <CTASection/>
    </main>
  );
}
