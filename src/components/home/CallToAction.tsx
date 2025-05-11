import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Workflow?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover the perfect digital products to enhance your projects and boost your productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Create Account
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-white/70">
            No credit card required. Start browsing our collection today.
          </p>
        </div>
      </div>
    </section>
  );
};