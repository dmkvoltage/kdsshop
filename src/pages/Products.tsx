import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Grid, List, Search, Star, Heart, ShoppingCart, Apple as WhatsApp } from 'lucide-react';
import { AppDispatch, RootState } from '../store';
import { fetchProducts } from '../store/slices/productSlice';
import { sampleProducts } from '../data/sampleProducts'; // Import the sample products

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const storeProducts = useSelector((state: RootState) => state.products.products);
  
  const [products, setProducts] = useState(sampleProducts);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    dispatch(fetchProducts());
    
    if (storeProducts && storeProducts.length > 0) {
      setProducts(storeProducts);
    } else {
      const adaptedSampleProducts = sampleProducts.map(product => ({
        ...product,
        images: [product.image || ''], 
        reviews: [], 
        description: '',
        stock: 10, // Default stock
        specifications: {}, // Empty specifications
        createdAt: new Date().toISOString(), // Current date
        updatedAt: new Date().toISOString(), // Current date
        adminId: '', // Empty admin ID
        adminContact: '', // Empty admin contact
        viewCount: 0, // Default view count
        purchaseCount: 0, // Default purchase count
      }));
      
      setProducts(adaptedSampleProducts);
    }
  }, [dispatch, storeProducts]);

  // Extract unique categories and brands
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  
  const brands = Array.from(
    new Set(products.map((product) => product.brand).filter(Boolean))
  );

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 || 
      (product.brand && selectedBrands.includes(product.brand));

    return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'text-blue-600'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${
                viewMode === 'list'
                  ? 'text-blue-600'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, max: Number(e.target.value) })
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange.min}FCFA</span>
                    <span>{priceRange.max}FCFA</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter((c) => c !== category)
                            );
                          }
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Brands
                </h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(
                              selectedBrands.filter((b) => b !== brand)
                            );
                          }
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {sortedProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }
            >
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className="relative">
                    <Link
                      to={`/products/${product.id}`}
                      className={viewMode === 'list' ? 'flex-shrink-0' : ''}
                    >
                      <img
                        src={product.images?.[0] || '/api/placeholder/300/300'}
                        alt={product.name}
                        className={`w-full object-cover ${
                          viewMode === 'list' ? 'h-48 w-48' : 'h-64'
                        }`}
                      />
                    </Link>
                    {product.adminContact && (
                      <a
                        href={`https://wa.me/${product.adminContact}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition-colors duration-300"
                      >
                        <WhatsApp className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                  <div className="p-4">
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${
                            index < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        ({product.reviews?.length || 0})
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4">{product.brand || 'Generic'}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">
                        {product.price.toFixed(2)} FCFA
                      </p>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-red-500">
                          <Heart className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-500">
                          <ShoppingCart className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Show message if no products found */}
            {sortedProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-xl text-gray-500 mb-4">No products found</p>
                <p className="text-gray-400">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;