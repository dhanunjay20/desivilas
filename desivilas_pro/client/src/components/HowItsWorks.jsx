import React from 'react';
import { FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';
// If needed elsewhere on the page, the shared buttons are still available:
// import { AboutPill, ArrowCircle } from '../components/Buttons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardIn = { hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } } };

const steps = [
  { number: '01', title: 'Share Your Event Details', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758602334/Share_your_event_details_rvvfpg.webp' },
  { number: '02', title: 'Confirming The Order', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758602441/Conforming_the_order_avs8mn.webp' },
  { number: '03', title: 'Premium Quality Service', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758602441/premium-quality-services_rr19nc.webp' },
  { number: '04', title: 'Delivering to Your Doorstep', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758602441/delivering-to-door-step_rq2ahg.webp' },
];

const HowItsWorks = () => {
  return (
    <section className="relative w-full max-w-[100vw] overflow-x-clip bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="mb-4 flex items-center justify-center gap-2 text-orange-500">
          <FiFeather />
          <h2 className="text-sm font-semibold">Our Process</h2>
          <FiFeather />
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
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="text-6xl font-bold text-zinc-700/50">{step.number}</span>
                </div>
                <h4 className="mt-4 text-2xl font-bold leading-tight">{step.title}</h4>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItsWorks;
