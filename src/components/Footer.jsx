import React from 'react';
import * as Icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-green-800 to-green-600 text-white py-12 px-8 md:px-20 lg:px-32 w-full' id='footer'>
      <div className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 max-w-7xl mx-auto">

        {/* Logo and Site Info */}
        <div className="flex flex-col items-start space-y-4 max-w-xs">
          <div className="text-3xl font-bold flex items-center">
            <span className='text-orange-400 text-4xl font-serif'>Edu</span>
            <span className='text-white text-3xl font-bold'>StackPro</span>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            Empowering the next generation of developers through expert mentorship and industry-standard training. Your journey into Web2 and Web3 starts here.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold border-b border-orange-400 pb-1 inline-block">Quick Links</h2>
          <ul className="space-y-3">
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.House width={18} height={18} className='mr-3 text-orange-400' />
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.Book width={18} height={18} className='mr-3 text-orange-400' />
              <a href='#courses' className='hover:underline'>Courses</a>
            </li>
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.People width={18} height={18} className='mr-3 text-orange-400' />
              <a href='#tutor' className='hover:underline'>Our Team</a>
            </li>
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.Tools width={18} height={18} className='mr-3 text-orange-400' />
              <a href='#service' className='hover:underline'>Services</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold border-b border-orange-400 pb-1 inline-block">Contact Us</h2>
          <ul className="space-y-3">
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.Envelope width={18} height={18} className='mr-3 text-orange-400' />
              <a href='mailto:edustackpro@gmail.com' className='hover:underline'>edustackpro@gmail.com</a>
            </li>
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.Phone width={18} height={18} className='mr-3 text-orange-400' />
              <a href='tel:+2349155140115' className='hover:underline'>+234 915 551 40115</a>
            </li>
            <li className='flex items-center hover:text-orange-400 transition-all'>
              <Icons.Whatsapp width={18} height={18} className='mr-3 text-orange-400' />
              <a href='https://wa.me/2349155140115' target="_blank" rel="noreferrer" className='hover:underline'>WhatsApp Chat</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-start space-x-6 mt-10 max-w-7xl mx-auto">
        <a href="https://facebook.com" className="hover:text-orange-400 transition duration-300">
          <Icons.Facebook size={22} />
        </a>
        <a href="https://twitter.com" className="hover:text-orange-400 transition duration-300">
          <Icons.TwitterX size={22} />
        </a>
        <a href="https://instagram.com" className="hover:text-orange-400 transition duration-300">
          <Icons.Instagram size={22} />
        </a>
        <a href="https://linkedin.com" className="hover:text-orange-400 transition duration-300">
          <Icons.Linkedin size={22} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-green-400/30 pt-6 text-center md:text-left text-xs opacity-70 max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} EduStackPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;