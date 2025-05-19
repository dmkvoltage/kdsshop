import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kds-kt4e.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error setting up request');
    }
  }
);

// Product APIs
export const productApi = {
  getAll: () => api.get('/products'),
  getById: (id: string) => api.get(`/products/${id}`),
  create: (data: FormData) => api.post('/products', data),
  update: (id: string, data: FormData) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
  getAnalytics: () => api.get('/products/analytics'),
};

// Auth APIs
export const authApi = {
  login: (email: string, password: string) => 
    api.post('/users/login', { email, password }),
  register: (data: any) => api.post('/users/register', data),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  getProfile: () => api.get('/users/profile'),
};

// Cart APIs
export const cartApi = {
  getCart: () => api.get('/cart'),
  addToCart: (productId: string, quantity: number) => 
    api.post('/cart', { productId, quantity }),
  updateQuantity: (productId: string, quantity: number) => 
    api.put(`/cart/${productId}`, { quantity }),
  removeFromCart: (productId: string) => 
    api.delete(`/cart/${productId}`),
  clearCart: () => api.delete('/cart'),
};

export default api;