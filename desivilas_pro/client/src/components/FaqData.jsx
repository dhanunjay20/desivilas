import React, { useState } from 'react';
import Buttons from '../components/Buttons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import staff from '../assets/staff.jpg';

const faqData = [
  { question: 'What Types of Events Do We Cater To?', answer: 'We transform your vision into an unforgettable reality. Whether crafting an intimate celebration or executing a large-scale corporate event, we master the details to deliver a perfectly personalized experience.' },
  { question: 'Do you provide both food and beverage services?', answer: 'We expertly plan and execute a diverse array of events. Our comprehensive services are fully customizable to perfectly align with your specific goals and requirements.' },
  { question: 'Do you have a minimum guest count?', answer: 'We are happy to cater events of any size; no minimum number is required.' },
  { question: 'Do you provide event setup?', answer: 'We do. Our comprehensive event setup service is designed to bring your vision to life for a wide range of occasions, including weddings, corporate gatherings, private parties, and birthdays. We handle the details so you can focus on enjoying your event.' },
  { question: 'Do you offer customize menu options?', answer: 'Yes, we specialize in fully customized menus. Whether you are planning a private party or a large corporate gathering, we work with you to create a culinary experience that perfectly matches your vision and delights your guests.' },
];

const AccordionItem = ({ id, item, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300">
      <button
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <h4 className="font-bold text-lg text-zinc-800 pr-4">{item.question}</h4>
        <span className="flex-shrink-0 bg-orange-500 text-white w-8 h-8 rounded-full grid place-items-center">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`btn-${id}`}
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-zinc-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqData = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F9F1E7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        <div className="flex flex-col gap-8">
          <h3 className="text-5xl font-bold text-zinc-900 leading-tight">
            Do you need –<br />some help?
          </h3>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={staff}
              alt="Catering service staff"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="bg-zinc-900 text-white p-8 rounded-2xl">
            <p className="text-lg font-semibold leading-relaxed mb-6">
              Need more details? Contact our team 
            </p>
            <Buttons
              label="Contact"
              onPrimaryClick={() => console.log('Contact clicked')}
              onArrowClick={() => console.log('Arrow clicked')}
              gap="gap-4"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              id={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqData;
