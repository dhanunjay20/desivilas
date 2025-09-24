import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons';
import heroimg from '../assets/heroimg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-clip text-white pt-28 pb-20 lg:pt-44 lg:pb-32">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroimg})` }}
        aria-hidden="true"
      />
      {/* Overlay gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(60% 50% at 75% 30%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%), radial-gradient(50% 40% at 15% 70%, rgba(255,149,0,0.10), rgba(0,0,0,0) 70%)',
          opacity: prefersReducedMotion ? 0.35 : 0.55,
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-7 px-6 lg:px-8 gap-14 items-center">
        {/* Left section with text and button */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left"
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.55 }}
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/15">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            <span className="text-sm text-white/90">Authentically Indian • Crafted Fresh</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-5 text-5xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'serif' }}
          >
            Deliciously crafted <br className="hidden sm:block" />
            Freshly Served
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 mx-auto lg:mx-0"
          >
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-10 flex justify-center lg:justify-start">
            <Buttons
              label="Get In Touch"

     

              onPrimaryClick={handleGetInTouch}
              onArrowClick={handleGetInTouch}

              gap="gap-4"
            />
          </motion.div>
        </motion.div>

        {/* Right side removed as requested */}
      </div>
    </section>
  );
}
