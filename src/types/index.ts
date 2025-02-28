export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviews: Review[];
  specifications: Record<string, string>;
  createdAt: string;
  updatedAt: string;
  adminId: string; // Added for admin association
  adminContact: string; // Added for WhatsApp contact
  viewCount: number; // Added for analytics
  purchaseCount: number; // Added for analytics
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  phone: string; // Added for WhatsApp contact
  createdAt: string;
  products?: Product[]; // Added for admin products
  analytics?: {
    totalSales: number;
    totalViews: number;
    totalProducts: number;
    popularProducts: Product[];
  };
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface ProductAnalytics {
  viewsByDay: { date: string; count: number }[];
  salesByDay: { date: string; count: number }[];
  popularCategories: { category: string; count: number }[];
  totalRevenue: number;
  averageRating: number;
}