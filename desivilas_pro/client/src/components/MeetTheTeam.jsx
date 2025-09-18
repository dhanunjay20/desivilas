import React from 'react';
import { FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Buttons from '../components/Buttons';
import chefs from '../assets/chefs.png';

const teamMembers = [
  { name: 'Alexandra Hayes', role: 'Head Chef', image: chefs, bgColor: '#6CC070', shapePath: 'M20,10 L80,10 L90,25 L90,40 L98,50 L90,60 L90,75 L80,90 L20,90 L10,75 L10,60 L2,50 L10,40 L10,25 Z' },
  { name: 'Olivia Martin', role: 'Event Planner', image: chefs, bgColor: '#FF8748', shapePath: 'M10,15 L50,2 L90,15 L95,50 L90,85 L50,98 L10,85 L5,50 Z' },
  { name: 'Liam Thompson', role: 'Service Manager', image: chefs, bgColor: '#FFC247', shapePath: 'M20,10 L80,10 L90,25 L90,40 L98,50 L90,60 L90,75 L80,90 L20,90 L10,75 L10,60 L2,50 L10,40 L10,25 Z' },
];

const cardVariants = {
  hidden: (i) => (i === 0 ? { opacity: 0, x: -100 } : i === 1 ? { opacity: 0, y: 100 } : { opacity: 0, x: 100 }),
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const TeamCard = ({ name, role, image, bgColor, shapePath, index }) => (
  <motion.div className="bg-[#1C1C1C] rounded-3xl p-6 pt-8 flex flex-col items-center text-center" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={cardVariants}>
    <div className="relative w-full h-72 mb-6">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <path d={shapePath} fill={bgColor} />
      </svg>
      <img src={image} alt={name} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[95%] object-contain object-bottom" draggable={false} loading="lazy" decoding="async" />
    </div>
    <div>
      <p className="text-zinc-400 text-sm">{role}</p>
      <h4 className="text-white text-2xl font-bold mt-1" style={{ fontFamily: 'serif' }}>{name}</h4>
    </div>
  </motion.div>
);

const MeetTheTeam = () => {
  return (
    <section className="relative bg-[#F9F1E7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
          <FiFeather /><h2 className="font-semibold text-sm">Why Desi Vilas</h2><FiFeather />
        </div>
        <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight" style={{ fontFamily: 'serif' }}>Satisfaction Guaranteed</h3>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((m, index) => (
            <TeamCard key={m.name} index={index} {...m} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Buttons
            label="Request a Quote"
            onPrimaryClick={() => console.log('Request a Quote')}
            onArrowClick={() => console.log('Open link')}
          />
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
