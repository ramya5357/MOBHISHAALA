import React, { useState } from 'react';
import { Printer, Filter, ChevronDown } from 'lucide-react';

interface ProductFilters {
  category: string;
  priceRange: string;
  sortBy: string;
}

const Products: React.FC = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'all',
    priceRange: 'all',
    sortBy: 'featured'
  });

  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Business Cards",
      category: "Business Cards",
      price: 19.99,
      image: "https://images.pexels.com/photos/6177554/pexels-photo-6177554.jpeg"
    },
    {
      id: 2,
      name: "Tri-fold Brochure",
      category: "Brochures",
      price: 39.99,
      image: "https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg"
    },
    // Add more products...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Print Products</h1>
          <p className="text-gray-600">Browse our collection of high-quality print products</p>
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden bg-gray-100 p-2 rounded-lg"
        >
          <Filter size={24} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`w-full md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <select 
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Categories</option>
                <option value="business-cards">Business Cards</option>
                <option value="brochures">Brochures</option>
                <option value="banners">Banners</option>
                <option value="flyers">Flyers</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Prices</option>
                <option value="0-25">$0 - $25</option>
                <option value="25-50">$25 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="font-medium mb-2">Sort By</h3>
              <select 
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                className="w-full p-2 border rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">${product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;