import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { incrementProductView, incrementProductPurchase } from '../store/slices/productSlice';
import { analyticsApi } from '../services/api';

export const useAnalytics = () => {
  const dispatch = useDispatch<AppDispatch>();
  const analytics = useSelector((state: RootState) => state.products.analytics);

  const trackProductView = async (productId: string) => {
    try {
      dispatch(incrementProductView(productId));
      await analyticsApi.getProductStats(productId);
    } catch (error) {
      console.error('Failed to track product view:', error);
    }
  };

  const trackProductPurchase = async (productId: string) => {
    try {
      dispatch(incrementProductPurchase(productId));
      await analyticsApi.getProductStats(productId);
    } catch (error) {
      console.error('Failed to track product purchase:', error);
    }
  };

  const getSalesReport = async (startDate: string, endDate: string) => {
    try {
      const response = await analyticsApi.getSalesReport(startDate, endDate);
      return response.data;
    } catch (error) {
      console.error('Failed to get sales report:', error);
      return null;
    }
  };

  return {
    analytics,
    trackProductView,
    trackProductPurchase,
    getSalesReport,
  };
};