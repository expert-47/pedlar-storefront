import apiClient from "./client";

export const getCuratedBrands = async (slug) => {
  try {
    let res = await apiClient.get(`storefront/${slug}/vendors?sortKey=random`);
    const updateCartResponse = res.data;

    return updateCartResponse;
  } catch (error) {
    return undefined;
  }
};
