import type { Metadata } from 'next';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'What We Offer',
  description:
    'Nine HR advisory practice areas strategy, organization design, total rewards, talent, compliance and more delivered with global rigor and regional nuance.',
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <Methodology />
      <CTASection/>
    </main>
  );
}
