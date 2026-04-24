import axios, { InternalAxiosRequestConfig } from "axios";
import { deleteToken, getToken } from "@/features/auth/token";
import { redirect } from "next/navigation";
/*
  we need to skip the response interceptor for the cached requests
  so we need to add a flag to the request config
  if the flag is true, we skip the response interceptor
*/

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error(error);
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        await deleteToken();
        redirect("/login");
      } catch (error) {
        console.error(error);
      }
    }
    return Promise.reject(error);
  },
);

export const cacheApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
