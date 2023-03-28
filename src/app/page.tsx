import AboutUs from '@/components/AboutUs/AboutUs';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Partners from '@/components/Partners/Partners';
import Team from '@/components/Team/Team';

export const metadata = {
  title: 'Home - IT Startup',
  description: 'The website of an IT Startup',
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <AboutUs />
        <Team />
      </main>
      <Footer />
    </>
  );
}
