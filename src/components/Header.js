import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            The Picture Store
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;