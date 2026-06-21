import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Services from '@/components/Services';
import Differentiators from '@/components/Differentiators';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Team />
      <Services preview />
      <Differentiators />
      <Testimonials />
      <CTASection />
    </main>
  );
}
