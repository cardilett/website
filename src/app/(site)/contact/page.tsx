import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start with a conversation. Tell Cardilett what you’re solving for and a senior member of the team will respond within one business day.',
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
