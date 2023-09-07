import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  responseType: "json",
  baseURL: process.env.NEXT_PUBLIC_API_DEV_BASE_URL,
});

export default apiClient;
