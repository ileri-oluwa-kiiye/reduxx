import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from './features/productsApi';
import { fetchProductsByIds } from './features/productsSlice';
import productsReducer from './features/productsSlice';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

store.dispatch(fetchProductsByIds());

const root = createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
