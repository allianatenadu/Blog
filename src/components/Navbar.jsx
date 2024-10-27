import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  return (
    <nav className="bg-blue-gray-900 shadow-md fixed w-full top-0 z-10 flex items-center h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-green-800 text-lg font-bold">My Blog</div>

        {/* Links */}
        <div className="flex-grow flex justify-center items-center space-x-4">
          <Link to="/" className="text-green-500 font-bold hover:text-white">
            Home
          </Link>
          <Link to="/person1" className="text-white hover:text-yellow-200">
            Jade
          </Link>
          <Link to="/person2" className="text-white hover:text-yellow-200">
            Clifford
          </Link>
          <Link to="/person3" className="text-white hover:text-yellow-200">
            Candace
          </Link>
          <Link to="/person4" className="text-white hover:text-yellow-200">
            Collins
          </Link>
          <Link to="/person5" className="text-white hover:text-yellow-200">
            Hasana
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://youtube.com"
            className="p-2 bg-green-800 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://twitter.com"
            className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
