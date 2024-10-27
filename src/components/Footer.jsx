import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import React Icons

function Footer() {
  return (
    <footer className="bg-blue-gray-900 text-white h-24 flex items-center justify-between px-8">
      {/* Footer content */}
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold">Research Personal</h4>
        <p className="text-sm">
          Advancing plant research for a sustainable future.
        </p>
      </div>

      {/* Links section */}
      <div className="flex space-x-4">
        <a href="/about" className="text-sm hover:text-blue-300">
          About Us
        </a>
        <a href="/contact" className="text-sm hover:text-blue-300">
          Contact
        </a>
        <a href="/privacy" className="text-sm hover:text-blue-300">
          Privacy Policy
        </a>
      </div>

      {/* Social media icons with React Icons */}
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 hover:text-blue-300" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 hover:text-blue-300" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-300" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
