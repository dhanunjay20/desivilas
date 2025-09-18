import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, useReducedMotion } from 'framer-motion';
import heroimg from '../assets/heroimg.jpg';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  // Parent container stagger
  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Reusable fadeUp variant with index support
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' },
    }),
  };

  // Subtle animated vignette (disabled if reduced motion)
  const vignette = {
    hidden: { opacity: 0.35 },
    show: {
      opacity: 0.55,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
        repeat: prefersReducedMotion ? 0 : Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Badge pop-in
  const badgePop = {
    hidden: { opacity: 0, y: 24, rotate: -6, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { delay: 0.4, type: 'spring', stiffness: 260, damping: 24 },
    },
  };

  // Floating loop for the image
  const floatTransition = prefersReducedMotion
    ? { duration: 0 }
    : { y: { duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } };

  return (
    <section className="relative bg-black text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background image (add backgroundAttachment: 'fixed' for parallax on large screens) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroimg})`,
          // backgroundAttachment: 'fixed', // uncomment for parallax on desktops
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          variants={vignette}
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            background:
              'radial-gradient(60% 60% at 70% 30%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left column with staggered children on view */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-orange-400 font-semibold text-lg mb-4"
          >
            Authentically Spiced
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-6xl lg:text-8xl font-bold leading-none text-white"
          >
            Elegantly
            <br />
            Served
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-12 flex justify-center lg:justify-start items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-green-500 text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-green-400 transition-colors"
            >
              <span>Get In Touch</span>
              <motion.span
                className="inline-block"
                whileHover={{ x: 3 }}
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <FiArrowUpRight />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Open contact"
            >
              <FiArrowUpRight size={24} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right column (image + badge) reveal on view */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            {/* Floating circular image */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              animate={{ opacity: 1, y: prefersReducedMotion ? 0 : [0, -8, 0] }}
              transition={floatTransition}
              className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-black/30"
              role="img"
              aria-label="Authentic Indian Dish"
            >
              <img
                src={heroimg}
                alt="Authentic Indian Dish"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Review badge */}
            <motion.div
              variants={badgePop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="absolute -bottom-8 right-0 sm:bottom-10 sm:-right-10 bg-zinc-800/80 backdrop-blur-md p-4 rounded-2xl shadow-lg w-52"
            >
              <p className="font-bold text-lg mb-2">5K+ Reviews</p>
              <div className="flex items-center -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Reviewer 1" className="w-10 h-10 rounded-full border-2 border-zinc-700" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Reviewer 2" className="w-10 h-10 rounded-full border-2 border-zinc-700" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Reviewer 3" className="w-10 h-10 rounded-full border-2 border-zinc-700" />
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Reviewer 4" className="w-10 h-10 rounded-full border-2 border-zinc-700" />
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs border-2 border-zinc-700">5k+</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
