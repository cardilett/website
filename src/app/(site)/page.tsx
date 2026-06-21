import Hero from '@/components/Hero';
// import Commitments from '@/components/Commitments'; // Hidden for now
import Team from '@/components/Team';
import Services from '@/components/Services';
import Differentiators from '@/components/Differentiators';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      {/* <Commitments /> — hidden for now; founder section moved here */}
      <Team />
      <Services preview />
      <Differentiators />
      <Testimonials />
      <CTASection />
    </main>
  );
}
