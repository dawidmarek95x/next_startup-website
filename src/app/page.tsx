import AboutUs from '@/components/AboutUs/AboutUs';
import Hero from '@/components/Hero/Hero';
import Partners from '@/components/Partners/Partners';

export const metadata = {
  title: 'Home - IT Startup',
  description: 'The website of an IT Startup',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <AboutUs />
    </main>
  );
}
