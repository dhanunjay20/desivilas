import React from 'react';
import { FiFeather, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Reusable buttons for consistent style everywhere
export const PrimaryPillButton = ({ children, className = '', ...rest }) => (
  <button
    {...rest}
    className={`bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 ${className}`}
  >
    {children}
  </button>
);

export const CircleArrowButton = ({ className = '', ...rest }) => (
  <button
    {...rest}
    className={`bg-orange-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 ${className}`}
    aria-label="Open link"
  >
    <FiArrowUpRight size={24} />
  </button>
);

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

const HowItsWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Book Your Table',
      image:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      number: '02',
      title: 'Our Expert Chefs at Work',
      image:
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop',
    },
    {
      number: '03',
      title: 'Premium Quality Service',
      image:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      number: '04',
      title: 'An Unforgettable Experience',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-center items-center gap-2 text-orange-500 mb-4"
        >
          <FiFeather />
          <h2 className="font-semibold text-sm">Our Process</h2>
          <FiFeather />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight"
        >
          How it Works
        </motion.h3>

        {/* Steps Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={cardIn} className="relative group">
              {/* Card with springy lift on hover (Framer) */}
              <motion.div
                whileHover={{ y: -64 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative bg-zinc-900 text-white rounded-3xl h-80 p-6 flex flex-col justify-between items-start text-left shadow-lg"
              >
                {/* Card Content */}
                <div className="flex justify-between items-start w-full">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-6xl font-bold text-zinc-700/50">{step.number}</span>
                </div>
                <h4 className="text-2xl font-bold leading-tight">{step.title}</h4>
              </motion.div>

              {/* Buttons (unchanged style) — revealed below card on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="flex items-center space-x-4">
                  <PrimaryPillButton>Explore Menu</PrimaryPillButton>
                  <CircleArrowButton />
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
