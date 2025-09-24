import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import HowItsWorks from '../components/HowItsWorks';
import OurCateringServices from '../components/OurCateringServices';
import SatisfactionGuaranteed from '../components/SatisfactionGuaranteed';
import PerfectMenu from '../components/PerfectMenu';
import Testimonials from '../components/Testimonials';
import MeetTheTeam from '../components/MeetTheTeam';
import FaqData from '../components/FaqData';

const Home = () => {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-clip">
      {/* Parallax / absolute layers */}
      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <Hero />
      </section>

      {/* Standard sections */}
      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <WhoWeAre />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <HowItsWorks />
      </section>

      {/* Expanding cards */}
      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <OurCateringServices />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <SatisfactionGuaranteed />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <PerfectMenu />
      </section>

      {/* Carousel translates horizontally */}
      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <Testimonials />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <FaqData />
      </section>
    </div>
  );
};

export default Home;
