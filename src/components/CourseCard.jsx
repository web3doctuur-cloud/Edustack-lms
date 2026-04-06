import React from 'react';

// We pass "props" into the component to make it dynamic
const CourseCard = ({ title, price, instructor, image, category }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      {/* Course Image */}
      <div className="relative h-48 w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {category}
        </span>
      </div>

      {/* Course Details */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">Instructor: <span className="font-semibold text-orange-500">{instructor}</span></p>
        
        <div className="mt-auto flex items-center justify-between border-t pt-4">
          <span className="text-2xl font-bold text-green-700">${price}</span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;