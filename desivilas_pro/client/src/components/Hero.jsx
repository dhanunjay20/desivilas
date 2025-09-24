import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

const slideIn = {
  hidden: { opacity: 0, x: 50, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-clip text-white pt-28 pb-20 lg:pt-44 lg:pb-32">
      {/* Background as CSS background-image with cover + position */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroimg})` }}
        aria-hidden="true"
      />
      {/* Gradient and radial overlays for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 75% 30%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%), radial-gradient(50% 40% at 15% 70%, rgba(255,149,0,0.10), rgba(0,0,0,0) 70%)',
          opacity: prefersReducedMotion ? 0.35 : 0.55,
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:px-8">
        {/* Left: copy + CTAs */}
        <motion.div
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.55 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/15"
          >
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
              onPrimaryClick={() => console.log('Contact Us')}
              onArrowClick={() => console.log('Hero Arrow')}
              gap="gap-4"
            />
          </motion.div>

        </motion.div>

        {/* Right: frosted glass card + floating chips */}
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.55 }}
          className="relative lg:col-span-5 flex justify-center lg:justify-end"
        >
          {/* Glass card */}
          <div className="relative w-full max-w-md rounded-3xl bg-white/10 p-5 backdrop-blur-md ring-1 ring-white/15 shadow-xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroimg}
                alt="Signature platter"
                loading="eager"
                decoding="async"
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'serif' }}>Chef’s Seasonal Tasting</h3>
                <p className="mt-1 text-sm text-white/80">A rotating selection curated for the season.</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/70">Tonight’s rating</p>
                <p className="text-lg font-semibold">4.9 ★</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Tandoori', 'Masala', 'Smoked', 'Vegan'].map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-white/70">Available this week</span>
              <a href="/menu" className="text-sm font-semibold text-white/90 underline underline-offset-4 hover:text-white">
                View menu
              </a>
            </div>
          </div>

          {/* Floating chips (disabled for reduced motion users) */}
          {!prefersReducedMotion && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="absolute -left-2 -top-4 hidden sm:block"
              >
                <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold shadow-lg">
                  Event Ready
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
                className="absolute -right-3 top-24 hidden sm:block"
              >
                <span className="rounded-full bg-white/15 ring-1 ring-white/20 px-3 py-1 text-xs backdrop-blur-sm shadow-md">
                  Seasonal Picks
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-6 left-10 hidden sm:block"
              >
                <span className="rounded-full bg-white/15 ring-1 ring-white/20 px-3 py-1 text-xs backdrop-blur-sm shadow-md">
                  Chef’s Pick
                </span>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
