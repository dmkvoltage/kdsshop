import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ui/ProductCard';
import SectionHeading from './ui/SectionHeading';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SellerProducts: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <SectionHeading 
            title="Products from Sellers" 
            subtitle="Discover unique items from our trusted community of sellers"
          />
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
          >
            <span>View All</span>
            <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SellerProducts;