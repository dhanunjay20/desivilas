import React from 'react';
import { motion } from 'framer-motion';

// Local hero + gallery images (ensure exact filename case)
import HERO_IMAGE from '../assets/gallery.jpg';

import IMG1 from '../assets/IMG1.jpg';
import IMG2 from '../assets/IMG2.jpg';
import IMG3 from '../assets/IMG3.jpg';
import IMG4 from '../assets/IMG4.jpg';
import IMG5 from '../assets/IMG5.jpg';
import IMG6 from '../assets/IMG6.jpg';
import IMG7 from '../assets/IMG7.jpg';
import IMG8 from '../assets/IMG8.jpg';
import IMG9 from '../assets/IMG9.jpg';
import IMG10 from '../assets/IMG10.jpg';

const images = [
  { src: IMG1,  alt: 'Plating dish' },
  { src: IMG2,  alt: 'Roast prep' },
  { src: IMG3,  alt: 'Server with plates' },
  { src: IMG4,  alt: 'Pasta bowl' },
  { src: IMG5,  alt: 'Dessert slice' },
  { src: IMG6,  alt: 'Breakfast spread' },
  { src: IMG7,  alt: 'Salad plate' },
  { src: IMG8,  alt: 'Steak close-up' },
  { src: IMG9,  alt: 'Dessert tray' },
  { src: IMG10, alt: 'Veggies and dip' },
  { src: IMG1,  alt: 'Coffee latte art' },
  { src: IMG2,  alt: 'Bar counter' },
];

const gridVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.06, delayChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 14 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
};

const Gallery = () => {
  return (
    <main className="bg-[#F9F1E7] min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Hero */}
      <section className="relative h-[42vh] md:h-[56vh] lg:h-[50vh] w-full overflow-hidden">
        <img src={HERO_IMAGE} alt="Gallery hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Gallery</h1>
          <p className="mt-3 max-w-2xl text-white/90 text-base md:text-lg">
            A glimpse into our kitchen craft and dining moments.
          </p>
        </div>
      </section>

      {/* Masonry via CSS columns */}
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* columns responsive + vertical gap via margin on items */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:balance]">
            {images.map((img, i) => (
              <motion.figure
                key={`${i}-${img.alt}`}
                variants={itemVariants}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-zinc-100"
              >
                <img
                  src={img.src}
                  alt={img.alt || 'Gallery image'}
                  className="block w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                  draggable={false}
                />
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Gallery;
