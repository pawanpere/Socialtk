import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UGCMarquee from './components/UGCMarquee';
import Services from './components/Services';
import BrandMarquee from './components/BrandMarquee';
import WhyChooseUs from './components/WhyChooseUs';
import WorkProcess from './components/WorkProcess';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ComparisonTable from './components/ComparisonTable';

function App() {
  return (
    <div className="bg-neutral-01 min-h-screen font-sans">
      <Header />
      <Hero />
      <UGCMarquee />
      <Services />
      <BrandMarquee />
      <WhyChooseUs />
      <Projects />
      <WorkProcess />
      <Testimonials />
      <Banner />
      <ComparisonTable />
      <FAQ />
      <Banner
        headline={
          <>
            You're 90 Days Away From a Channel<br />
            That Sells While You Sleep
          </>
        }
        subhead={
          <>
            You talk to Sayim & Danny directly, not a sales rep<br />
            We'll tell you honestly if your brand is ready
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
