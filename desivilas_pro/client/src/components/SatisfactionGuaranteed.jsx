import React from 'react';
import { FiFeather } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Icon imports
import { GiCook, GiFruitBowl, GiTakeMyMoney } from "react-icons/gi"; 
import { MdOutlineFoodBank, MdOutlineVerified } from "react-icons/md"; 
import { IoRestaurantOutline } from "react-icons/io5"; 

// Import your reusable Buttons component
import Buttons from '../components/Buttons'; 

const SatisfactionGuaranteed = () => {
  // Data for the six guarantee cards
  const guarantees = [
    {
      Icon: GiCook,
      title: 'Best Chef Cook',
      description: 'Discover the Art of Culinary Excellence with the Best Chef Cook for Every Gourmet Occasion!',
    },
    {
      Icon: MdOutlineFoodBank,
      title: 'Delicious Food',
      description: 'Experience the Joy of Flavorful Meals That Delight Your Taste Buds and Satisfy Every Craving!',
    },
    {
      Icon: MdOutlineVerified,
      title: 'High Quality Service',
      description: 'Delivering exceptional, high-quality service to meet your needs with precision and care every time.',
    },
    {
      Icon: IoRestaurantOutline,
      title: 'Seasonal Menus',
      description: 'Explore our seasonal menus, featuring fresh ingredients and unique flavors for every occasion.',
    },
    {
      Icon: GiFruitBowl,
      title: 'Sourced Ingredients',
      description: 'Premium, locally sourced ingredients for fresh, flavorful meals that nourish and delight every bite.',
    },
    {
      Icon: GiTakeMyMoney,
      title: 'Fits Your Budget',
      description: 'Affordable solutions that perfectly align with your budget, providing value without compromising on quality.',
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerGrid = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
            <FiFeather />
            <h2 className="font-semibold text-sm">Why Desivilas</h2>
            <FiFeather />
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
            Satisfaction Guaranteed
          </h3>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {guarantees.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardIn}
              className="relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#F9F1E7] transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <div className="relative">
                <Icon size={56} className="mx-auto mb-6 text-orange-500" />
                <h4 className="text-2xl font-bold text-zinc-900 mb-3">
                  {title}
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reusable CTA Button Component */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Buttons
            label="Request a Quote"
            onPrimaryClick={() => console.log('Quote Clicked')}
            onArrowClick={() => console.log('Arrow Clicked')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SatisfactionGuaranteed;
