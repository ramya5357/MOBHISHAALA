import React from 'react';
import { Link } from '../ui/Link';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  rating: number;
  bestseller?: boolean;
}

const products: Product[] = [
  {
    id: "premium-business-card",
    title: "Premium Business Cards",
    description: "350 GSM, Matte finish, double-sided",
    price: 19.99,
    discountPrice: 14.99,
    image: "https://images.pexels.com/photos/6177554/pexels-photo-6177554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Business Cards",
    rating: 4.9,
    bestseller: true
  },
  {
    id: "tri-fold-brochure",
    title: "Tri-fold Brochure",
    description: "Full color, 100lb gloss paper",
    price: 39.99,
    image: "https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Brochures",
    rating: 4.7
  },
  {
    id: "vinyl-banner",
    title: "Vinyl Banner",
    description: "13oz heavy-duty with metal grommets",
    price: 49.99,
    discountPrice: 39.99,
    image: "https://images.pexels.com/photos/5639165/pexels-photo-5639165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Banners",
    rating: 4.8
  },
  {
    id: "custom-tshirt",
    title: "Custom T-Shirt",
    description: "100% cotton, printed with your design",
    price: 24.99,
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Apparel",
    rating: 4.6,
    bestseller: true
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Best Selling Products</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">
            View All &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                {product.bestseller && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs uppercase tracking-wider py-1 px-2 rounded-sm">
                    Bestseller
                  </span>
                )}
                {product.discountPrice && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase tracking-wider py-1 px-2 rounded-sm">
                    Sale
                  </span>
                )}
                <Link to={`/products/${product.id}`} className="block overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
              
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                </Link>
                <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    {product.discountPrice ? (
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-blue-600">${product.discountPrice}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${product.price}</span>
                      </div>
                    ) : (
                      <span className="text-lg font-semibold text-blue-600">${product.price}</span>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;