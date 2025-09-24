import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import logo from '../assets/desivilas_logo.png';

const Header = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  const navItems = [
    { name: 'home', href: '/' },
    { name: 'menu', href: '/menu' },
    { name: 'about us', href: '/about' },
    { name: 'services', href: '/services' },
    { name: 'gallery', href: '/gallery' },
    { name: 'order', href: '/order' },
  ];

  // Active: underline + color
  const activeLinkClasses =
    'text-orange-600 underline decoration-2 decoration-orange-500 underline-offset-8'; // active underline styling [web:931][web:930]

  // Desktop base + hover: underline with offset and color
  const desktopBase =
    'px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-300'; // shared base styling [web:919]
  const desktopInactive =
    'text-black hover:text-orange-600 hover:underline hover:decoration-orange-400 hover:underline-offset-8'; // hover underline [web:931][web:930]

  // Mobile base + hover: underline with offset and color
  const mobileBase = 'block py-3 text-lg transition-colors'; // mobile base [web:919]
  const mobileInactive =
    'text-neutral-300 hover:text-orange-400 hover:underline hover:decoration-orange-300 hover:underline-offset-8'; // hover underline [web:931][web:930]

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 w-full max-w-[100vw] overflow-x-clip z-50 bg-zinc-900/100 backdrop-blur-lg"
    >
      {/* Row */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-3 md:py-4 px-4 md:px-8">
        {/* Larger responsive logo */}
        <NavLink to="/" className="flex items-center gap-3" aria-label="Desi Vilas home">
          <img
            src={logo}
            alt="Desi Vilas"
            width={200}
            height={200}
            decoding="async"
            className="h-14 md:h-16 lg:h-[72px] w-auto object-contain"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex bg-white rounded-full py-4 px-2 items-center">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${desktopBase} ${isActive ? activeLinkClasses : desktopInactive}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className="bg-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-orange-600 transition-colors duration-300 ml-2"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="lg:hidden bg-zinc-900/95 w-full">
          <ul className="flex flex-col items-center p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <NavLink
                  to={item.href}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `${mobileBase} ${isActive ? activeLinkClasses : mobileInactive}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="w-full pt-2">
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className="block w-full text-center bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
});

export default Header;
