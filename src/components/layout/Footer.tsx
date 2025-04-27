import React from 'react';
import { Link } from '../ui/Link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">PrintMine</h3>
            <p className="text-gray-400 mb-6">
              Your one-stop shop for all printing needs. Quality products, fast delivery, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="https://facebook.com" 
                external 
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link 
                to="https://instagram.com" 
                external 
                className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link 
                to="https://twitter.com" 
                external 
                className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link 
                to="https://linkedin.com" 
                external 
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/custom-printing" className="text-gray-400 hover:text-white transition-colors">Custom Printing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/business-cards" className="text-gray-400 hover:text-white transition-colors">Business Cards</Link>
              </li>
              <li>
                <Link to="/products/brochures" className="text-gray-400 hover:text-white transition-colors">Brochures & Flyers</Link>
              </li>
              <li>
                <Link to="/products/banners" className="text-gray-400 hover:text-white transition-colors">Banners & Signs</Link>
              </li>
              <li>
                <Link to="/products/promotional" className="text-gray-400 hover:text-white transition-colors">Promotional Items</Link>
              </li>
              <li>
                <Link to="/products/packaging" className="text-gray-400 hover:text-white transition-colors">Packaging</Link>
              </li>
              <li>
                <Link to="/products/apparel" className="text-gray-400 hover:text-white transition-colors">Custom Apparel</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Print Avenue, Designville<br />
                  CA 90210, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <Link to="tel:+18001234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (800) 123-4567
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <Link to="mailto:info@printmine.com" className="text-gray-400 hover:text-white transition-colors">
                  info@printmine.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest products, special offers, and printing tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PrintMine. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;