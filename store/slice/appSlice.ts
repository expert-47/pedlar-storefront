/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";

const initialState = {
  products: {},
  cartId: {},
  showDilog: {},
  showCart: false,
  storeName: "",
  showNavbar: true,
};

const storeData = (stateData) => {
  if (window) {
    localStorage.setItem("state", JSON.stringify(stateData));
  }
};
const getData = () => {
  if (window) {
    return localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : {};
  }
  return {};
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

      const stateData = {
        ...state,
        products: data,
        showCart: state.showCart ? state.showCart : action.payload.showCart || false,
        cartId: cartIds,
      };
      storeData(stateData);
      return stateData;
    },
    updateCartId: (state, action) => {
      let data = { ...state.cartId };
      data[state.storeName] = action.payload.id;

      const stateData = {
        ...state,
        cartId: data,
        showCart: action.payload.showCart,
      };
      storeData(stateData);
      return stateData;
    },
    clearCart: (state, action) => {
      const stateData = {
        ...state,
        cartId: "",
        products: [],
      };

      storeData(stateData);

      return stateData;
    },
    toggleDialog: (state, action) => {
      let data = { ...state.showDilog };
      data[state.storeName] = false;

      const stateData = {
        ...state,
        showDilog: data,
      };
      storeData(stateData);

      return stateData;
    },
    cartDrawerToggle: (state, action) => {
      const stateData = {
        ...state,
        showCart: action.payload,
      };
      storeData(stateData);

      return stateData;
    },
    clearStore: (state, action) => {
      console.log("getData", getData().storeName, action.payload);
      if (action.payload && getData().storeName && getData().storeName != action.payload) {
        console.log("getData");

        const stateData = {
          ...getData(),
          showNavbar: true,
          storeName: action.payload,
        };
        storeData(stateData);
        return stateData;
      }
      console.log("getData", getData());

      const stateData = {
        ...state,

        ...getData(),
        showNavbar: true,
        storeName: action.payload,
      };
      storeData(stateData);

      return stateData;
    },
  },
});

export const { addProductToCart, updateCartId, clearCart, toggleDialog, cartDrawerToggle, clearStore } =
  AppState.actions;
export default AppState.reducer;
