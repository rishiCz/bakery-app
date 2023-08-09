import { createSlice } from "@reduxjs/toolkit";
import { findItemInCart } from "../../utils/functions";

const initialState = {
  cartProducts: [],
  totalCost: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGivenQuantity: (state, action) => {
      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      if (itemInCart) {
        itemInCart.quantity = action.payload.quantity;
        state.totalCost += action.payload.price * action.payload.quantity;
      }
    },

    addToCart: (state, action) => {
      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartProducts.push({ product: action.payload, quantity: 1 });
      }

      state.totalCost += action.payload.price;
    },

    decreaseQuantity: (state, action) => {
      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      if (itemInCart) {
        itemInCart.quantity--;
      }
      state.totalCost -= action.payload.price;
    },
    setDataFromLocal: (state, action) => {
      state.cartProducts = action.payload.cartProducts;
      state.totalCost = action.payload.totalCost;
    },
    removeItem: (state, action) => {
      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      state.cartProducts = state.cartProducts.filter(
        (item) => item !== itemInCart
      );

      let totalCost = 0;
      state.cartProducts.forEach((item) => {
        totalCost += item.product.price * item.quantity;
      });

      state.totalCost = totalCost;
    },
  },
});

export const {
  addToCart,
  setDataFromLocal,
  removeItem,
  addGivenQuantity,
  decreaseQuantity,
} = cart.actions;

export default cart.reducer;
