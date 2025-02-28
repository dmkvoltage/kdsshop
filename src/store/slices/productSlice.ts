import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductAnalytics } from '../../types';
import { productApi } from '../../services/api';

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

interface ProductState {
  products: Product[];
  featured: Product[];
  loading: boolean;
  error: string | null;
  analytics: ProductAnalytics;
}

const initialState: ProductState = {
  products: [],
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
        product.viewCount++;
      }
    },
    incrementProductPurchase: (state, action: PayloadAction<string>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.purchaseCount++;
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