import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { sampleProducts as rawSampleProducts } from '../../data/sampleProducts'; // Adjust path if needed
import { Product, ProductAnalytics } from '../../types';  // Adjust path if needed
import { productApi } from '../../services/api';

// Transform sample products to match full Product type
const sampleProducts: Product[] = rawSampleProducts.map((p, index) => ({
  id: p.id,
  name: p.name,
  description: 'No description provided',
  price: p.price,
  images: [p.image], // Convert single image to array
  category: p.category,
  brand: 'Generic',
  stock: 10,
  rating: p.rating,
  reviews: [], // Default empty array
  specifications: {},
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  adminId: `admin-${index}`,
  adminContact: '',
  viewCount: 0,
  purchaseCount: 0,
}));
// Async thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await productApi.getAll();
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (data: FormData) => {
    const response = await productApi.create(data);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, data }: { id: string; data: FormData }) => {
    const response = await productApi.update(id, data);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: string) => {
    await productApi.delete(id);
    return id;
  }
);

export const fetchProductAnalytics = createAsyncThunk(
  'products/fetchAnalytics',
  async () => {
    const response = await productApi.getAnalytics();
    return response.data;
  }
);

// State interface
interface ProductState {
  products: Product[];
  featured: Product[];
  loading: boolean;
  error: string | null;
  analytics: ProductAnalytics;
}

const initialState: ProductState = {
  products: sampleProducts,
  featured: [],
  loading: false,
  error: null,
  analytics: {
    viewsByDay: [],
    salesByDay: [],
    popularCategories: [],
    totalRevenue: 0,
    averageRating: 0,
  },
};

// Slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFeatured: (state, action: PayloadAction<Product[]>) => {
      state.featured = action.payload;
    },
    incrementProductView: (state, action: PayloadAction<string>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.viewCount += 1;
      }
    },
    incrementProductPurchase: (state, action: PayloadAction<string>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.purchaseCount += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.unshift(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create product';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
      })
      .addCase(fetchProductAnalytics.fulfilled, (state, action) => {
        state.analytics = action.payload;
      });
  },
});

export const { setFeatured, incrementProductView, incrementProductPurchase } = productSlice.actions;
export default productSlice.reducer;
