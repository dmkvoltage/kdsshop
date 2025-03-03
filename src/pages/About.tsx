import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar, 
  Heart,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Apple as WhatsApp } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import GoogleAds, { AdSenseFormat } from '../GoogleAds';

const teamMembers = [
  {
    id: 1,
    name: "Kingo Kingsley",
    role: "CEO, Founder and Developer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "Kingo founded KingoDreamsShop with a vision to revolutionize how people shop for electronics by connecting buyers directly with trusted sellers."
  },
  {
    id: 2,
    name: "Kingo DMK",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "With over 15 years in tech, DMK leads our development team, ensuring our platform remains cutting-edge and user-friendly."
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Head of Customer Experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "Marcus ensures that every customer interaction with KingoDreamsShop exceeds expectations, from browsing to post-purchase support."
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "Priya brings creativity and strategic thinking to our marketing efforts, helping us connect with tech enthusiasts worldwide."
  }
];

const milestones = [
  {
    year: 2018,
    title: "Company Founded",
    description: "KingoDreamsShop was established with the mission to create a more personal and trustworthy electronics marketplace."
  },
  {
    year: 2019,
    title: "Platform Launch",
    description: "Our first version of the platform went live, connecting buyers with verified electronics sellers."
  },
  {
    year: 2020,
    title: "WhatsApp Integration",
    description: "We pioneered direct seller-buyer communication through WhatsApp integration, revolutionizing customer service."
  },
  {
    year: 2021,
    title: "Seller Analytics",
    description: "Launched comprehensive analytics tools for sellers to optimize their product listings and sales strategies."
  },
  {
    year: 2022,
    title: "Mobile App Release",
    description: "Expanded our reach with dedicated mobile apps for iOS and Android, enhancing the shopping experience."
  },
  {
    year: 2023,
    title: "Global Expansion",
    description: "Expanded operations to serve customers across multiple countries, with localized support and services."
  },
  {
    year: 2024,
    title: "AI Recommendations",
    description: "Implemented advanced AI algorithms to provide personalized product recommendations for each customer."
  }
];

const About: React.FC = () => {
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
              About KingoDreamsShop
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Revolutionizing electronics shopping by connecting buyers directly with trusted sellers since 2018.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  KingoDreamsShop was born from a simple observation: buying electronics online often felt impersonal and risky. Customers couldn't ask detailed questions about products, and sellers had no way to build relationships with their buyers.
                </p>
                <p>
                  Founded in 2018 by Alex Johnson, our platform set out to solve this problem by creating a marketplace where buyers and sellers could connect directly. We pioneered the integration of WhatsApp communication into our platform, allowing for real-time conversations that build trust and ensure customer satisfaction.
                </p>
                <p>
                  Today, KingoDreamsShop has grown into a thriving community of tech enthusiasts, trusted sellers, and satisfied customers. Our dual account system provides tailored experiences for both buyers and sellers, while our commitment to quality and reliability remains at the heart of everything we do.
                </p>
                <p>
                  We're proud to have revolutionized the electronics shopping experience, making it more personal, trustworthy, and enjoyable for everyone involved.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl h-96"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="KingoDreamsShop team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Our Beginnings</h3>
                  <p>From a small startup to a trusted electronics marketplace</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Values</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and strong values that shape everything we do at KingoDreamsShop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To create the most trusted and personal electronics marketplace in the world, where buyers can shop with confidence and sellers can build thriving businesses.
              </p>
              <p className="text-gray-600">
                We believe that technology shopping should be more than just transactions—it should be about building relationships, sharing knowledge, and creating exceptional experiences for everyone involved.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">Trust:</span>
                  <span className="text-gray-600">We build trust through transparency, verification, and reliable service.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">Connection:</span>
                  <span className="text-gray-600">We believe in the power of direct communication to solve problems and build relationships.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">Quality:</span>
                  <span className="text-gray-600">We maintain high standards for products, sellers, and customer experiences.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">Innovation:</span>
                  <span className="text-gray-600">We continuously improve our platform to better serve our community.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
            <div style={{ maxWidth: "100%", height: "100px", overflow: "hidden", margin: "20px 0" }}>
      <GoogleAds client="ca-pub-3212295126356413" slot="5680085553" format={AdSenseFormat.AUTO} dataFullWidthResponsive={false} />
      </div>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind KingoDreamsShop who work tirelessly to create the best possible experience for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to where we are today, here's how KingoDreamsShop has evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white z-10`}>
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Here's how you can reach our team and where to find us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
                      <p className="mt-1 text-gray-600">123 Tech Street, San Francisco, CA 94107, USA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Email Us</h4>
                      <p className="mt-1 text-gray-600">kingodmk25@gmail.com</p>
                      <p className="mt-1 text-gray-600">kamlaamina429@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Call Us</h4>
                      <p className="mt-1 text-gray-600">+237 682713799</p>
                      <p className="mt-1 text-gray-600">+237 678897998</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Live Chat</h4>
                      <p className="mt-1 text-gray-600">Available Monday to Friday, 9am - 5pm PST</p>
                      <a
                        href="https://wa.me/682713799"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition-colors duration-300"
                        >
                        <WhatsApp className="h-6 w-6" />
                        <span>Chat with us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]"
            >
              {/* Google Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63732.90642767289!2d9.214582037035887!3d4.155717208221728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128340b6fbc1%3A0xeb4d5a0f9762e506!2sBuea%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1716304987654!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KingoDreamsShop Location"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="mt-4 text-xl text-gray-600">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="+237 677 123 456"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">privacy policy</a>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about TechMart and how we operate.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  question: "How does TechMart ensure seller reliability?",
                  answer: "We have a rigorous verification process for all sellers, including identity verification, product quality checks, and customer satisfaction monitoring. We also maintain a rating system based on buyer feedback."
                },
                {
                  question: "Can I communicate with sellers before purchasing?",
                  answer: "Yes! Our platform's unique feature is direct communication with sellers via WhatsApp. This allows you to ask detailed questions about products before making a purchase decision."
                },
                {
                  question: "What happens if I receive a defective product?",
                  answer: "TechMart has a comprehensive buyer protection policy. If you receive a defective product, you can initiate a return within 7 days, and we'll ensure you get a replacement or refund."
                },
                {
                  question: "How do I become a seller on TechMart?",
                  answer: "To become a seller, click on 'Become a Seller' in the footer, complete the application form, and submit the required documentation. Our team will review your application and get back to you within 48 hours."
                },
                {
                  question: "Does TechMart operate internationally?",
                  answer: "Yes, TechMart operates in multiple countries. We provide localized support and services tailored to each market we serve, ensuring a seamless experience for both buyers and sellers."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Experience KingoDreamsShop</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our community of tech enthusiasts and trusted sellers today. Start shopping with confidence or begin selling your electronics to a global audience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                Sign Up as Buyer
              </Link>
              <Link to="/register" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700">
                Become a Seller
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
