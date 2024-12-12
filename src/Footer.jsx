import React from 'react';
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-green-700 to-green-500 text-white py-12 px-8 md:px-20 lg:px-32 w-full' id='footer'>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">

        {/* Logo and Site Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="text-3xl font-bold flex items-center">
            <span className='text-orange-400 text-4xl font-serif'>ALmas</span>
            <span className='text-black text-2xl font-bold'>chemy</span>
          </div>
          <p className="text-sm">Your gateway to a brighter future. Enhancing education, one step at a time.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 md:space-y-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-3">
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.House width={20} height={20} className='mr-3' />
              <a href='#home' className='hover:underline'>Home</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.Book width={20} height={20} className='mr-3' />
              <a href='#class' className='hover:underline'>Courses</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.People width={20} height={20} className='mr-3' />
              <a href='#tutor' className='hover:underline'>Our Team</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.Tools width={20} height={20} className='mr-3' />
              <a href='#about' className='hover:underline'>Service</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.ChatLeftDots width={20} height={20} className='mr-3' />
              <a href='#reviews' className='hover:underline'>Review</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <ul className="space-y-3">
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.Envelope width={20} height={20} className='mr-3' />
              <a href='mailto:hadizahrodiah@gmail.com' className='hover:underline'>Almaschemy@gmail.com</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.Phone width={20} height={20} className='mr-3' />
              <a href='tel:+2349155140115' className='hover:underline'>+234 915 551 40115</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.Whatsapp width={20} height={20} className='mr-3' />
              <a href='https://wa.me/+2349155140115' className='hover:underline'>WhatsApp</a>
            </li>
            <li className='flex items-center hover:text-orange-500 transition-all'>
              <Icons.Linkedin width={20} height={20} className='mr-3' />
              <a href='https://bit.ly/4dbrkDV' className='hover:underline'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} AlmasChemy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;