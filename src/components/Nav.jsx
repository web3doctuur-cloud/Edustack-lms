import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // 1. Import supabase for logout

const Nav = ({ session }) => { // 2. Receive the session prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. Handle Sign Out function
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirect to home after logging out
  };

  return (
    <>
      <nav className="bg-white shadow-md px-6 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50">
        <div className="container mt-2 py-4 flex justify-between items-center mx-auto">
          {/* Logo Section */}
          <Link to="/" className="text-3xl font-bold flex items-center">
            <span className='text-orange-400 font-serif'>EduStack</span>
            <span className='text-green-900'>Pro</span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 font-semibold items-center">
            <Link to="/" className="hover:text-orange-500 transition-colors duration-300">Home</Link>
            {session && (
              <Link to="/dashboard" className="text-green-700 hover:text-orange-500 transition-colors font-bold">Dashboard</Link>
            )}
            <a href="#service" className="hover:text-orange-500 transition-colors">Service</a>
            <a href="#tutor" className="hover:text-orange-500 transition-colors">Team</a>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {!session ? (
              <>
                <Link to="/register" className="font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-orange-500 transition">
                  Register
                </Link>
                <Link to="/login" className="font-bold text-white px-4 py-2 rounded-lg bg-orange-500 hover:bg-green-700 transition">
                  Sign In
                </Link>
              </>
            ) : (
              <button 
                onClick={handleSignOut}
                className="font-bold text-white px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-900 focus:outline-none">
              {isMenuOpen ? <Icons.X size={30} /> : <Icons.List size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40" onClick={toggleMenu}></div>
            <div className="fixed top-0 right-0 w-3/4 max-w-sm bg-white shadow-lg z-50 h-full p-8 overflow-y-auto">
              <div className="flex flex-col space-y-6 text-left">
                <div className="text-2xl font-bold mb-4">
  <span className='text-orange-400 font-serif'>EduStack</span>
  <span className='text-green-900'>Pro</span>
</div>
                <Link to="/" onClick={toggleMenu} className="block py-2 font-bold hover:text-orange-500">Home</Link>
                
                {session ? (
                  <>
                    <Link to="/dashboard" onClick={toggleMenu} className="block py-2 font-bold text-green-700">My Dashboard</Link>
                    <button 
                      onClick={() => { handleSignOut(); toggleMenu(); }}
                      className="text-center mt-4 font-bold text-white px-4 py-2 bg-red-500 rounded-lg"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/register" onClick={toggleMenu} className="text-center mt-4 font-bold text-white px-4 py-2 bg-green-700 rounded-lg">Register</Link>
                    <Link to="/login" onClick={toggleMenu} className="text-center font-bold text-white px-4 py-2 bg-orange-500 rounded-lg">Sign In</Link>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;