import React from 'react';
import { Link } from '../ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6177685/pexels-photo-6177685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 z-10"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Custom Printing <br />
            <span className="text-blue-400">For Your Business</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            High-quality custom printing solutions for all your needs. 
            From business cards to banners, we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Shop Now
            </Link>
            <Link 
              to="/custom-quote" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;