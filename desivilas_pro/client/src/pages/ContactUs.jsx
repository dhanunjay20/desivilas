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
import GoogleReviewsWidget from 'google-reviews-widget';

import HERO_IMAGE from '../assets/contact_us.jpg';

// Replace YOUR_API_KEY and q with your actual map location
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.1381754847653!2d-90.76082801838604!3d38.76635851063549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87decfa6850c8e4f%3A0xf3ecb812f6ec917f!2sDesi%20Vilas!5e0!3m2!1sen!2sin!4v1758704468897!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: false, error: '', message: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ ok: false, error: '', message: '' });

    try {
      const formEl = e.currentTarget;
      const data = new FormData(formEl);

      const res = await fetch('https://formspree.io/f/xzzanedq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus({ ok: true, error: '', message: 'Thanks! Your message has been sent.' });
        formEl.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        const msg = Array.isArray(json?.errors)
          ? json.errors.map((er) => er.message).join(', ')
          : 'Oops! There was a problem submitting your form.';
        setStatus({ ok: false, error: msg, message: '' });
      }
    } catch {
      setStatus({ ok: false, error: 'Network error. Please try again.', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F9F1E7] min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Hero */}
      <section className="relative z-0 h-[38vh] md:h-[50vh] lg:h-[50vh] w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Assorted dishes on a table"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />

        <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
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

      {/* Map */}
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
              >
                Get in Touch
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-4 text-sm text-zinc-700 max-w-md">
                Desi Vilas offers a delicious selection of authentic Indian cuisine, including lunch specials, flavorful rice dishes, and more. Whether you’re craving a quick meal or planning a special event, we provide convenient carryout and catering services to bring the rich taste of India to your table. Enjoy the vibrant flavour’s of India with every bite!
              </motion.p>

              <motion.div variants={listContainer} className="mt-8 space-y-6">
                <motion.div variants={listItem}>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">For Booking</p>
                  <div className="mt-2 flex items-center gap-3 text-zinc-900">
                    <FiPhone className="text-green-600" />
                    <a href="tel:+1 (636) 415-8512" className="hover:text-green-700">
                      +1 (636) 415-8512
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={listItem}>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">For Private Dining</p>
                  <div className="mt-2 flex items-center gap-3 text-zinc-900">
                    <FiMail className="text-green-600" />
                    <a href="mailto:info@eatflow.com" className="hover:text-green-700">
                      contact@desivilas.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={listItem} className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">Follow Us</p>
                  <motion.div variants={listContainer} className="mt-3 flex items-center gap-3 text-zinc-600">
                    <motion.a variants={listItem} href="https://www.facebook.com/desi.vilas/" aria-label="Facebook" className="p-2 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:text-orange-600" target='_blank'>
                      <FiFacebook />
                    </motion.a>
                    <motion.a variants={listItem} href="https://www.instagram.com/desi.vilas/" aria-label="Instagram" className="p-2 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:text-orange-600" target='_blank'>
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
                      Mon – Closed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Tue – Thu : 11:00 AM - 2:00 PM, 4:00 PM - 9:30 PM
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Fri : 11:00 AM – 10:00 PM
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Sat : 9:30 AM – 10:00 PM
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                      Sun : 9:30 AM – 9:30 PM
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={listItem} className="mt-8 flex items-start gap-3 text-zinc-700">
                  <FiMapPin className="mt-1 text-green-600" />
                  <p className="text-sm">
                    324 Harmony Meadows Ct, Dardenne Prairie, MO 63368, USA
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </aside>

          {/* Right: Form (Formspree) */}
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

                {/* Status area (screen reader friendly) */}
                <motion.p
                  variants={fadeUp}
                  aria-live="polite"
                  className="text-sm"
                >
                  {status.ok && <span className="text-emerald-700">{status.message}</span>}
                  {!status.ok && status.error && <span className="text-red-600">{status.error}</span>}
                </motion.p>

                <motion.div variants={listItem} className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-70"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
        <div className="my-12 border-t border-zinc-200" />
        <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
                 Customer Reviews
            </h2>
        </div>
        <GoogleReviewsWidget instanceId="KBeWWdwWpxO7gHSAR56r" />
      </section>
    </main>
  );
};

export default ContactUs;
