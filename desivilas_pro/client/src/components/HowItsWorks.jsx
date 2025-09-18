import React from 'react';
import { FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AboutPill, ArrowCircle } from '../components/Buttons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardIn = { hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } } };

const steps = [
  { number: '01', title: 'Book Your Table', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop' },
  { number: '02', title: 'Our Expert Chefs at Work', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop' },
  { number: '03', title: 'Premium Quality Service', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop' },
  { number: '04', title: 'An Unforgettable Experience', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop' },
];

const HowItsWorks = () => {
  return (
    <section className="relative w-full max-w-[100vw] overflow-x-clip bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="mb-4 flex items-center justify-center gap-2 text-orange-500">
          <FiFeather /><h2 className="text-sm font-semibold">Our Process</h2><FiFeather />
        </motion.div>
        <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
          How it Works
        </motion.h3>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 overflow-x-clip"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={cardIn} className="relative group">
              <motion.div
                whileHover={{ y: -64 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative h-80 rounded-3xl bg-zinc-900 p-6 text-left text-white shadow-lg"
              >
                <div className="flex w-full items-start justify-between">
                  <div className="h-24 w-24 overflow-hidden rounded-2xl">
                    <img src={step.image} alt={step.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <span className="text-6xl font-bold text-zinc-700/50">{step.number}</span>
                </div>
                <h4 className="mt-4 text-2xl font-bold leading-tight">{step.title}</h4>
              </motion.div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[110%] mt-4 w-full flex justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <div className="flex items-center space-x-4">
                  <AboutPill label="Explore Menu" onClick={() => {}} />
                  <ArrowCircle onClick={() => {}} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItsWorks;
