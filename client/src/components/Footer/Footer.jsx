import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            Zoommart is your one-stop shop for everything you need. From electronics to fashion, we ensure high-quality products and seamless customer service.
          </p>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
          <ul>
            <li className="mb-2"><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
            <li className="mb-2"><Link to="/faq" className="hover:text-blue-500">FAQs</Link></li>
            <li className="mb-2"><Link to="/shipping" className="hover:text-blue-500">Shipping & Returns</Link></li>
            <li className="mb-2"><Link to="/terms" className="hover:text-blue-500">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe to our newsletter to receive exclusive offers and updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-full border-0 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Zoommart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
