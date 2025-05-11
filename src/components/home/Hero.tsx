import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-primary-900 text-white pt-28 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-400 rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400 rounded-full filter blur-[100px] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Premium Digital Products for Modern Creators
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover high-quality digital assets, tools, and courses to elevate your projects and accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link to="/products">
              <Button 
                size="lg" 
                rightIcon={<ArrowRight size={16} />}
                className="w-full sm:w-auto"
              >
                Browse Products
              </Button>
            </Link>
            
            <Link to="/categories">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Explore Categories
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 pt-10 border-t border-gray-700 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-accent-400 mb-1">300+</div>
              <div className="text-sm text-gray-300">Digital Products</div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-accent-400 mb-1">10k+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-accent-400 mb-1">95%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-accent-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};