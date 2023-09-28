/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { createSlice } from "@reduxjs/toolkit";
import { client } from "apis/graphql/client";
import { getFilterData } from "apis/graphql/grapgql";

export const getBrandShopTags = (collectionId) => {
  return async (dispatch) => {
    try {
      const filterData = await client.query({
        query: getFilterData,
        variables: { collectionId: `gid://shopify/Collection/${collectionId}`, query: [{ available: true }] },
      });

      let shop = filterData?.data?.collection?.products?.filters?.find((data) => data.label === "Product type");
      let brand = filterData?.data?.collection?.products?.filters?.find((data) => data.label === "Brand");

      dispatch(
        updateTags({
          shop: shop?.values?.filter((item) => item.count != 0) || [],
          brand: brand?.values?.filter((item) => item.count != 0) || [],
        }),
      );
    } catch (error) {}
  };
};
const initialState = {
  shop: [],
  brand: [],
};

const AppState = createSlice({
  name: "tags",
  initialState,
  reducers: {
    updateTags: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateTags } = AppState.actions;
export default AppState.reducer;
