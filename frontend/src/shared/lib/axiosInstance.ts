import axios, { InternalAxiosRequestConfig } from "axios";
import { deleteToken, getToken } from "@/features/auth/token";
import { redirect } from "next/navigation";
/*
  we need to skip the response interceptor for the cached requests
  so we need to add a flag to the request config
  if the flag is true, we skip the response interceptor
*/
declare module "axios" {
  interface AxiosRequestConfig {
    skipResponseInterceptor?: boolean;
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    if (config.headers.Authorization)
      return config; /* to handle cached requests */
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
  (response) => {
    if (response.config.skipResponseInterceptor) {
      return response;
    }
    return response;
  },
  async (error) => {
    if (error.response?.config?.skipResponseInterceptor) {
      return error;
    }
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
export default api;
