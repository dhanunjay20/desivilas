import React, { useState } from 'react';
import { FiFeather, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Buttons from '../components/Buttons';

const services = [
  { title: 'Catering Services', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622255/Best_Catering_Services_in_Bhubaneswar_ippta5.jpg', number: '01' },
  { title: 'Self Dine In', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622360/download_50_a8gmfd.jpg', number: '02' },
  { title: 'Flavours Ofthe Day', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622436/Brownie_Ice_Cream_Pure_Bliss___Craving_the_perfect_dessert_combo__Dive_into_our_Ultimate_fnk74w.jpg', number: '03' },
  { title: 'Social Events', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622557/download_51_ezxllo.jpg', number: '04' },
];

const fadeSection = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

const OurCateringServices = () => {
  const [hovered, setHovered] = useState(0);
  const [active, setActive] = useState(0);
  const current = hovered ?? active;

  return (
    <section className="bg-black py-20 lg:py-28 w-full max-w-[100vw] overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={fadeSection} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }} className="text-center">
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
            <FiFeather /><h2 className="font-semibold text-sm">Services</h2><FiFeather />
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Our Catering Services</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Bespoke experiences from intimate dinners to large social events crafted by our expert chefs.
          </p>
        </motion.div>

        <motion.div variants={fadeSection} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mt-14 grid grid-cols-1 gap-5 md:hidden">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl overflow-hidden bg-white">
              <div className="h-48 w-full">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-bold text-black">{s.title}</h4>
                  <span className="text-5xl font-bold text-orange-500/60 leading-none">{s.number}</span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href="/services" className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors" aria-label={`View ${s.title}`}>
                    View event <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Desktop row clamped */}
        <div className="mt-16 hidden md:flex h-[520px] gap-4 overflow-x-clip">
          {services.map((s, i) => {
            const expanded = current === i;
            return (
              <motion.div
                key={s.title}
                className="relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end focus:outline-none"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(active)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(active)}
                onClick={() => setActive(i)}
                tabIndex={0}
                role="button"
                aria-pressed={expanded}
                initial={false}
                animate={{ flexBasis: expanded ? '40%' : '15%' }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              >
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 transition-colors duration-300 ${expanded ? 'bg-orange-500' : 'bg-white'}`} />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2/3 bg-cover bg-center transition-opacity duration-500 ${expanded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${s.image})`, clipPath: 'ellipse(130% 95% at 0% 100%)' }}
                  />
                </div>

                <div className={`absolute inset-6 flex flex-col justify-between transition-opacity duration-300 ${expanded ? 'opacity-0' : 'opacity-100'}`}>
                  <h4 className="text-2xl font-bold text-black">{s.title}</h4>
                  <span className="text-7xl font-bold text-orange-500/50 self-end">{s.number}</span>
                </div>

                <div className={`absolute inset-6 flex flex-col justify-between transition-opacity duration-500 ${expanded ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                  <div>
                    <h4 className="text-4xl font-bold text-white">{s.title}</h4>
                    <div className="mt-5">
                      <Buttons label="View Event" onPrimaryClick={() => (window.location.href = '/services')} onArrowClick={() => (window.location.href = '/services')} gap="gap-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={fadeSection} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mt-14 flex justify-center">
          <Buttons label="View all services" onPrimaryClick={() => (window.location.href = '/services')} onArrowClick={() => (window.location.href = '/services')} />
        </motion.div>
      </div>
    </section>
  );
};

export default OurCateringServices;
