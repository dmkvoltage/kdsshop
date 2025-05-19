import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const buttonControls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, transition: { duration: 0.5 } });
      await titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await subtitleControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await buttonControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };
    
    sequence();
  }, [controls, titleControls, subtitleControls, buttonControls]);

  return (
    <section className="relative bg-gray-900 h-[80vh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={controls}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            className="overflow-hidden"
          >
            <h1 className="font-bold tracking-tight">
              <span className="block text-5xl md:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                KingoDreamsShop
              </span>
              <span className="block text-3xl md:text-5xl text-white/90">
                Your Next Favorite Supermarket
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={subtitleControls}
            className="text-xl md:text-2xl mt-8 mb-10 text-white/80 leading-relaxed"
          >
            Discover the latest in electronics and get the best deals on premium gadgets.
            <span className="block mt-2 font-medium text-white">Customer satisfaction is our prime goal.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={buttonControls}
          >
            <Button
              to="/products"
              className="group"
            >
              <span>Shop Now</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;