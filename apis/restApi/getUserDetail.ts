import apiClient from "./client";

export const getUserDetail = async (slug) => {
  try {
    let res = await apiClient.get(`user/${slug}/details`);

    const updateCartResponse = res.data;

    return updateCartResponse;
  } catch (error) {
    return undefined;
  }
};
