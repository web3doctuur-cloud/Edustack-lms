import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup overflow on unmount
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md px-6 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50">
        <div className="container mt-2 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-3xl font-bold flex items-center">
            <span className='text-orange-400 font-serif'>ALmas</span>
            <span className='text-green-900'>chemy</span>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#home" className="hover:text-orange-500 transition-colors duration-300">Home</a>
            <a href="#service" className="hover:text-orange-500 transition-colors duration-300">Service</a>
            <a href="#tutor" className="hover:text-orange-500 transition-colors duration-300">Team</a>
            <a href="#Faq" className="hover:text-orange-500 transition-colors duration-300">FAQ</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors duration-300">Reviews</a>
            <a href="#footer" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
          </div>

          {/* Action Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-orange-500 transition duration-300"
            >
              Register
            </a>
            <a
              href="#footer"
              className="font-bold text-white px-4 py-2 rounded-lg bg-orange-500 hover:bg-green-700 transition duration-300"
            >
              Sign In
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle Navigation" className="text-slate-900 focus:outline-none">
              {isMenuOpen ? <Icons.X size={30} /> : <Icons.List size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            ></div>

            {/* Mobile Menu Content */}
            <div className="fixed top-0 right-0 w-3/4 max-w-sm bg-white shadow-lg z-50 h-full p-8 overflow-y-auto">
              <div className="flex flex-col space-y-6 text-left">
                <div className="text-2xl font-bold flex items-center">
                  <span className='text-orange-400 font-serif'>ALmas</span>
                  <span className='text-green-900'>chemy</span>
                </div>
                <a href="#home" className="block py-2 font-bold hover:text-orange-500">Home</a>
                <a href="#service" className="block py-2 font-bold hover:text-orange-500">Service</a>
                <a href="#tutor" className="block py-2 font-bold hover:text-orange-500">Team</a>
                <a href="#Faq" className="block py-2 font-bold hover:text-orange-500">FAQ</a>
                <a href="#reviews" className="block py-2 font-bold hover:text-orange-500">Reviews</a>
                <a href="#footer" className="block py-2 font-bold hover:text-orange-500">Contact</a>
                <a
                  href="#home"
                  className=" text-center mt-4 font-bold text-white px-4 py-2 w-60 bg-green-700 hover:bg-orange-500 transition duration-300 rounded-lg"
                >
                  Register
                </a>
                <a
                  href="#home"
                  className="mt-4 text-center font-bold text-white px-4 py-2 w-60 bg-orange-500 hover:bg-green-700 transition duration-300 rounded-lg"
                >
                  Sign In
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
