// Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-wide">IntentClassiffication</div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-6 font-semibold font-serif text-[20px]">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">DatasetUploadPage</a>
        <a href="#" className="hover:underline">RealTimePrediction</a>
        <a href="#" className="hover:underline">Results</a>
      </div>

      {/* Auth Links */}
      <div className="hidden md:flex space-x-4 cursor-pointer">
        <p><span className="hover:underline" >Sign In</span> / <span className="hover:underline">Sign Up</span></p>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          id="menu-btn"
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:hidden flex-col items-center space-y-4 mt-4 bg-blue-700 rounded-lg w-11/12 max-w-sm mx-auto py-6`}
      >
        <a href="#" className="hover:underline text-lg">Home</a>
        <a href="#" className="hover:underline text-lg">DatasetUploadPage</a>
        <a href="#" className="hover:underline text-lg">RealTimePrediction</a>
        <a href="#" className="hover:underline text-lg">Results</a>
        <a href="#" className="hover:underline text-lg">Sign In</a>
        <a href="#" className="hover:underline text-lg">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
