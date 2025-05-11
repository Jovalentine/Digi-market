import { Facebook, Github, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Digital<span className="text-accent-400">Market</span></h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for premium digital products, courses, and tools to help you succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/design" className="text-gray-400 hover:text-white transition-colors">Design</Link>
              </li>
              <li>
                <Link to="/categories/development" className="text-gray-400 hover:text-white transition-colors">Development</Link>
              </li>
              <li>
                <Link to="/categories/marketing" className="text-gray-400 hover:text-white transition-colors">Marketing</Link>
              </li>
              <li>
                <Link to="/categories/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/categories/business" className="text-gray-400 hover:text-white transition-colors">Business</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">support@digitalmarket.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">+91 9500251447</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-400 flex-1"
                />
                <button className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} DigitalMarket. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};