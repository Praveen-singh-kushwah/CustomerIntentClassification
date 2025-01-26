import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { GoogleLogin } from '@react-oauth/google';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Check if the user is authenticated when the component loads
    const authState = localStorage.getItem('isAuthenticated');
    if (authState) {
      setIsAuthenticated(JSON.parse(authState));
    }
  }, [setIsAuthenticated]);

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true); // Persist the state
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear the state
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      <div className="text-3xl font-bold tracking-wide">IntentClassification</div>
      <div className="hidden md:flex space-x-6 font-semibold font-serif text-[20px]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/DatasetUpload" className="hover:underline">
          DatasetUploadPage
        </Link>
        <Link to="/ModelTraining" className="hover:underline">
          ModelTraining
        </Link>
        <Link to="/Results" className="hover:underline">
          Results
        </Link>
      </div>
      {!isAuthenticated ? (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log('Login Failed')}
        />
      ) : (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-md text-white font-bold"
        >
          Logout
        </button>
      )}

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
        className={`${isMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col items-center space-y-4 mt-4 bg-blue-700 rounded-lg w-11/12 max-w-sm mx-auto py-6`}
      >
        <Link to="/" className="hover:underline text-lg" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/DatasetUpload" className="hover:underline text-lg" onClick={toggleMenu}>
          DatasetUploadPage
        </Link>
        <Link to="/ModelTraining" className="hover:underline text-lg" onClick={toggleMenu}>
          ModelTraining
        </Link>
        <Link to="/Results" className="hover:underline text-lg" onClick={toggleMenu}>
          Results
        </Link>
        {!isAuthenticated ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log('Login Failed')}
          />
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-md text-white font-bold"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
