import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import logo from '../assets/desivilas_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/menu" className="text-gray-400 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services#corporate" className="text-gray-400 hover:text-orange-500 transition-colors">Corporate Events</a></li>
              <li><a href="/services#custom-menus" className="text-gray-400 hover:text-orange-500 transition-colors">Custom Menus</a></li>
              <li><a href="/services#wedding" className="text-gray-400 hover:text-orange-500 transition-colors">Wedding Catering</a></li>
              <li><a href="/services#private" className="text-gray-400 hover:text-orange-500 transition-colors">Private Parties</a></li>
            </ul>
          </div>

          {/* Brand + contact with logo image */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" aria-label="Desi Vilas home" className="mb-4 inline-flex items-center">
              <img
                src={logo}
                alt="Desi Vilas"
                width={200}                   // intrinsic size to reserve space (reduces CLS)
                height={200}
                decoding="async"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 flex items-center gap-2">
              <FiPhone className='text-orange-500' /> <a href="tel:+760947845254">+1 (636) 415-8512</a>
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FiMail className='text-orange-500' /> <a href="mailto:hello@desivilas.com">contact@desivilas.in</a>
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FiMapPin className='text-orange-500' /> 324 Harmony Meadows Ct Dardenne Prairie 63368, USA
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <form
              onSubmit={(e) => { e.preventDefault(); console.log('subscribe'); }}
              className="flex flex-col items-center md:items-start gap-4"
            >
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Enter your email..."
                required
                className="bg-[#2B2B2B] text-white rounded-full py-3 px-5 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button type="submit" className="bg-green-500 text-black font-bold py-3 rounded-full w-full max-w-xs hover:bg-green-400 transition-colors">
                Subscribe
              </button>
            </form>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="https://www.facebook.com/desi.vilas/" aria-label="Facebook" className="text-gray-400 hover:text-orange-500" target='_blank'><FaFacebookF /></a>
              <a href="https://www.instagram.com/desi.vilas/" aria-label="Instagram" className="text-gray-400 hover:text-orange-500" target='_blank'><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col-reverse md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mt-4 md:mt-0">
            © 2025 <a href="/" className="text-orange-500 hover:underline">Desivilas</a> — All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
