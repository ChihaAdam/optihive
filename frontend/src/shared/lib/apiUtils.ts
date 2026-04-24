"use server";
import { cacheTag } from "next/cache";
import { deleteToken, getToken } from "@/features/auth/token";
import { cacheApi } from "./axiosInstance";
import { redirect } from "next/navigation";
/* 
  this function is used to fetch data from the server
  it uses the cacheTag function to cache the data
  it uses the getToken function to get the token from the cookies
  it uses the deleteToken function to delete the token from the cookies
  because caching is usually used for the GET method so no need to pass the method as a parameter 
  which reduces the number of parameters and reduces the spaghetti code
*/
type fetcherWithCacheProps = {
  url: string;
  tag: string;
  token?: string;
};
export const fetcherWithCache = async ({
  url,
  tag,
  token,
}: fetcherWithCacheProps) => {
  "use cache";
  cacheTag(tag);

  if (!token) {
    const err = {
      response: {
        status: 401,
      },
    };
    throw err;
  }

  const response = await cacheApi.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetcher = async ({
  url,
  tag,
}: Omit<fetcherWithCacheProps, "token">) => {
  try {
    const token = await getToken();
    const response = await fetcherWithCache({ url, tag, token });
    return response;
  } catch (error: any) {
    if (error.response?.status === 401) {
      await deleteToken();
      redirect("/login");
    }
    throw error;
  }
};
