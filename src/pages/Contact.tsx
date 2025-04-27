import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about our printing services? We're here to help. 
          Reach out to us through any of the channels below.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            info: "+1 (800) 123-4567",
            link: "tel:+18001234567"
          },
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            info: "info@printmine.com",
            link: "mailto:info@printmine.com"
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Address",
            info: "123 Print Avenue, CA 90210",
            link: "https://maps.google.com"
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Hours",
            info: "Mon-Fri: 9AM - 6PM",
            link: null
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4 text-blue-600">{item.icon}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            {item.link ? (
              <a href={item.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item.info}
              </a>
            ) : (
              <p className="text-gray-600">{item.info}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a subject</option>
                <option value="quote">Get a Quote</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full bg-cover bg-center" style={{
              backgroundImage: "url('https://images.pexels.com/photos/6177819/pexels-photo-6177819.jpeg')"
            }}></div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">PrintMine Headquarters</h3>
            <p className="text-gray-600">
              123 Print Avenue<br />
              Los Angeles, CA 90210<br />
              United States
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "What are your standard turnaround times?",
              answer: "Our standard turnaround time is 3-5 business days. Rush orders may be available for an additional fee."
            },
            {
              question: "Do you offer design services?",
              answer: "Yes, we have an in-house design team that can help create or modify your designs."
            },
            {
              question: "What file formats do you accept?",
              answer: "We accept PDF, AI, PSD, and other common file formats. Files should be in CMYK color mode."
            },
            {
              question: "Do you offer shipping?",
              answer: "Yes, we offer worldwide shipping. Free shipping is available for orders over $100 within the US."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;