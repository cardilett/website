import type { Metadata } from 'next';
import About from '@/components/About';
import Commitments from '@/components/Commitments';
import Industries from '@/components/Industries';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Cardilett is a government-enabled, Emirati-led HR consultancy founded by Hayat Ali Al Hosani Big 4 rigor, regional agility, and senior-led delivery from Abu Dhabi.',
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Commitments />
      <Industries />
      <CTASection />
    </main>
  );
}
