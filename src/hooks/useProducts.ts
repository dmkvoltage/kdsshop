import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchProductAnalytics,
} from '../store/slices/productSlice';

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    products,
    loading,
    error,
    analytics,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductAnalytics());
  }, [dispatch]);

  const handleCreateProduct = async (data: FormData) => {
    try {
      await dispatch(createProduct(data)).unwrap();
      return true;
    } catch (error) {
      console.error('Failed to create product:', error);
      return false;
    }
  };

  const handleUpdateProduct = async (id: string, data: FormData) => {
    try {
      await dispatch(updateProduct({ id, data })).unwrap();
      return true;
    } catch (error) {
      console.error('Failed to update product:', error);
      return false;
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await dispatch(deleteProduct(id)).unwrap();
      return true;
    } catch (error) {
      console.error('Failed to delete product:', error);
      return false;
    }
  };

  return {
    products,
    loading,
    error,
    analytics,
    createProduct: handleCreateProduct,
    updateProduct: handleUpdateProduct,
    deleteProduct: handleDeleteProduct,
  };
};