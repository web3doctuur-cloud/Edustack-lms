import React from 'react';
import Sidebar from './Sidebar.jsx';
import Accord from './Accord.jsx';

const Class = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 pt-20" id="class">
      {/* SIDEBAR: 
        Hidden on mobile by default, fixed width on desktop. 
        Using a subtle border-r instead of a heavy shadow.
      */}
      <aside className="hidden lg:block w-80 bg-white border-r border-gray-100 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto">
        <Sidebar />
      </aside>

      {/* MAIN CONTENT:
        Responsive padding and max-width to keep text readable.
      */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Course Progress Header */}
          <div className="mb-10">
            <div className="flex items-center space-x-2 text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">
              <span>Course Content</span>
              <span className="h-px w-8 bg-orange-500"></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Mastering Frontend Web3
            </h1>
            <p className="text-gray-500 font-medium">
              Complete all modules below to earn your certification.
            </p>
          </div>

          {/* The Accordion (Modules) */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <Accord />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Class;