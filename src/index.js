import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import productReducer, { productsFetch } from './features/productSlice';
import { productApi } from './features/productsApi';

const store = configureStore({
  reducer:{
    products: productReducer,
    [productApi.reducerPath] : productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>{
    getDefaultMiddleware().concat(productApi.middleware)
  }
})

store.dispatch(productsFetch())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
