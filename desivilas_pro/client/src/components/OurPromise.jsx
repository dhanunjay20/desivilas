import React from 'react';
import { motion } from 'framer-motion';
import { FiFeather } from 'react-icons/fi';

const CARDS = [
  { title: 'Our Vision', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop', alt: 'Chef plating a dish', text: 'To be the ultimate destination for food lovers, where every meal is a memorable experience.' },
  { title: 'Our Mission', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758618244/Serives_food1_p4u0ya.jpg', alt: 'Chef preparing roast with sides', text: 'To combine culinary creativity, authentic flavors, and best service, making every dining experience special.' },
  { title: 'Our Brand Promise', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop', alt: 'Server carrying plated appetizers', text: 'Consistently delivering fresh, flavorful, and memorable meals with exceptional service and attention to detail.' },
];

const container = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.12 } } };
const card = { hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

export default function OurPromise() {
  return (
    <section className="relative bg-[#F9F1E7] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
            <FiFeather /><h2 className="font-semibold text-sm">Our Promise</h2><FiFeather />
          </div>
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Our Promise</h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((c) => (
            <motion.article key={c.title} variants={card} className="rounded-[28px] p-4 md:p-5 bg-neutral-950/95 ring-1 ring-white/10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.6)]">
              <div className="overflow-hidden rounded-2xl">
                <img src={c.image} alt={c.alt} className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.03]" loading="lazy" decoding="async" draggable={false} />
              </div>
              <div className="px-2 md:px-3 pb-2 md:pb-3 pt-6 md:pt-7 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{c.title}</h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-300">{c.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
    </section>
  );
}
