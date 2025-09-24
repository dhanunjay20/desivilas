import React from 'react';
import { FiArrowUpRight, FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Reusable animation variants for sliding elements into view
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
  // Hooks must be called inside the component function
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden bg-[#F9F1E7] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Image Cluster */}
          <motion.div
            variants={slide('left', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative flex h-[500px] w-full justify-center lg:h-[600px]"
          >
            <div className="absolute h-full w-full overflow-hidden rounded-bl-[150px] rounded-tr-[150px] shadow-2xl">
              <img
                src='https://res.cloudinary.com/djoq264q0/image/upload/v1758708319/Gemini_Generated_Image_3ib7x73ib7x73ib7_ouo5y3.png'
                alt="Chef preparing traditional Indian food"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              variants={slide('right', 0.15)}
              className="absolute -right-8 top-0 hidden h-40 w-40 rounded-full bg-white p-2 shadow-lg lg:block"
            >
              <img
                src='https://res.cloudinary.com/djoq264q0/image/upload/v1758538464/garlic-butter-chicken_cy3phy.webp'
                alt="Plated Indian dish"
                className="h-full w-full rounded-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={slide('up', 0.25)}
              className="absolute -bottom-10 right-0 flex h-48 w-48 items-center justify-center rounded-full bg-orange-500 p-5 text-center shadow-xl"
            >
              <p className="text-lg font-semibold leading-tight text-white">
                Perfectly Curated to Suit Your Event.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            variants={slide('right', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative text-center lg:text-left"
          >
            <motion.div
              variants={slide('right', 0.05)}
              className="mb-4 flex items-center justify-center gap-2 text-orange-500 lg:justify-start"
            >
              <FiFeather />
              <h2 className="font-semibold">Who We Are</h2>
              <FiFeather />
            </motion.div>

            <motion.h3
              variants={slide('right', 0.1)}
              className="text-4xl font-bold leading-tight text-zinc-900 lg:text-5xl"
            >
              Experience the Essence of India
            </motion.h3>

            <motion.p
              variants={slide('right', 0.16)}
              className="mt-6 leading-relaxed text-zinc-600"
            >
              At Desi Vilas, we are storytellers through food blending tradition, culture, and flavor into every dish we serve. Rooted in the vibrant culinary heritage of India, our restaurant is a warm, welcoming space where authentic recipes meet modern hospitality.
              <br/><br/>
              Whether you’re savoring a comforting curry, enjoying our daily-special surprises, or planning a festive gathering with our catering team Desi Vilas is where every meal feels like home, no matter how far from home you are.
            </motion.p>

            <motion.div
              variants={slide('right', 0.22)}
              className="mt-10 flex items-center justify-center space-x-4 lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/about')}
                className="rounded-full bg-green-500 px-8 py-3 font-bold text-white transition-colors"
              >
                About Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/about')}
                className="rounded-full bg-orange-500 p-3 text-white"
                aria-label="Open About Page"
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