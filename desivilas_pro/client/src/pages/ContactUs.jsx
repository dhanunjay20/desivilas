import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiClock,
  FiMapPin,
} from 'react-icons/fi';

const HERO_IMAGE = '/assets/contact-hero.jpg';

// Prefer the official Maps Embed API format; replace YOUR_API_KEY and the q parameter
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=London+Eye,London';

/* Motion variants */
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
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const ContactUs = () => {
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.log('Contact form submit:', payload);
    setStatus('Message sent! (demo)');
  };

  return (
    <main className="bg-[#F9F1E7] min-h-screen">
      {/* Hero (base layer) */}
      <section className="relative z-0 h-[38vh] md:h-[50vh] lg:h-[58vh] w-full overflow-hidden">
        {/* Background image sits behind everything */}
        <img
          src={HERO_IMAGE}
          alt="Assorted dishes on a table"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
        {/* Dark overlay at base so following sections can render above */}
        <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />

        {/* Hero content above overlay */}
        <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: 'serif' }}
          >
            Contact <span className="text-green-500">Us</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-3 max-w-2xl text-white/90"
          >
            Get in touch to discuss catering needs and create an unforgettable experience.
          </motion.p>
        </div>
      </section>

      {/* Map (pulled up with negative margin and forced above hero via z-index) */}
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 -mt-12 md:-mt-16">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-20 rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white"
        >
          <div className="relative w-full aspect-[16/9]">
            <iframe
              title="Location Map"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Details */}
          <aside className="lg:col-span-2">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.div variants={fadeUp} className="mb-6 flex items-center gap-2 text-orange-600">
                <span className="text-sm">Contact Us</span>
                <span aria-hidden>•</span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-extrabold text-zinc-900"
                style={{ fontFamily: 'serif' }}
              >
                Get in Touch
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-4 text-sm text-zinc-700 max-w-md">
                Reach out anytime for questions, support, or feedback—our team is here to assist and
                ensure the best experience possible.
              </motion.p>

              <motion.div variants={listContainer} className="mt-8 space-y-6">
                <motion.div variants={listItem}>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">For Booking</p>
                  <div className="mt-2 flex items-center gap-3 text-zinc-900">
                    <FiPhone className="text-green-600" />
                    <a href="tel:+15646434345" className="hover:text-green-700">
                      (564)-643-4345
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={listItem}>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">For Private Dining</p>
                  <div className="mt-2 flex items-center gap-3 text-zinc-900">
                    <FiMail className="text-green-600" />
                    <a href="mailto:info@eatflow.com" className="hover:text-green-700">
                      info@eatflow.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={listItem} className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">Follow Us</p>
                  <motion.div variants={listContainer} className="mt-3 flex items-center gap-3 text-zinc-600">
                    <motion.a
                      variants={listItem}
                      href="#"
                      aria-label="Facebook"
                      className="p-2 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:text-orange-600"
                    >
                      <FiFacebook />
                    </motion.a>
                    <motion.a
                      variants={listItem}
                      href="#"
                      aria-label="Twitter"
                      className="p-2 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:text-orange-600"
                    >
                      <FiTwitter />
                    </motion.a>
                    <motion.a
                      variants={listItem}
                      href="#"
                      aria-label="Instagram"
                      className="p-2 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:text-orange-600"
                    >
                      <FiInstagram />
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div variants={listItem} className="mt-8 rounded-2xl bg-zinc-900 text-zinc-100 p-5 shadow-md">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <FiClock />
                    <p className="font-semibold">Opening Hours</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Mon – Fri: 7:00am – 6:00pm
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Sat: 7:00am – 6:00pm
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Sun: 8:00am – 6:00pm
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={listItem} className="mt-8 flex items-start gap-3 text-zinc-700">
                  <FiMapPin className="mt-1 text-green-600" />
                  <p className="text-sm">
                    Riverside Building, County Hall, London SE1 7PB, United Kingdom
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-3xl bg-white p-6 md:p-8 shadow-lg ring-1 ring-black/5"
            >
              <motion.form
                onSubmit={onSubmit}
                noValidate
                className="space-y-5"
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.div variants={listItem}>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Name"
                    aria-required="true"
                  />
                </motion.div>

                <motion.div variants={listItem}>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-800">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="+1 555 3834"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </motion.div>

                <motion.div variants={listItem}>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-required="true"
                  />
                </motion.div>

                <motion.div variants={listItem}>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </motion.div>

                {status && (
                  <motion.p variants={fadeUp} className="text-sm text-green-700">
                    {status}
                  </motion.p>
                )}

                <motion.div variants={listItem} className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
