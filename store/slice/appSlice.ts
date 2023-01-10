/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartId: "",
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
  },
});

export const { addProductToCart, updateCartId } = AppState.actions;
export default AppState.reducer;
