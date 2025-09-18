import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const pillBase =
  'inline-flex items-center justify-center px-7 sm:px-8 py-3 font-semibold rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
const circleBase =
  'inline-flex items-center justify-center rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

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

const Buttons = ({ label = 'About Us', onPrimaryClick, onArrowClick, gap = 'gap-4', className = '', ...rest }) => (
  <div className={['flex items-center', gap, className].join(' ')} {...rest}>
    <AboutPill label={label} onClick={onPrimaryClick} />
    <ArrowCircle onClick={onArrowClick} />
  </div>
);

export default Buttons;
export { AboutPill, ArrowCircle };
