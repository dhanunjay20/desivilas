import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const PHONE_E164 = '16364158512'; // +1 (636) 415-8512 without symbols
const PREFILL = encodeURIComponent('Hi! I have a question about your menu and catering.');

const buildWhatsAppHref = () => `https://wa.me/${PHONE_E164}?text=${PREFILL}`;

const FloatingWhatsAppButton = ({
  className = '',
  size = 56,       // circle diameter in px
  iconSize = 24,   // icon size in px
}) => {
  return (
    <a
      href={buildWhatsAppHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      // Exact circle: equal width/height + rounded-full
      style={{ width: size, height: size }}
      className={[
        'fixed left-4 bottom-4 z-50',
        'inline-flex items-center justify-center rounded-full',
        'bg-[#25D366] text-white shadow-lg',
        'hover:brightness-110 active:brightness-95',
        // Accessible focus ring
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]',
        'transition-all duration-200',
        className,
      ].join(' ')}
    >
      <FaWhatsapp size={iconSize} />
    </a>
  );
};

export default FloatingWhatsAppButton;
