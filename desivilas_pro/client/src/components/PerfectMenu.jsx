import React from 'react';
import { FiFeather, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Buttons from '../components/Buttons';

const sectionFade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const gridStagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const colVariant = (colIndex) => {
  if (colIndex === 0) return { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } } };
  if (colIndex === 1) return { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };
  return { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } } };
};

const MenuCard = ({ name, image, colIndex }) => {
  const variants = colVariant(colIndex);
  return (
    <motion.article
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative bg-white rounded-[28px] shadow-lg ring-1 ring-black/5 p-4 flex flex-col"
    >
      <div className="w-full h-60 overflow-hidden rounded-2xl">
        <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="pt-8 pb-10 text-center">
        <h4 className="text-2xl md:text-3xl font-extrabold text-zinc-900" style={{ fontFamily: 'serif' }}>{name}</h4>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} aria-label={`Open ${name}`} className="h-14 w-14 rounded-full bg-white text-zinc-800 shadow-lg ring-1 ring-black/5 grid place-items-center hover:bg-orange-500 hover:text-white transition-colors">
          <FiArrowRight />
        </motion.button>
      </div>
    </motion.article>
  );
};

const PerfectMenu = () => {
  const menuCategories = [
    { name: 'Beverages', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758618770/drink_inn2it.jpg' },
    { name: 'Starters', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758618918/starters_mwh9jx.jpg' },
    { name: 'Breakfast', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758619333/break_fast1_nmusof.jpg' },
    { name: 'Naan', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758619054/NAAN_eq61im.jpg' },
    { name: 'Curries', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758619108/CURRIES_mj0pbu.jpg' },
    { name: 'Rice Special', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758619181/rices_iqgfpb.jpg' },
  ];

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-clip bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
            <FiFeather /><h2 className="font-semibold text-sm">Our Menu</h2><FiFeather />
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight" style={{ fontFamily: 'serif' }}>
            Savor the Perfect Menu
          </h3>
        </motion.div>

        <motion.div variants={gridStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuCategories.map((c, idx) => <MenuCard key={c.name} name={c.name} image={c.image} colIndex={idx % 3} />)}
        </motion.div>

        <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="mt-20 flex justify-center">
          <Buttons label="Explore Menu" onPrimaryClick={() => {}} onArrowClick={() => {}} />
        </motion.div>
      </div>
    </section>
  );
};

export default PerfectMenu;
