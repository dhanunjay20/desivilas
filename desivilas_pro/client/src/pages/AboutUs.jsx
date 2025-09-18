import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import HowItsWorks from '../components/HowItsWorks';
import OurCateringServices from '../components/OurCateringServices';
import SatisfactionGuaranteed from '../components/SatisfactionGuaranteed';
import PerfectMenu from '../components/PerfectMenu';
import OurPromise from '../components/OurPromise';
import HERO_IMAGE from '../assets/about_us.jpg'; // Adjust path to your actual asset

const AboutUs = () => {
  return (
    <main className="bg-gray-50 min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Hero Section (clip to prevent subpixel overflow) */}
      <section
        aria-labelledby="about-hero-title"
        className="relative w-full max-w-[100vw] h-[48vh] md:h-[60vh] lg:h-[70vh] overflow-hidden overflow-x-clip"
      >
        <img src={HERO_IMAGE} alt="About us hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 id="about-hero-title" className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg">
            Crafting memorable dining experiences with authentic flavors and warm hospitality.
          </p>
        </div>
      </section>

      {/* Content (wrap sections that may animate beyond width) */}
      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <WhoWeAre />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <HowItsWorks />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <SatisfactionGuaranteed />
      </section>

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <OurPromise />
      </section>

      {/* Expanding/hover-scale grids — keep clipped */}
      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <PerfectMenu />
      </section>

      {/* Testimonials (when enabled) should also be clipped */}
      {/* <section className="relative w-full max-w-[100vw] overflow-x-clip"><Testimonials /></section> */}

      <section className="relative w-full max-w-[100vw] overflow-x-clip">
        <OurCateringServices />
      </section>
    </main>
  );
};

export default AboutUs;
