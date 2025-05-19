import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: string;
  productCount: number;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  productCount, 
  imageUrl 
}) => {
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      } 
    },
  };

  return (
    <motion.div
      variants={item}
      className="relative rounded-xl overflow-hidden group cursor-pointer h-80 shadow-md"
    >
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <img
        src={imageUrl}
        alt={category}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category}</h3>
        <p className="text-white/90 mb-4">{productCount} Products</p>
        <Link 
          to={`/category/${category}`}
          className="inline-flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg 
                    hover:bg-white/30 transition-colors duration-300 w-full md:w-auto text-center"
        >
          Explore {category}
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;