import type { Metadata } from 'next';
import About from '@/components/About';
import MissionValues from '@/components/MissionValues';
import Commitments from '@/components/Commitments';
import Industries from '@/components/Industries';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Cardilett is a government-enabled, Emirati-led HR consultancy founded by Hayat Ali Al Hosani, regional agility, and senior-led delivery from Abu Dhabi.',
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <MissionValues />
      <Commitments />
      <Industries />
      <CTASection />
    </main>
  );
}
