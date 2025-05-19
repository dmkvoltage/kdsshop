import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  adminContact?: string;
  images?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      } 
    },
  };

  const imageUrl = product.images ? product.images[0] : product.image;

  return (
    <motion.div
      variants={item}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
    >
      <Link to={`/products/${product.id}`} className="block h-full">
        <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <div className="mb-1 text-sm font-medium text-blue-600">{product.category}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : index < product.rating
                      ? 'text-yellow-400 fill-current opacity-50'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <span className="text-sm font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
              New
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;