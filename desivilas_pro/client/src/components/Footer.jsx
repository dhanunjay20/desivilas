import React from 'react';
import { FiFeather } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Custom Menus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Wedding Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Private Parties</a></li>
            </ul>
          </div>
          
          {/* Column 3: Brand & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-orange-500">Desi</span>vilas
            </h1>
            <p className="text-gray-400">+76 (094) 784 52 54</p>
            <p className="text-gray-400">hello@desivilas.com</p>
            <p className="text-gray-400">Canada, Toronto, Avenue 31B</p>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <div className="flex flex-col items-center md:items-start gap-4">
              <input 
                type="email" 
                placeholder="Enter your email..."
                className="bg-[#2B2B2B] text-white rounded-full py-3 px-5 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-green-500 text-black font-bold py-3 rounded-full w-full max-w-xs hover:bg-green-400 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-orange-500"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-orange-500"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-orange-500"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col-reverse md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mt-4 md:mt-0">
            © Copyright 2025 <a href="#" className="text-orange-500 hover:underline">Desivilas</a> - All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
