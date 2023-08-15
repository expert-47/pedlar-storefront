import apiClient from "./client";

export const getUserDetail = async (slug) => {
  try {
    let res = await apiClient.get(`user/${slug}/details`);
    console.log(res.data);
    const updateCartResponse = res.data;

    return updateCartResponse;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
