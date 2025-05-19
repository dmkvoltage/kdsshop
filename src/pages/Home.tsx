import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import SellerProducts from '../components/SellerProducts';
import CategoriesSection from '../components/CategoriesSection';
import NewsletterSection from '../components/NewsletterSection';
import { sampleProducts } from '../data/sampleProducts';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturedProducts products={sampleProducts} />
      <SellerProducts />
      <CategoriesSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;