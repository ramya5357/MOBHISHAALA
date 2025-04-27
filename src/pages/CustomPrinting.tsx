import React from 'react';
import { Upload, FileCheck, Printer, Truck } from 'lucide-react';

const CustomPrinting: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white p-8 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Custom Printing Solutions</h1>
          <p className="text-xl mb-6">
            Turn your vision into reality with our professional custom printing services. 
            Perfect for businesses, events, and personal projects.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Process Steps */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Upload className="w-12 h-12 text-blue-600" />,
              title: "Upload Design",
              description: "Upload your artwork or use our online design tool"
            },
            {
              icon: <FileCheck className="w-12 h-12 text-blue-600" />,
              title: "Review & Approve",
              description: "Check the digital proof and approve your design"
            },
            {
              icon: <Printer className="w-12 h-12 text-blue-600" />,
              title: "Production",
              description: "Your project goes into production with quality checks"
            },
            {
              icon: <Truck className="w-12 h-12 text-blue-600" />,
              title: "Delivery",
              description: "Receive your prints at your doorstep"
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Custom Printing Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Business Materials",
              description: "Business cards, letterheads, envelopes, and more",
              image: "https://images.pexels.com/photos/6177642/pexels-photo-6177642.jpeg"
            },
            {
              title: "Marketing Materials",
              description: "Brochures, flyers, posters, and banners",
              image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
            },
            {
              title: "Large Format",
              description: "Banners, signs, and exhibition displays",
              image: "https://images.pexels.com/photos/5639165/pexels-photo-5639165.jpeg"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help with Your Project?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our printing experts are here to help you choose the right options for your project.
          Get in touch for a custom quote or technical advice.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Custom Quote
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPrinting;