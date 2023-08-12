import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.cartQuantity += 1;
        toast.info("Added to Cart", { position: "bottom-right" });
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
        toast.success("Product added to cart", { position: "bottom-left" });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const { id } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.id === id);

      if (itemToUpdate && itemToUpdate.cartQuantity > 1) {
        itemToUpdate.cartQuantity -= 1;
        toast.info("Decreased product quantity in cart", { position: "bottom-left" });
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
        toast.error("Product removed from cart", { position: "bottom-left" });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
      toast.error("Product removed from cart", { position: "bottom-left" });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));
    },
    clearCart(state) {
      state.cartItems = [];
      toast.error("Cart cleared", { position: "bottom-left" });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
