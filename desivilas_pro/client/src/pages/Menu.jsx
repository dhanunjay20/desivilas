import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import menuData from '../data/menuData';

/* Hero background image (above shader, below text) */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2400&auto=format&fit=crop';

/* Animated background (ShaderGradient) — provided URL */
const SHADER_URL =
  'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false';

/* Variants */
const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const listContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};
const listItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
};

/* Smooth scroll helper respecting sticky headers */
function scrollIntoViewWithOffset(el, offset = 90) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top - offset;
  window.scrollTo({ top: absoluteY, behavior: 'smooth' });
}

/* Diet helpers (data already contains diet, kept for safety) */
const dietFromName = (name = '') => {
  const n = name.toLowerCase();
  const nonVegHints = ['chicken', 'mutton', 'goat', 'egg', 'prawn', 'shrimp', 'fish'];
  if (nonVegHints.some((h) => n.includes(h))) return 'non-veg';
  return 'veg';
};

const dietPill = (diet) => {
  const base = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ring-1';
  if (diet === 'vegan') return `${base} bg-emerald-100 text-emerald-700 ring-emerald-200`;
  if (diet === 'non-veg') return `${base} bg-rose-100 text-rose-700 ring-rose-200`;
  return `${base} bg-green-100 text-green-700 ring-green-200`;
};

export default function MenuPage() {
  const [expanded, setExpanded] = useState(null);
  const itemRefs = useRef({}); // map category -> element

  useEffect(() => {
    if (expanded && itemRefs.current[expanded]) {
      const id = window.setTimeout(() => {
        scrollIntoViewWithOffset(itemRefs.current[expanded], 96);
      }, 40);
      return () => window.clearTimeout(id);
    }
  }, [expanded]);

  const toggleCategory = (cat) => setExpanded((prev) => (prev === cat ? null : cat));

  return (
    <main className="relative min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Global animated background (behind everything) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
          <ShaderGradient control="query" urlString={SHADER_URL} />
        </ShaderGradientCanvas>
      </div>

      {/* Hero with image above shader (but below text) */}
      <section className="relative h-[42vh] sm:h-[50vh] lg:h-[58vh] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Menu hero background"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-semibold text-orange-200">Fresh • Authentic • Crafted</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" style={{ fontFamily: 'serif' }}>
            Our Menu
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Explore every category—from breakfast classics and street‑style snacks to biryanis, dosas, and rich curries.
          </p>
        </motion.div>
      </section>

      {/* Menu */}
      <section className="relative mx-auto max-w-5xl px-6 md:px-10 lg:px-12 py-12">
        {menuData.map(({ category, items, url, description }) => {
          const isOpen = expanded === category;
          const panelId = `section-${category.replace(/\s+/g, '-')}`;
          const btnId = `btn-${category.replace(/\s+/g, '-')}`;

          return (
            <motion.article
              key={category}
              ref={(el) => (itemRefs.current[category] = el)}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-6 rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-black/5 shadow-xl"
            >
              <button
                id={btnId}
                onClick={() => toggleCategory(category)}
                className="group flex w-full items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold ring-1 ring-orange-200">
                    {category.charAt(0)}
                  </span>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-2xl sm:text-3xl font-semibold text-orange-700 hover:text-orange-800 transition-colors"
                    title={category}
                  >
                    {category}
                  </a>
                </div>
                <span className="ml-4 select-none text-3xl sm:text-4xl text-orange-500 group-hover:scale-110 transition-transform">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={listContainer}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="px-6 sm:px-8 pb-8"
                    >
                      {description && (
                        <motion.p
                          className="mb-4 max-w-2xl text-sm italic text-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {description}
                        </motion.p>
                      )}

                      <motion.ul className="divide-y divide-gray-200 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100 overflow-hidden">
                        {items.map(({ name, description, image, ingredients, diet }, idx) => {
                          const resolvedDiet = diet || dietFromName(name);
                          return (
                            <motion.li
                              key={`${name}-${idx}`}
                              variants={listItem}
                              className="flex flex-col items-start gap-4 p-4 sm:p-5 md:flex-row md:items-center hover:bg-orange-50/60 transition-colors"
                            >
                              <img
                                src={image || 'https://via.placeholder.com/120?text=No+Image'}
                                alt={name}
                                loading="lazy"
                                decoding="async"
                                className="h-20 w-28 max-w-full flex-shrink-0 rounded-lg object-cover ring-1 ring-gray-200"
                              />
                              <div className="min-w-0 w-full">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                                  <span className={dietPill(resolvedDiet)}>
                                    <span
                                      className={`h-2 w-2 rounded-full ${
                                        resolvedDiet === 'vegan'
                                          ? 'bg-emerald-600'
                                          : resolvedDiet === 'non-veg'
                                          ? 'bg-rose-600'
                                          : 'bg-green-600'
                                      }`}
                                    />
                                    {resolvedDiet === 'non-veg' ? 'Non‑veg' : resolvedDiet === 'vegan' ? 'Vegan' : 'Veg'}
                                  </span>
                                </div>

                                {description && (
                                  <p className="mt-1 max-w-2xl text-sm text-gray-600">{description}</p>
                                )}

                                {Array.isArray(ingredients) && ingredients.length > 0 && (
                                  <p className="mt-2 text-xs text-gray-500">
                                    <span className="font-medium text-gray-600">Ingredients:</span>{' '}
                                    {ingredients.join(', ')}
                                  </p>
                                )}
                              </div>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}
