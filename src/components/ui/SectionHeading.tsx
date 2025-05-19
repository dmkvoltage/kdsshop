import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
        {title}
        <span className="absolute -bottom-3 left-0 w-16 h-1 bg-blue-600"></span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-gray-600 text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;