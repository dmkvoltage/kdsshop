import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Headphones, 
  Clock, 
  CreditCard, 
  Truck, 
  ShoppingBag, 
  MessageCircle,
  Star,
  ChevronRight,
  ChevronLeft,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    content: "TechMart has completely transformed how I shop for electronics. Their customer service is unmatched, and I love being able to message sellers directly with questions.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    content: "As someone who's very particular about tech specifications, I appreciate how TechMart connects me directly with knowledgeable sellers who can answer all my questions.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    content: "The seller dashboard has made it incredibly easy to manage my electronics inventory. The analytics tools help me understand what products are performing best.",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Gadget Collector",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    content: "The WhatsApp integration is brilliant! Being able to chat directly with sellers before and after purchase gives me so much confidence in my buying decisions.",
    rating: 5
  }
];

const Services: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 bottom-0 h-full w-full text-white opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Premium Services for All Your Tech Needs
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover why thousands of customers and sellers trust TechMart for their electronics shopping and selling experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive platform that connects buyers with trusted sellers, offering a seamless shopping experience with direct communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Curated Marketplace</h3>
              <p className="text-gray-600">
                Our platform brings together quality electronics from verified sellers, ensuring you have access to the best products at competitive prices.
              </p>
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Verified seller accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quality product guarantees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitive pricing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Communication</h3>
              <p className="text-gray-600">
                Our WhatsApp integration allows buyers to connect directly with sellers, building trust and ensuring all your questions are answered.
              </p>
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Instant WhatsApp connection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pre and post-purchase support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Build relationships with sellers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Account System</h3>
              <p className="text-gray-600">
                Whether you're a buyer or seller, our platform offers tailored experiences with dedicated dashboards and tools.
              </p>
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customer accounts with order tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seller dashboards with analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seamless account management</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Accounts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Accounts</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our customer accounts are designed to provide you with a seamless shopping experience from browsing to delivery and beyond.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ShoppingBag className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Personalized Shopping</h4>
                      <p className="text-gray-600">Track your orders, save favorite products, and receive personalized recommendations based on your browsing history.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Truck className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Order Management</h4>
                      <p className="text-gray-600">View your order history, track shipments in real-time, and manage returns or exchanges all from your dashboard.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <MessageCircle className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Direct Seller Communication</h4>
                      <p className="text-gray-600">Connect with sellers via WhatsApp before and after purchase to ask questions, request additional information, or resolve issues.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Customer dashboard interface" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">User-Friendly Dashboard</h3>
                  <p>Manage your orders, wishlist, and account settings with ease</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admin/Seller Accounts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-xl md:order-1 order-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Seller dashboard with analytics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Powerful Seller Dashboard</h3>
                  <p>Comprehensive tools to manage your products and track performance</p>
                </div>
              </div>
            </motion.div>
            <div className="md:order-2 order-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Seller Accounts</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our seller platform provides powerful tools to help you manage your inventory, connect with customers, and grow your electronics business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <CreditCard className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Sales Analytics</h4>
                      <p className="text-gray-600">Access detailed analytics on product performance, customer behavior, and sales trends to optimize your business strategy.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ShieldCheck className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Verified Seller Status</h4>
                      <p className="text-gray-600">Gain customer trust with our verified seller badge, showing that you've met our quality and reliability standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Headphones className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Customer Relationship Management</h4>
                      <p className="text-gray-600">Build lasting relationships with customers through our integrated WhatsApp communication system, providing pre and post-sale support.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Availability */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              24/7 Availability & Support
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're committed to providing round-the-clock service to ensure your shopping experience is seamless at any time of day.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Always Online</h3>
              <p className="text-blue-100">
                Our platform is available 24/7, allowing you to shop, manage your account, or list products at any time that suits you.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-6">
                <Headphones className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-blue-100">
                Our dedicated support team is available around the clock to assist with any questions, concerns, or technical issues you may encounter.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Direct Messaging</h3>
              <p className="text-blue-100">
                Connect with sellers via WhatsApp at any time, allowing for real-time communication regardless of business hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our community has to say about their experience with TechMart.
            </p>
          </div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name} 
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < testimonials[currentTestimonial].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">"{testimonials[currentTestimonial].content}"</p>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 w-3 rounded-full ${
                      currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Tech Shopping?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers and trusted sellers on our platform. Start exploring the best in electronics today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Products
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;