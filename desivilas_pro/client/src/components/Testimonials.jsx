import React, { useState, useEffect, useRef } from 'react';
import { FiFeather, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Dummy data for 5 testimonials
const testimonials = [
  {
    name: 'Michael Ross',
    role: 'Corporate Manager',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2787&auto=format&fit=crop',
    text: "We catered vegetarian items from Desi Vilas for a religious event. Food was delivered on time and delicious. Our guests were very happy. Most of the items were very closer as if they were made in home. We will be ordering more in the future for sure. Thank you DesiVilas."
  },
  {
    name: 'Jessica Pearson',
    role: 'Event Organizer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    text: "I had a heart felt meal at lunch last week. I got the combo with Coconut Chicken Curry and Baby Corn 65 with Flavored Rice for lunch, both sides are exceptionally good. Subtle and yet vibrant flavors. I think I just found my new go to place for quick lunches.The facility is clean and concise."
  },
  {
    name: 'Harvey Specter',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    text: "Excellent Indian restaurant that offers several options. The lunch special is a pick two with different curries/entrees and comes with rice and a piece of naan. It’s an excellent value for the amount you get and service is always fast. It’s so nice that we have this convenient option now in the area."
  },
  {
    name: 'Donna Paulsen',
    role: 'Office Manager',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2787&auto=format&fit=crop',
    text: "We recently had our event catered, and their exceptional service and delicious food made our party truly special.The recommended menu featured a variety of starters and welcome drinks, all of which were delightful. The presentation was impressive, and each dish was expertly prepared and full of flavor. "
  },
  {
    name: 'Louis Litt',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
    text: "A really nice place to enjoy regional and North Indian cuisines with friends and family. The place is clean and staffs are attentive. Their non-vegetarian selections are delicious and they have provided every dish with a twist of their own. I loved chicken, fish, mutton and sea food starters. One must go here for a unique experience with food."
  },
  {
    name: 'Louis Litt',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
    text: "Chanced upon this place and what a find it was! Spacious, swing seating, welcoming staff. Food was flavourful, service was excellent. The staff is very helpful. The view was great. We had gone for a late lunch so many seats were vacant. It proved to be a relaxed lunch. They have a big screen on which latest chartbusters were playing. We are definitely trying it again."
  },
  {
    name: 'Louis Litt',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
    text: "Really there is so tasty food and there ambience is so good also service person's is very knowledgeable and so friendly"
  },

];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isPaused]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="relative bg-black text-white py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop" alt="Food background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <div className="flex justify-center items-center gap-2 text-orange-500 mb-4">
          <FiFeather />
          <h2 className="font-semibold text-sm">Testimonials</h2>
          <FiFeather />
        </div>
        <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
          Client Stories and Feedback
        </h3>

        {/* --- Main Carousel Container --- */}
        <div 
          className="mt-16 max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* This div is the viewport that clips the sliding content */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="whitespace-nowrap transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="inline-block w-full align-top">
                  <div className="bg-[#1C1C1C] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="flex-shrink-0 w-56 h-72">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="text-left whitespace-normal">
                      <span className="text-green-400 text-7xl leading-none">&#8220;</span>
                      <p className="text-lg text-gray-300 leading-relaxed -mt-4">
                        {testimonial.text}
                      </p>
                      <div className="mt-6">
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-white font-bold text-xl">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Correctly Placed Navigation Buttons --- */}
          <button onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-20">
            <FiChevronLeft size={24} />
          </button>
          <button onClick={() => goToSlide((currentIndex + 1) % testimonials.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-20">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
