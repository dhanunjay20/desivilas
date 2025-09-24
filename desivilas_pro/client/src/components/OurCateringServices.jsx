import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons';
import { FiFeather } from 'react-icons/fi';

// Brand colors
const ORANGE = '#E1783C';
const CREAM = '#FBF3EE';
const WHITE = '#FFFFFF';
const BG = '#0B0B0B';

const services = [
  {
    title: 'Catering Services',
    image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622255/Best_Catering_Services_in_Bhubaneswar_ippta5.jpg',
    number: '01',
    collapsedBg: ORANGE,
  },
  {
    title: 'Self Dine In',
    image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622360/download_50_a8gmfd.jpg',
    number: '02',
    collapsedBg: CREAM,
  },
  {
    title: 'Flavours Of the Day',
    image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622436/Brownie_Ice_Cream_Pure_Bliss___Craving_the_perfect_dessert_combo__Dive_into_our_Ultimate_fnk74w.jpg',
    number: '03',
    collapsedBg: WHITE,
  },
  {
    title: 'Social Events',
    image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758622557/download_51_ezxllo.jpg',
    number: '04',
    collapsedBg: WHITE,
  },
];

// Quarter-ellipse curved mask for image clipping
const curvedMaskStyle = {
  clipPath: 'path("M 0 100% A 100% 100% 0 0 1 100% 0 L 100% 100% Z")',
  WebkitClipPath: 'path("M 0 100% A 100% 100% 0 0 1 100% 0 L 100% 100% Z")',
  WebkitMaskImage: 'radial-gradient(130% 95% at 0% 100%, #000 98%, transparent 100%)',
  maskImage: 'radial-gradient(130% 95% at 0% 100%, #000 98%, transparent 100%)',
};

const OurCateringServices = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  // Flexible widths for expanded & collapsed
  const expandedBasis = '40%';
  const collapsedBasis = '15%';

  const handleCardClick = () => {
    navigate('/services');
  };

  const handleViewAllClick = () => {
    navigate('/services');
  };

  return (
    <section className="w-full" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
            <FiFeather /><h2 className="font-semibold text-sm">Our Services</h2><FiFeather />
          </div>
          <h2 className="text-5xl font-bold text-white text-center mb-12">Our Catering Services</h2>
        <div
          className="hidden md:flex h-[600px] items-stretch gap-5 justify-center"
          onMouseLeave={() => setActive(0)}
        >
          {services.map((s, i) => {
            const expanded = active === i;
            const bgColor = expanded ? ORANGE : s.collapsedBg;

            return (
              <motion.div
                key={s.title}
                initial={false}
                animate={{ flexBasis: expanded ? expandedBasis : collapsedBasis }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={handleCardClick}
                tabIndex={0}
                role="button"
                aria-expanded={expanded}
                aria-label={s.title}
                className="relative rounded-[22px] overflow-hidden cursor-pointer outline-none"
                style={{ backgroundColor: bgColor }}
              >
                {/* Padding around content */}
                <div className="absolute inset-0 p-8 md:p-10 lg:p-12">
                  <div className="h-full w-full relative">
                    {/* Collapsed title + number */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: expanded ? 0 : 1 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute inset-0 flex flex-col justify-between"
                    >
                      <h3
                        className="leading-tight text-zinc-900"
                        style={{ fontWeight: 600, fontSize: '28px' }} // reduced font size
                      >
                        {s.title.split(' ').map((word, idx) => (
                          <span key={idx} className="block">
                            {word}
                          </span>
                        ))}
                      </h3>
                      <span
                        className="select-none"
                        style={{
                          fontWeight: 700,
                          fontSize: '100px', // reduced font size
                          lineHeight: 1,
                          color: `${ORANGE}80`,
                          alignSelf: 'flex-end',
                        }}
                      >
                        {s.number}
                      </span>
                    </motion.div>

                    {/* Expanded title */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: expanded ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <h3
                        className=" leading-tight text-white"
                        style={{ fontWeight: 700, fontSize: '40px' }} // reduced font size
                      >
                        {s.title.split(' ').map((word, idx) => (
                          <span key={idx} className="block">
                            {word}
                          </span>
                        ))}
                      </h3>
                    </motion.div>

                    {/* Curved image block for expanded card */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: expanded ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
                      className="absolute"
                      style={{
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        height: '60%',
                        ...curvedMaskStyle,
                        backgroundImage: `url(${s.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 18,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile stacked fallback */}
        <div className="grid md:hidden gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-[18px] overflow-hidden"
              style={{ backgroundColor: CREAM }}
              onClick={handleCardClick}
              role="button"
              tabIndex={0}
              aria-label={s.title}
            >
              <div className="p-6">
                <h3 className=" text-2xl font-semibold text-zinc-900">{s.title}</h3>{' '}
                {/* reduced mobile title font */}
              </div>
              <div className="h-56 w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Buttons label="View all services" onPrimaryClick={handleViewAllClick} onArrowClick={handleViewAllClick} />
        </div>
      </div>
    </section>
  );
};

export default OurCateringServices;
