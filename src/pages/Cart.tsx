import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../store/slices/cartSlice';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.products.products);

  const cartItems = items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const product = products.find((p) => p.id === productId);
    if (product && newQuantity <= product.stock) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-2 text-lg font-medium text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Start shopping to add items to your cart
            </p>
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.li
                      key={item.productId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-24 h-24">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="ml-6 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">
                              <Link
                                to={`/products/${item.productId}`}
                                className="hover:text-blue-600"
                              >
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="text-lg font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center border rounded-md">
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.productId,
                                      item.quantity - 1
                                    )
                                  }
                                  className="p-2 text-gray-600 hover:text-gray-900"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4 py-2 border-x">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.productId,
                                      item.quantity + 1
                                    )
                                  }
                                  className="p-2 text-gray-600 hover:text-gray-900"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <button
                                onClick={() => handleRemoveItem(item.productId)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">
                    ${(total * 0.1).toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-medium text-gray-900">
                      ${(total * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;