import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishSlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    product: productReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const RootState = store.getState;

export const AppDispatch = store.dispatch;
