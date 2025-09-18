import React from 'react';
import { motion } from 'framer-motion';
import HERO_IMAGE from '../assets/gallery.jpg';

// Images with desired spans; aspect handled via safe classes + fallbacks
const images = [
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop', alt: 'Plating dish', cols: 2, kind: 'video' },
  { src: 'https://images.unsplash.com/photo-1506368083636-6defb67639c5?q=80&w=1600&auto=format&fit=crop', alt: 'Roast prep', cols: 1, kind: 'tall' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop', alt: 'Server with plates', cols: 1, kind: 'square' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop', alt: 'Pasta bowl', cols: 2, kind: 'wide' },
  { src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop', alt: 'Dessert slice', cols: 1, kind: 'tall' },
  { src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop', alt: 'Breakfast spread', cols: 1, kind: 'classic' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop', alt: 'Salad plate', cols: 2, kind: 'wide' },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop', alt: 'Steak close-up', cols: 1, kind: 'tallish' },
  { src: 'https://images.unsplash.com/photo-1526318472357-c87b7ce86654?q=80&w=1600&auto=format&fit=crop', alt: 'Dessert tray', cols: 1, kind: 'classic' },
  { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop', alt: 'Veggies and dip', cols: 2, kind: 'wide' },
  { src: 'https://images.unsplash.com/photo-1543357480-c60d40007a3a?q=80&w=1600&auto=format&fit=crop', alt: 'Coffee latte art', cols: 1, kind: 'square' },
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop', alt: 'Bar counter', cols: 1, kind: 'tall' },
];

// Map “kind” to safe aspect + fallback height
const kindToClasses = (kind) => {
  // Each item gets a min-h fallback so it still shows if aspect-ratio utilities are missing
  switch (kind) {
    case 'video':   // 16:9 feel
      return 'min-h-[220px] sm:min-h-[260px] aspect-video';
    case 'wide':    // cinematic
      return 'min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] aspect-video';
    case 'square':  // square
      return 'min-h-[220px] aspect-square';
    case 'tall':    // portrait-ish
      return 'min-h-[260px] sm:min-h-[300px] aspect-square sm:aspect-video';
    case 'tallish': // 5:6 feel (approx)
      return 'min-h-[240px] sm:min-h-[280px] aspect-square';
    case 'classic': // 4:3 feel (approx)
    default:
      return 'min-h-[220px] sm:min-h-[260px] aspect-square';
  }
};

// Responsive col span on large screens
const spanClass = (cols = 1) => {
  if (cols === 2) return 'lg:col-span-2';
  if (cols === 3) return 'lg:col-span-3';
  if (cols === 4) return 'lg:col-span-4';
  return 'lg:col-span-1';
};

const gridVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Gallery = () => {
  return (
    <main className="bg-[#F9F1E7] min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Hero */}
      <section className="relative h-[42vh] md:h-[56vh] lg:h-[64vh] w-full overflow-hidden">
        <img src={HERO_IMAGE} alt="Gallery hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Gallery</h1>
          <p className="mt-3 max-w-2xl text-white/90 text-base md:text-lg">
            A glimpse into our kitchen craft and dining moments.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-6"
        >
          {images.map((img, i) => (
            <motion.figure
              key={img.src + i}
              variants={itemVariants}
              className={[
                'relative overflow-hidden rounded-2xl bg-zinc-100',
                // Height via safe aspect utilities + min-height fallback
                kindToClasses(img.kind),
                // Width via column span for varied widths on large screens
                spanClass(img.cols),
              ].join(' ')}
            >
              <img
                src={img.src}
                alt={img.alt || 'Gallery image'}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
                draggable={false}
              />
            </motion.figure>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Gallery;
