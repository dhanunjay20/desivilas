import React from 'react';
import { FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { GiCook, GiFruitBowl, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineVerified } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import Buttons from '../components/Buttons';

const SatisfactionGuaranteed = () => {
  const guarantees = [
    { Icon: GiCook, title: 'Master Chefs at Work', description: 'Experience Culinary Mastery with Expert Chefs Crafting Perfect Dishes for Every Occasion' },
    { Icon: MdOutlineFoodBank, title: 'Delicious Food', description: 'Food connects us all—each bite brings joy, passion, and love, turning every new flavor into a priceless, soulful experience.!' },
    { Icon: MdOutlineVerified, title: 'High Quality Service', description: 'We anticipate your needs and deliver flawless execution with meticulous attention to detail, every single time.' },
    { Icon: IoRestaurantOutline, title: 'Flavors of the Day', description: 'A new flavor adventure awaits every day. Small batch, big taste, made just for today. Each creation is crafted with care, inspired by fresh ideas and bold ingredients. No repeats, no compromises — just a daily surprise worth savoring.' },
    { Icon: GiFruitBowl, title: 'Sourced Ingredients', description: 'Premium, locally sourced ingredients for fresh, flavorful meals that nourish and delight every bite.' },
    { Icon: GiTakeMyMoney, title: 'Fits Your Budget', description: 'Affordable solutions that perfectly align with your budget, providing value without compromising on quality.' },
  ];

  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const staggerGrid = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const cardIn = { hidden: { opacity: 0, y: 20, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-clip bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
            <FiFeather /><h2 className="font-semibold text-sm">Why Desivilas</h2><FiFeather />
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">Satisfaction Guaranteed</h3>
        </motion.div>

        <motion.div variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map(({ Icon, title, description }) => (
            <motion.div key={title} variants={cardIn} className="relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#F9F1E7] transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <div className="relative">
                <Icon size={56} className="mx-auto mb-6 text-orange-500" />
                <h4 className="text-2xl font-bold text-zinc-900 mb-3">{title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="mt-20 flex justify-center">
          <Buttons label="Request a Quote" onPrimaryClick={() => {}} onArrowClick={() => {}} />
        </motion.div>
      </div>
    </section>
  );
};

export default SatisfactionGuaranteed;
