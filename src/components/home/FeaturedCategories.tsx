import React from 'react';
import { Link } from '../ui/Link';

interface CategoryCard {
  id: string;
  title: string;
  image: string;
  link: string;
}

const categories: CategoryCard[] = [
  {
    id: "business-cards",
    title: "Business Cards",
    image: "https://images.pexels.com/photos/6177642/pexels-photo-6177642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    link: "/products/business-cards"
  },
  {
    id: "brochures",
    title: "Brochures",
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    link: "/products/brochures"
  },
  {
    id: "banners",
    title: "Banners",
    image: "https://images.pexels.com/photos/6177678/pexels-photo-6177678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    link: "/products/banners"
  },
  {
    id: "promotional",
    title: "Promotional Items",
    image: "https://images.pexels.com/photos/6207819/pexels-photo-6207819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    link: "/products/promotional"
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality printing solutions for your business and personal needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <Link 
                    to={category.link}
                    className="inline-block text-blue-300 hover:text-blue-100 transition-colors"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;