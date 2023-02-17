/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartId: "",
  showDilog: true,
  showCart: false,
};

const AppState = createSlice({
  name: "app",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    updateCartId: (state, action) => {
      return {
        ...state,
        cartId: action.payload,
      };
    },
    clearCart: (state, action) => {
      return {
        ...state,
        cartId: "",
        products: [],
      };
    },
    toggleDialog: (state, action) => {
      return {
        ...state,
        showDilog: false,
      };
    },
    cartDrawerToggle: (state, action) => {
      return {
        ...state,
        showCart: action.payload,
      };
    },
  },
});

export const { addProductToCart, updateCartId, clearCart, toggleDialog, cartDrawerToggle } = AppState.actions;
export default AppState.reducer;
