import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Offers
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals directly in your inbox.
          </p>
          
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-lg max-w-md mx-auto"
            >
              <p className="font-medium">Thanks for subscribing! 🎉</p>
              <p className="text-sm mt-1">We'll keep you updated with the best deals.</p>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row shadow-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-transparent focus:border-white"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-gray-900 text-white rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg hover:bg-gray-800 
                            focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium transition-colors
                            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-white bg-red-500/20 backdrop-blur-sm p-2 rounded text-sm"
                >
                  {error}
                </motion.p>
              )}
            </form>
          )}
          
          <p className="text-blue-200 text-sm mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;