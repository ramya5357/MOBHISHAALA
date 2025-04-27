import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ShoppingCart, User, Search, X, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">PrintMine</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Home</Link>
            <Link to="/products" className={`font-medium transition-colors ${location.pathname === '/products' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Products</Link>
            <Link to="/custom-printing" className={`font-medium transition-colors ${location.pathname === '/custom-printing' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Custom Printing</Link>
            <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'}`}>About</Link>
            <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Contact</Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={toggleProfileMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <User size={20} />
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium">{user?.email}</p>
                    </div>
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
            
            <button onClick={toggleMobileMenu} className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fadeDown">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full p-2 pl-10 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <button 
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fadeDown">
          <nav className="flex flex-col">
            <Link to="/" className="p-4 border-b hover:bg-gray-50">Home</Link>
            <Link to="/products" className="p-4 border-b hover:bg-gray-50">Products</Link>
            <Link to="/custom-printing" className="p-4 border-b hover:bg-gray-50">Custom Printing</Link>
            <Link to="/about" className="p-4 border-b hover:bg-gray-50">About</Link>
            <Link to="/contact" className="p-4 border-b hover:bg-gray-50">Contact</Link>
            {!isAuthenticated && (
              <>
                <Link to="/signin" className="p-4 border-b hover:bg-gray-50 text-blue-600">Sign In</Link>
                <Link to="/signup" className="p-4 hover:bg-gray-50 text-blue-600">Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;