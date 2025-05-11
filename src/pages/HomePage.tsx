import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Categories } from '../components/home/Categories';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;