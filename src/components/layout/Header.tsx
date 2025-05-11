import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, User, LogOut, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-400">Digital<span className="text-accent-400">Market</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary-400 ${pathname === '/' ? 'text-primary-400' : 'text-gray-700'}`}>
              Home
            </Link>
            <Link to="/products" className={`text-sm font-medium transition-colors hover:text-primary-400 ${pathname.includes('/products') ? 'text-primary-400' : 'text-gray-700'}`}>
              Products
            </Link>
            <Link to="/categories" className={`text-sm font-medium transition-colors hover:text-primary-400 ${pathname.includes('/categories') ? 'text-primary-400' : 'text-gray-700'}`}>
              Categories
            </Link>
            <Link to="/about" className={`text-sm font-medium transition-colors hover:text-primary-400 ${pathname === '/about' ? 'text-primary-400' : 'text-gray-700'}`}>
              About
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input 
                placeholder="Search products..." 
                className="w-48 lg:w-64"
                leftIcon={<Search size={16} />}
              />
            </div>
            
            <Link to="/wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart size={20} />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center space-x-2"
                >
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <User size={20} />
                  )}
                  <span className="text-sm">{user?.name}</span>
                </Button>
                
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button size="sm">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-2 animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Input 
                placeholder="Search products..." 
                leftIcon={<Search size={16} />}
              />
              
              <nav className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className={`p-2 text-sm font-medium rounded-md ${
                    pathname === '/' ? 'bg-primary-50 text-primary-400' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className={`p-2 text-sm font-medium rounded-md ${
                    pathname.includes('/products') ? 'bg-primary-50 text-primary-400' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Products
                </Link>
                <Link 
                  to="/categories" 
                  className={`p-2 text-sm font-medium rounded-md ${
                    pathname.includes('/categories') ? 'bg-primary-50 text-primary-400' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Categories
                </Link>
                <Link 
                  to="/about" 
                  className={`p-2 text-sm font-medium rounded-md ${
                    pathname === '/about' ? 'bg-primary-50 text-primary-400' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/wishlist" 
                  className={`p-2 text-sm font-medium rounded-md flex items-center ${
                    pathname === '/wishlist' ? 'bg-primary-50 text-primary-400' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Heart size={16} className="mr-2" />
                  Wishlist
                </Link>
              </nav>
              
              {isAuthenticated ? (
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3 mb-4">
                    {user?.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <User size={24} />
                    )}
                    <div>
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Link 
                      to="/account" 
                      className="p-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                    >
                      My Account
                    </Link>
                    <Link 
                      to="/orders" 
                      className="p-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <button 
                      onClick={logout}
                      className="p-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Link to="/login" className="flex-1">
                    <Button fullWidth>Login</Button>
                  </Link>
                  <Link to="/signup" className="flex-1">
                    <Button variant="outline" fullWidth>Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};