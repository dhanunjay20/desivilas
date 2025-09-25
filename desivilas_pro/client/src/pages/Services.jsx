import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiSearch, FiSend } from 'react-icons/fi';
import { MENU_CATEGORIES } from '../data/menuCategories';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

// Animated background (same as MenuPage)
const SHADER_URL =
  'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false';

// Motion presets
const fadeSection = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const chipIn = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

const itemIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const Services = () => {
  // Accordion and filters
  const [openIds, setOpenIds] = useState(() => new Set(MENU_CATEGORIES.slice(0, 3).map((c) => c.id)));
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    if (!query.trim()) return MENU_CATEGORIES;
    const q = query.toLowerCase();
    return MENU_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter((it) => it.toLowerCase().includes(q)),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

  const topFilters = useMemo(() => ['All', ...MENU_CATEGORIES.map((c) => c.title)], []);
  const filteredCategories = useMemo(() => {
    if (activeFilter === 'All') return categories;
    return categories.filter((c) => c.title === activeFilter);
  }, [categories, activeFilter]);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Formspree AJAX form state
  const [status, setStatus] = useState({ ok: false, error: '' });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ ok: false, error: '' });

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch('https://formspree.io/f/mvgbekzz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus({ ok: true, error: '' });
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        const msg = Array.isArray(json?.errors)
          ? json.errors.map((er) => er.message).join(', ')
          : 'Oops! There was a problem submitting your form';
        setStatus({ ok: false, error: msg });
      }
    } catch {
      setStatus({ ok: false, error: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Animated background: fixed canvas behind everything */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
          <ShaderGradient control="query" urlString={SHADER_URL} />
        </ShaderGradientCanvas>
      </div>

      {/* Hero */}
      <section
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[50vh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://res.cloudinary.com/djoq264q0/image/upload/v1758537488/paneer_biryani_1_1_nvgdho.jpg')` }} // replace with your image URL
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Catering Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="mt-3 text-white/90 max-w-xl"
          >
            Explore categories, then send a catering request with event details below.
          </motion.p>
            <button
              onClick={() => {
                const formSection = document.getElementById('catering-form');
                if (formSection) {
                  const offset = 80; // header height or desired offset
                  const top = formSection.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition"
            >
              Inquire Now
            </button>
            
        </div>
      </section>
          

      {/* Tools */}
      <motion.section
        variants={fadeSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10"
      >
        <div className="flex flex-col gap-4">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full md:max-w-md"
          >
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search items or categories..."
              className="w-full rounded-full bg-white/90 backdrop-blur py-3 pl-10 pr-4 text-sm text-zinc-800 ring-1 ring-zinc-200 outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Search menu"
            />
          </motion.div>

          {/* Category buttons (wrap into rows, no scroll) */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3"
          >
            {topFilters.map((t) => (
              <motion.button
                key={t}
                variants={chipIn}
                onClick={() => setActiveFilter(t)}
                className={[
                  'rounded-full px-4 py-2 text-sm ring-1 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500',
                  activeFilter === t
                    ? 'bg-orange-500 text-white ring-orange-500'
                    : 'bg-white/90 backdrop-blur text-zinc-800 ring-zinc-200 hover:bg-orange-50 hover:text-orange-600',
                ].join(' ')}
                aria-pressed={activeFilter === t}
              >
                {t}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="space-y-4">
          {filteredCategories.map((cat) => {
            const open = openIds.has(cat.id);
            return (
              <motion.div
                key={cat.id}
                variants={fadeSection}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 overflow-hidden shadow"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-orange-50/50 transition-colors"
                  aria-expanded={open}
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900">{cat.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-500">
                      {cat.items.length} item{cat.items.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown className="text-zinc-500" size={20} aria-hidden="true" />
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="px-5 pb-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                        {cat.items.map((name) => (
                          <motion.div
                            key={name}
                            variants={itemIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="rounded-lg bg-orange-50 text-orange-700 ring-1 ring-orange-100 px-3 py-2 hover:bg-orange-100 transition-colors"
                          >
                            {name}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Catering Request Form (Formspree) */}
      <motion.section
        variants={fadeSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white/70 backdrop-blur"
      >
        <div id='catering-form' className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900">Request Catering</h2>
            <p className="mt-2 text-zinc-600">
              Submissions are sent via Formspree to the configured recipient for your form ID.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-800">Full name</label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-800">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-800">Phone</label>
              <input
                id="phone"
                name="phone"
                inputMode="tel"
                pattern="[0-9+\-\s()]{7,}"
                required
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-zinc-800">Guest count</label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                required
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-zinc-800">Event date</label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="eventTime" className="block text-sm font-medium text-zinc-800">Event time</label>
              <input
                id="eventTime"
                name="eventTime"
                type="time"
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <label htmlFor="location" className="block text-sm font-medium text-zinc-800">Event location</label>
              <input
                id="location"
                name="location"
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Service type */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-zinc-800">Service type</label>
              <select
                id="serviceType"
                name="serviceType"
                required
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Select...</option>
                <option>Wedding Catering</option>
                <option>Corporate Event</option>
                <option>Private Party</option>
                <option>Social Event</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-800">
                Menu preferences / notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-lg bg-white/95 backdrop-blur py-3 px-3 text-sm text-zinc-900 ring-1 ring-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="e.g., Veg-only, include Lassi & Chaat, spice level, allergies"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 disabled:opacity-70 transition-colors"
              >
                <FiSend />
                {submitting ? 'Sending...' : 'Send request'}
              </button>
              {status.ok && <span className="ml-3 text-sm text-emerald-600">Thanks! Your request has been sent.</span>}
              {status.error && <span className="ml-3 text-sm text-red-600">{status.error}</span>}
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  );
};

export default Services;
