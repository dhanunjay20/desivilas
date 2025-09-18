import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styles
import { FiMenu, FiX } from 'react-icons/fi'; // Using icons for the menu button

// By putting the ref forwarding here, this component is now ready for the dynamic padding logic from the previous step.
const Header = React.forwardRef((props, ref) => {
  // State to manage the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'home', href: '/' },
    { name: 'menu', href: '/menu' },
    { name: 'about us', href: '/about' },
    { name: 'services', href: '/services' },
    { name: 'gallery', href: '/gallery' },
    { name: 'order online', href: '/order' },
  ];

  // --- UPDATED LINK STYLES ---
  const activeLinkClasses = "text-orange-500"; // Active is orange

  // Styles for Desktop (light background)
  const desktopBase = "px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-300";
  const desktopInactive = "text-black hover:text-green-500"; // Initially black, hover green

  // Styles for Mobile (dark background)
  const mobileBase = "block py-3 text-lg";
  const mobileInactive = "text-neutral-300 hover:text-green-500"; // Initially light gray, hover green for visibility

  return (
    // Attach the forwarded ref to the main header element
    <header ref={ref} className="fixed top-0 left-0 w-full z-50 bg-zinc-900 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo Section */}
        <NavLink to="/" className="text-4xl font-bold tracking-wide">
          <span className="text-orange-500">Desi</span>
          <span className="text-white"> vilas</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex bg-white rounded-full p-2 pt-4 pb-4 items-center">
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="lg:hidden bg-zinc-900/95">
          <ul className="flex flex-col items-center p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <NavLink
                  to={item.href}
                  onClick={toggleMenu} // Close menu on click
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
