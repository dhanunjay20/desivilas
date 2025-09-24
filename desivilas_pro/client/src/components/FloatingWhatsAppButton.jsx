import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const PHONE_E164 = '16364158512'; // +1 (636) 415-8512 without symbols
const PREFILL = encodeURIComponent('Hi! I have a question about your menu and catering.');

const buildWhatsAppHref = () => {
  // Use wa.me for universal WhatsApp; fallback to tel: if needed
  return `https://wa.me/${PHONE_E164}?text=${PREFILL}`;
};

const FloatingWhatsAppButton = ({ className = '' }) => {
  return (
    <a
      href={buildWhatsAppHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={[
        'fixed left-4 bottom-4 z-50',
        'inline-flex items-center gap-2 rounded-full px-4 py-3',
        'bg-[#25D366] text-white shadow-lg',
        'hover:brightness-110 active:brightness-95',
        'transition-all duration-200',
        className,
      ].join(' ')}
    >
      <FaWhatsapp size={20} />
      <span className="hidden sm:inline font-semibold">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
