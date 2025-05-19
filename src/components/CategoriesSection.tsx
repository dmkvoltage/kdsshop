import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CategoryCard from './ui/CategoryCard';
import SectionHeading from './ui/SectionHeading';

const CategoriesSection: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Shop by Category" 
          subtitle="Browse our wide selection of products by category"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(productsByCategory).map(([category, products]) => (
            <CategoryCard 
              key={category}
              category={category}
              productCount={products.length}
              imageUrl={products[0]?.images?.[0] || 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;