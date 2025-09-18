import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

// Base styles (kept small and reusable)
const pillBase =
  'inline-flex items-center justify-center px-7 sm:px-8 py-3 font-semibold rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
const circleBase =
  'inline-flex items-center justify-center rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

// About-style pill (green -> white on hover)
const AboutPill = ({ label = 'About Us', className = '', ...rest }) => (
  <button
    {...rest}
    className={[
      pillBase,
      'bg-[#22C55E] text-white hover:bg-white hover:text-[#22C55E] hover:ring-2 hover:ring-[#22C55E]',
      'focus-visible:ring-[#22C55E] focus-visible:ring-offset-white',
      className,
    ].join(' ')}
  >
    {label}
  </button>
);

// Arrow circle (orange -> white on hover)
const ArrowCircle = ({ size = 44, className = '', iconSize = 20, ...rest }) => (
  <button
    {...rest}
    style={{ width: size, height: size }}
    className={[
      circleBase,
      'bg-[#F97316] text-white hover:bg-white hover:text-[#F97316] hover:ring-2 hover:ring-[#F97316]',
      'focus-visible:ring-[#F97316] focus-visible:ring-offset-white',
      className,
    ].join(' ')}
    aria-label="Open"
  >
    <FiArrowUpRight size={iconSize} />
  </button>
);

/**
 * Exported primary component that renders BOTH buttons in a single wrapper.
 * Props:
 * - label: text for the pill button (default "About Us")
 * - onPrimaryClick: click handler for the pill
 * - onArrowClick: click handler for the round arrow
 * - gap: space between buttons (Tailwind gap class)
 * - className: wrapper classes
 */
const Buttons = ({
  label = 'About Us',
  onPrimaryClick,
  onArrowClick,
  gap = 'gap-4',
  className = '',
  ...rest
}) => (
  <div className={['flex items-center', gap, className].join(' ')} {...rest}>
    <AboutPill label={label} onClick={onPrimaryClick} />
    <ArrowCircle onClick={onArrowClick} />
  </div>
);

export default Buttons;

// Optional named exports if you ever want to use them individually
export { AboutPill, ArrowCircle };
