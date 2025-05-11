import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { Button } from '../ui/Button';

export const FeaturedProducts: React.FC = () => {
  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Handpicked premium digital products for you</p>
          </div>
          
          <Link to="/products" className="mt-4 md:mt-0">
            <Button 
              variant="outline" 
              rightIcon={<ArrowRight size={16} />}
            >
              View All Products
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};