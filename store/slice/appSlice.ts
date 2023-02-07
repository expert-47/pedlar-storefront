/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartId: "",
  showDilog: true,
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
  },
});

export const { addProductToCart, updateCartId, clearCart, toggleDialog } = AppState.actions;
export default AppState.reducer;
