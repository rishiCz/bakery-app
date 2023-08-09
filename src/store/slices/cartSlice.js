import { createSlice } from "@reduxjs/toolkit";
import {
  findItemInCart,
  addListToListStorage,
  getListFromListStorage,
  addPriceToStorage,
  getPriceFromStorage,
} from "../../utils/functions";

const initialState = {
  cartProducts: getListFromListStorage() || [],
  totalCost: getPriceFromStorage() || 0,
};
export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartProducts.push({ product: action.payload, quantity: 1});
      }

      state.totalCost += action.payload.price;
      addListToListStorage(state.cartProducts);
      addPriceToStorage(state.totalCost);
    },

    decreaseQuantity: (state, action) => {
      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      if (itemInCart) {
        itemInCart.quantity--;
      }
      state.totalCost -= action.payload.price;
      addListToListStorage(state.cartProducts);
      addPriceToStorage(state.totalCost);
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
      addListToListStorage(state.cartProducts);
      addPriceToStorage(state.totalCost);
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
