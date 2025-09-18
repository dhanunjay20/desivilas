import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import HowItsWorks from '../components/HowItsWorks';
import OurCateringServices from '../components/OurCateringServices';
import SatisfactionGuaranteed from '../components/SatisfactionGuaranteed';
import PerfectMenu from '../components/PerfectMenu';
import Testimonials from '../components/Testimonials';
import OurPromise from '../components/OurPromise';
// Set your hero image path here (e.g., place an image in /public/assets/about-hero.jpg)
const HERO_IMAGE = '/assets/about-hero.jpg';

const AboutUs = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        aria-labelledby="about-hero-title"
        className="relative w-full h-[48vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
      >
        {/* Background image */}
        <img
          src={HERO_IMAGE}
          alt="About us hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Contrast overlay for text legibility */}
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1
            id="about-hero-title"
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            About Us
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg">
            Crafting memorable dining experiences with authentic flavors and warm hospitality.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <WhoWeAre />
      <HowItsWorks />
      <SatisfactionGuaranteed />
      <OurPromise />
      <PerfectMenu />
      <Testimonials />
      
    </main>
  );
};

export default AboutUs;
