import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ClientEffects />
    </>
  );
}
