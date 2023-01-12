import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  responseType: "json",
  baseURL: "https://pedlar-dev.ts.r.appspot.com/",
  headers: {
    "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
  },
});

export default apiClient;
