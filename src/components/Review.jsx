import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Student",
    review: "The transition from Web2 to Web3 felt seamless thanks to the mentorship here. The React projects are top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Blockchain Developer",
    review: "I finally understood Solidity! The tutors don't just teach code; they teach the 'why' behind the logic.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "UI/UX Student",
    review: "EduStackPro changed my career trajectory. Within 3 months, I built a portfolio that landed me an internship.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Smith",
    role: "Fullstack Graduate",
    review: "Highly professional environment. The community support is the best I've seen in the Nigerian tech space.",
    rating: 5,
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-24 px-6" id="reviews">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mt-3">
            What Our <span className="text-orange-500">Students</span> Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 p-8 md:p-16 rounded-[3rem] shadow-sm relative overflow-hidden group">
            {/* Quote Icon Background */}
            <Icons.Quote className="absolute -top-4 -left-4 text-green-700/5 w-40 h-40 transform -rotate-12" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icons.StarFill 
                    key={i} 
                    className={i < reviews[currentIndex].rating ? "text-orange-400" : "text-gray-300"} 
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-10 font-medium">
                "{reviews[currentIndex].review}"
              </p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <Icons.PersonFill size={30} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{reviews[currentIndex].name}</h4>
                <p className="text-green-600 font-bold text-sm uppercase tracking-wider">{reviews[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-10 bg-green-700' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;