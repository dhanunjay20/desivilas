import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import HERO_IMAGE from '../assets/services.jpg'; // Adjust path to your actual asset

const FEATURE_IMAGE =
  'https://images.unsplash.com/photo-1606491956689-2e67f4d8e9c2?q=80&w=1600&auto=format&fit=crop';
const BENEFIT_IMAGE =
  'https://images.unsplash.com/photo-1541542684-4a9c9b237f37?q=80&w=1600&auto=format&fit=crop';

const sidebarServices = ['Parties', 'Social Events', 'Wedding', 'Corporate'];

const recentImages = [
  'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472357-c87b7ce86654?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
];

const benefits = [
  { title: 'Pre‑Wedding Tastings', text: 'Experience your chosen menu in advance to ensure it’s exactly as envisioned.' },
  { title: 'Custom Beverage Stations', text: 'Signature cocktails, coffee bars, and mocktail stations to elevate celebrations.' },
  { title: 'Elegant Dessert Displays', text: 'Beautiful dessert tables or customized wedding cakes that delight guests.' },
  { title: 'Seamless Coordination', text: 'Our team works with your planner to ensure smooth timelines and service.' },
  { title: 'Fresh Ingredients', text: 'Seasonal, high‑quality produce and proteins for memorable flavors.' },
];

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const SectionTitle = ({ children }) => (
  <motion.h2
    variants={fadeUp}
    className="text-2xl md:text-3xl font-extrabold text-zinc-900"
    style={{ fontFamily: 'serif' }}
  >
    {children}
  </motion.h2>
);

/* Accordion with whileInView animated items */
const Accordion = ({ items }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mt-5 divide-y divide-zinc-200"
    >
      {items.map((it, idx) => {
        const isOpen = openIdx === idx;
        const buttonId = `offer-btn-${idx}`;
        const panelId = `offer-panel-${idx}`;

        return (
          <motion.div key={it.title} variants={fadeUp} className="py-4">
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-lg md:text-xl lg:text-2xl font-semibold text-zinc-900">
                {it.title}
              </span>
              <span
                className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <FiChevronDown />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="pt-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Image */}
                      <motion.div variants={scaleIn} className="md:col-span-1 overflow-hidden rounded-2xl">
                        <img
                          src={it.media}
                          alt={it.title}
                          className="h-44 md:h-48 w-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>

                      {/* Details */}
                      <motion.ul variants={listContainer} className="md:col-span-2 space-y-5">
                        {it.points.map((p, i) => (
                          <motion.li key={p.sub + i} variants={listItem} className="pl-4 relative">
                            <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-orange-500" />
                            <p className="text-base md:text-lg font-semibold text-zinc-900">{p.sub}</p>
                            <p className="mt-1 text-[15px] md:text-base leading-relaxed text-zinc-700">{p.text}</p>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const Services = () => {
  return (
    <main className="bg-[#F9F1E7] min-h-screen">
      {/* Hero */}
      <section className="relative h-[38vh] md:h-[50vh] lg:h-[58vh] w-full overflow-hidden">
        <img src={HERO_IMAGE} alt="Wedding catering hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: 'serif' }}
          >
            Wedding <span className="text-green-500">Catering</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-3 max-w-2xl text-white/90"
          >
            Elegant wedding catering tailored to your day, featuring exquisite menus, flawless service, and unforgettable flavors.
          </motion.p>
        </div>
      </section>

      {/* Main two-column layout */}
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left/main content */}
          <div className="lg:col-span-2">
            <motion.header
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mb-6"
            >
              <SectionTitle>Catering events of all sizes</SectionTitle>
              <motion.p variants={fadeUp} className="mt-3 text-[15px] md:text-base text-zinc-700 leading-relaxed">
                Whether planning an intimate ceremony or a grand wedding with hundreds of guests, our team crafts bespoke catering solutions that reflect unique styles and preferences.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-3 text-[15px] md:text-base text-zinc-700 leading-relaxed">
                With a focus on quality and seamless execution, we provide exceptional service for weddings of any size.
              </motion.p>
            </motion.header>

            {/* Feature image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 bg-white"
            >
              <img src={FEATURE_IMAGE} alt="Table setup with florals and candles" className="w-full h-[320px] md:h-[420px] object-cover" />
            </motion.div>

            {/* What we offer (enhanced accordion) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10 rounded-3xl bg-white p-6 md:p-8 shadow-lg ring-1 ring-black/5"
            >
              <motion.h3
                variants={fadeUp}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900"
                style={{ fontFamily: 'serif' }}
              >
                What we offer
              </motion.h3>

              <Accordion
                items={[
                  {
                    title: 'Delivered',
                    media:
                      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
                    points: [
                      { sub: 'Timely Drop‑off', text: 'Freshly cooked dishes delivered on schedule with insulated packaging.' },
                      { sub: 'Buffet Ready', text: 'Clear labels and containers designed for quick buffet setup.' },
                      { sub: 'Disposable Setup', text: 'Eco‑friendly disposables provided for easy service and cleanup.' },
                    ],
                  },
                  {
                    title: 'Plated Catering',
                    media:
                      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop',
                    points: [
                      { sub: 'Course‑wise Service', text: 'Elegant multi‑course menus, perfectly paced per table.' },
                      { sub: 'Menu Curation', text: 'Vegetarian, vegan, Jain, and custom preferences supported.' },
                      { sub: 'Service Team', text: 'Professional servers ensuring consistent presentation.' },
                    ],
                  },
                  {
                    title: 'Resident Catering',
                    media:
                      'https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?q=80&w=1600&auto=format&fit=crop',
                    points: [
                      { sub: 'On‑site Kitchen', text: 'Live preparation at the venue for peak freshness and flexibility.' },
                      { sub: 'Chef on Duty', text: 'Lead chef supervising taste, hygiene, and plating standards.' },
                      { sub: 'Flexible Menus', text: 'Real‑time adjustments and customizations handled smoothly.' },
                    ],
                  },
                  {
                    title: 'Personalized Catering',
                    media:
                      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
                    points: [
                      { sub: 'Theme Design', text: 'Cuisine and decor aligned to wedding themes and cultures.' },
                      { sub: 'Dietary Preferences', text: 'Keto, gluten‑free, nut‑free, and allergen‑safe preparations.' },
                      { sub: 'Signature Dishes', text: 'Chef’s specials and family recipes recreated with care.' },
                    ],
                  },
                ]}
              />
            </motion.div>

            {/* Benefits grid + image */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10"
            >
              <motion.h3 variants={fadeUp} className="text-xl md:text-2xl font-bold text-zinc-900 mb-4" style={{ fontFamily: 'serif' }}>
                What we offer
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.ul variants={listContainer} className="rounded-3xl bg-white p-6 md:p-7 shadow-lg ring-1 ring-black/5 space-y-5">
                  {benefits.map((b) => (
                    <motion.li key={b.title} variants={listItem} className="pl-4 relative">
                      <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <p className="text-base md:text-lg font-semibold text-zinc-900">{b.title}</p>
                      <p className="text-[15px] md:text-base text-zinc-600 mt-1">{b.text}</p>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={scaleIn} className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
                  <img src={BENEFIT_IMAGE} alt="Service team plating appetizers" className="h-full w-full object-cover md:h-[370px]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Packages */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10"
            >
              <SectionTitle>Packages Tailored to You</SectionTitle>
              <motion.p variants={fadeUp} className="mt-3 text-[15px] md:text-base text-zinc-700 leading-relaxed">
                Choose from curated packages or collaborate with the team to craft a custom experience that fits the guest count, venue, and budget.
              </motion.p>
            </motion.div>

            {/* CTA paragraph */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10"
            >
              <SectionTitle>Let’s Make Your Day Unforgettable</SectionTitle>
              <motion.p variants={fadeUp} className="mt-3 text-[15px] md:text-base text-zinc-700 leading-relaxed">
                Schedule a consultation to explore menus, tastings, and event flow so the wedding day feels effortless and exceptional.
              </motion.p>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:sticky lg:top-6 space-y-8"
            >
              {/* Services list */}
              <motion.div variants={scaleIn} className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <h4 className="font-semibold text-zinc-900">Services</h4>
                <motion.div variants={listContainer} className="mt-4 space-y-3">
                  {sidebarServices.map((s) => (
                    <motion.button
                      key={s}
                      variants={listItem}
                      className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-left text-sm md:text-base text-zinc-700 hover:border-orange-400 hover:bg-orange-50"
                      type="button"
                    >
                      {s}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>

              {/* Recent events grid */}
              <motion.div variants={scaleIn} className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <h4 className="font-semibold text-zinc-900">Recent Events</h4>
                <motion.div variants={listContainer} className="mt-4 grid grid-cols-3 gap-2">
                  {recentImages.slice(0, 9).map((src, i) => (
                    <motion.div key={src + i} variants={listItem} className="overflow-hidden rounded-lg">
                      <img src={src} alt="Event" className="h-20 w-full object-cover" loading="lazy" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Promo card */}
              <motion.div variants={scaleIn} className="relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
                  alt="Promo"
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 p-6 flex flex-col items-start justify-end text-white">
                  <p className="text-sm opacity-80">On first order</p>
                  <p className="mt-1 text-3xl font-extrabold">16% Off</p>
                  <a
                    href="/contact"
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600"
                  >
                    Call us Now
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Services;
