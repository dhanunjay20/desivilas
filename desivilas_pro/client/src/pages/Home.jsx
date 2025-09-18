import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import HowItsWorks from '../components/HowItsWorks';
import OurCateringServices from '../components/OurCateringServices';
import SatisfactionGuaranteed from '../components/SatisfactionGuaranteed'; // Import new component
import PerfectMenu from '../components/PerfectMenu'; // Import new component
import Testimonials from '../components/Testimonials';
import MeetTheTeam from '../components/MeetTheTeam';
import FaqData from '../components/FaqData'; // Import new component

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <HowItsWorks />
      <OurCateringServices />
      <SatisfactionGuaranteed />
      <PerfectMenu />
      <Testimonials />
      <MeetTheTeam />
      <FaqData />
    </div>
  );
};

export default Home;
