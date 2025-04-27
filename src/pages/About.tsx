import React from 'react';
import { Award, Users, Printer, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About PrintMine</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about delivering exceptional printing solutions that help businesses 
          and individuals bring their ideas to life.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {[
          { number: "10+", label: "Years Experience" },
          { number: "50K+", label: "Projects Completed" },
          { number: "1000+", label: "Happy Clients" },
          { number: "99%", label: "Satisfaction Rate" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Founded in 2014, PrintMine began with a simple mission: to make professional 
              printing services accessible to everyone. What started as a small local print 
              shop has grown into a nationwide printing solution provider.
            </p>
            <p className="text-gray-600">
              Today, we combine cutting-edge technology with traditional craftsmanship to 
              deliver exceptional print products. Our team of experts works tirelessly to 
              ensure every project meets our high standards of quality.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/6177685/pexels-photo-6177685.jpeg" 
              alt="PrintMine facility" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="w-12 h-12 text-blue-600" />,
              title: "Quality First",
              description: "We never compromise on quality, using the best materials and processes"
            },
            {
              icon: <Users className="w-12 h-12 text-blue-600" />,
              title: "Customer Focus",
              description: "Your satisfaction is our top priority, every step of the way"
            },
            {
              icon: <Printer className="w-12 h-12 text-blue-600" />,
              title: "Innovation",
              description: "We continuously invest in the latest printing technology"
            },
            {
              icon: <Globe className="w-12 h-12 text-blue-600" />,
              title: "Sustainability",
              description: "Committed to environmentally responsible printing practices"
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              role: "CEO & Founder",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            },
            {
              name: "Sarah Johnson",
              role: "Head of Operations",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            },
            {
              name: "Michael Chen",
              role: "Technical Director",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust PrintMine for their printing needs.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;