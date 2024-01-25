import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  responseType: "json",
  baseURL: process.env.NEXT_PUBLIC_API_DEV_BASE_URL,
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_TOKEN,
    "Cache-Control": "no-cache",
  },
});

export default apiClient;
