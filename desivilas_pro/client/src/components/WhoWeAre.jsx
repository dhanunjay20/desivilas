import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';
import chef from '../assets/chef.jpg';

// Count-up component (unchanged)
const StatsCounter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(String(targetValue).replace(/,/g, ''), 10);
    if (start === end) return;
    const duration = 2000;
    const increment = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <p className="text-5xl lg:text-6xl font-bold text-zinc-900">
      {count.toLocaleString()}+
    </p>
  );
};

// Reusable variants
const slide = (dir = 'left', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: dir === 'left' ? -60 : dir === 'right' ? 60 : 0,
    y: dir === 'up' ? 40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  },
});

const WhoWeAre = () => {

  return (
    <section className="bg-[#F9F1E7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image cluster (slides from left) */}
          <motion.div
            variants={slide('left', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative w-full h-[500px] lg:h-[600px] flex justify-center"
          >
            <div className="absolute w-full h-full rounded-tr-[150px] rounded-bl-[150px] overflow-hidden shadow-2xl">
              <img
                src={chef}
                alt="Chef preparing traditional Indian food"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              variants={slide('right', 0.15)}
              className="absolute top-0 -right-8 w-40 h-40 bg-white p-2 rounded-full shadow-lg hidden lg:block"
            >
              <img
                src={chef}
                alt="Plated Indian dish"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            <motion.div
              variants={slide('up', 0.25)}
              className="absolute -bottom-10 right-0 w-48 h-48 bg-orange-500 rounded-full flex items-center justify-center p-5 text-center shadow-xl"
            >
              <p className="text-white font-semibold text-lg leading-tight">
                Perfectly Curated to Delight Your Senses
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text content (slides from right) */}
          <motion.div
            variants={slide('right', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative text-center lg:text-left"
          >

            <motion.div
              variants={slide('right', 0.05)}
              className="flex justify-center lg:justify-start items-center gap-2 text-orange-500 mb-4"
            >
              <FiFeather />
              <h2 className="font-semibold">Who We Are</h2>
              <FiFeather />
            </motion.div>

            <motion.h3
              variants={slide('right', 0.1)}
              className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight"
            >
              Delivering Unforgettable Flavors for Every Occasion
            </motion.h3>

            <motion.p
              variants={slide('right', 0.16)}
              className="mt-6 text-zinc-600 leading-relaxed"
            >
              Discover the heart of authentic Indian cuisine at Desi Vilas. From elegant dinners to casual gatherings, we craft bespoke menus and deliver a seamless dining experience. Trust us to create unforgettable culinary journeys, ensuring every detail is perfectly executed.
            </motion.p>

            <motion.div
              variants={slide('right', 0.22)}
              className="mt-10 flex justify-center lg:justify-start items-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                About Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                className="bg-orange-500 text-white p-3 rounded-full"
                aria-label="Open About"
              >
                <FiArrowUpRight size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
