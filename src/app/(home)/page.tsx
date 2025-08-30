import {
  FAQ,
  // Featured,
  ServiceCity,
  FreedomSection,
  HeroSection,
  IntroSection,
  FeedSection,
  WorkSection,
  OurServices,
  ContactUs,
  OurWork,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Featured /> */}
      <OurServices/>
      <IntroSection />
      <WorkSection />
      <FreedomSection />
      <ServiceCity />
      <OurWork/>
      <FeedSection />
      <ContactUs/>
      <FAQ />
      
      
    </main>
  );
}
