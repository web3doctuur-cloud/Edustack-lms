import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  LayoutDashboard, 
  BookHalf, 
  Pen, 
  Tv, 
  Settings 
} from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const location = useLocation();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-full w-full bg-white flex flex-col py-6 px-4">
      {/* Sidebar Header - Hidden on mobile if necessary */}
      <div className="mb-10 px-4">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest">
          Student Menu
        </h2>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-2">
        
        {/* Dashboard Link */}
        <Link 
          to="/dashboard" 
          className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
            isActive('/dashboard') 
            ? 'bg-green-50 text-green-700 shadow-sm' 
            : 'text-gray-500 hover:bg-gray-50 hover:text-green-600'
          }`}
        >
          <LayoutDashboard size={20} />
          <span className="font-bold">Dashboard</span>
        </Link>

        {/* Courses Dropdown */}
        <div className="flex flex-col">
          <button 
            onClick={toggleDropdown}
            className="flex justify-between items-center p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-all"
          >
            <div className="flex items-center space-x-3">
              <BookHalf size={20} />
              <span className="font-bold">My Courses</span>
            </div>
            {isDropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {isDropdownOpen && (
            <div className="flex flex-col ml-9 mt-1 space-y-1 border-l-2 border-gray-100">
              <Link to="/class" className="p-2 text-sm text-gray-500 hover:text-green-600 hover:pl-4 transition-all">Frontend Web3</Link>
              <Link to="#" className="p-2 text-sm text-gray-500 hover:text-green-600 hover:pl-4 transition-all">Solidity Basics</Link>
              <Link to="#" className="p-2 text-sm text-gray-500 hover:text-green-600 hover:pl-4 transition-all">UI/UX Design</Link>
            </div>
          )}
        </div>

        <Link 
          to="#" 
          className="flex items-center space-x-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-all"
        >
          <Pen size={20} />
          <span className="font-bold">Assessments</span>
        </Link>

        <Link 
          to="/class" 
          className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
            isActive('/class') 
            ? 'bg-green-50 text-green-700 shadow-sm' 
            : 'text-gray-500 hover:bg-gray-50 hover:text-green-600'
          }`}
        >
          <Tv size={20} />
          <span className="font-bold">Classroom</span>
        </Link>

      </nav>

      {/* Bottom Section: Settings/Profile */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        <Link to="#" className="flex items-center space-x-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-all">
          <Settings size={20} />
          <span className="font-bold">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;