
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsByIds = createAsyncThunk('products/fetchProductsByIds', async (productIds) => {
  try {
    const requests = productIds.map(productId => (
      // eslint-disable-next-line 
      console.log(`https://fakestoreapi.com/products/${productId}`),
      axios.get(`https://fakestoreapi.com/products/${productId}`)));
    const responses = await Promise.all(requests);
    const products = responses.map(response => response.data);
    return products;
  } catch (error) {
    throw error;
  }
});

// Create a slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByIds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByIds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductsByIds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

