/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  cartId: {},
  showDilog: {},
  showCart: false,
  storeName: "",
  showNavbar: true,
};

const AppState = createSlice({
  name: "app",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let data = { ...state.products };
      let cartIds = { ...state.cartId };
      cartIds[state.storeName] = action.payload.products?.length == 0 ? undefined : cartIds[state.storeName];
      data[state.storeName] = !state.cartId[state.storeName] ? [] : action.payload.products;
      return {
        ...state,
        products: data,
        showCart: state.showCart ? state.showCart : action.payload.showCart || false,
        cartId: cartIds,
      };
    },
    updateCartId: (state, action) => {
      let data = { ...state.cartId };
      data[state.storeName] = action.payload.id;

      return {
        ...state,
        cartId: data,
        showCart: action.payload.showCart,
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
      let data = { ...state.showDilog };
      data[state.storeName] = false;
      console.log(data);

      return {
        ...state,
        showDilog: data,
      };
    },
    cartDrawerToggle: (state, action) => {
      return {
        ...state,
        showCart: action.payload,
      };
    },
    clearStore: (state, action) => {
      return { ...state, showNavbar: true, storeName: action.payload, cartId: state.cartId };
    },
  },
});

export const { addProductToCart, updateCartId, clearCart, toggleDialog, cartDrawerToggle, clearStore } =
  AppState.actions;
export default AppState.reducer;
