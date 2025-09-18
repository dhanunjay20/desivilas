import React, { useState } from 'react';
import { FiFeather, FiArrowUpRight, FiPlus, FiMinus } from 'react-icons/fi';
import staff from '../assets/staff.jpg';

// Data for the FAQ items
const faqData = [
  {
    question: "What types of events do you cater to?",
    answer: "We cater to a wide range of events, including weddings, corporate gatherings, private parties, birthdays, anniversaries, and other special occasions. Our services are customized to meet your event’s specific needs."
  },
  {
    question: "Can you handle dietary restrictions?",
    answer: "Yes, our culinary team is experienced in handling a variety of dietary needs, including vegetarian, vegan, gluten-free, and common allergies. Please let us know your requirements in advance."
  },
  {
    question: "Do you provide both food and beverage services?",
    answer: "Absolutely. We offer comprehensive catering packages that can include a full range of beverages, from soft drinks to full bar service, tailored to your event."
  },
  {
    question: "Is there a minimum guest count?",
    answer: "We can cater to events of all sizes. While some menu items or packages may have minimums, we are flexible and can work with you to find the perfect solution for your gathering."
  },
  {
    question: "Do you provide event setup and cleanup?",
    answer: "Yes, our standard service includes the complete setup of the food service area and a thorough cleanup afterward, allowing you to enjoy your event without worry."
  },
  {
    question: "Can I customize the menu for my event?",
    answer: "Of course. Customization is our specialty. We will work with you to create a bespoke menu that perfectly fits the theme and taste of your event."
  },
];

// Reusable Accordion Item Component
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm cursor-pointer transition-all duration-300" onClick={onClick}>
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg text-zinc-800 pr-4">{item.question}</h4>
        <button className="flex-shrink-0 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      {/* The answer panel with a smooth transition */}
      <div 
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-zinc-600">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};


const HelpSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  return (
    <section className="bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <h3 className="text-5xl font-bold text-zinc-900 leading-tight" style={{ fontFamily: 'serif' }}>
            Do you need –<br />some help?
          </h3>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={staff}
              alt="Catering service staff"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-zinc-900 text-white p-8 rounded-2xl">
            <p className="text-lg font-semibold leading-relaxed mb-6">
              Need more details? Contact our team for personalized catering assistance.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
                Contact
              </button>
              <button className="bg-orange-500 text-white p-3 rounded-full transition-transform duration-300 transform hover:scale-105">
                <FiArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)} // Click to open, click again to close
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HelpSection;
