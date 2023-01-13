import apiClient from "./client";

export const getCuratedBrands = async () => {
  try {
    let res = await apiClient.get("storefront/412809756899/vendors?sortKey=random");
    const updateCartResponse = res.data;

    return updateCartResponse;
  } catch (error) {
    return undefined;
  }
};
