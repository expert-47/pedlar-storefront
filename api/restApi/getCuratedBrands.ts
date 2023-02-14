import apiClient from "./client";

export const getCuratedBrands = async (collectionID: number) => {
  console.log("collectionIDdsa", collectionID);
  try {
    let res = await apiClient.get(`storefront/${collectionID}/vendors?sortKey=random`);
    const updateCartResponse = res.data;

    return updateCartResponse;
  } catch (error) {
    return undefined;
  }
};
