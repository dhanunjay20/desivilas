import React, { useEffect, useState, useCallback } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = ({ threshold = 400 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-5 z-50 rounded-full bg-orange-500 text-white shadow-lg ring-1 ring-black/5 transition-all
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  h-12 w-12 grid place-items-center hover:bg-orange-600`}
    >
      <FiArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
