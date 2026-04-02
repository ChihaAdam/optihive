"use server";
import { fetcher } from "@/shared/lib/apiUtils";
import { CACHE_TAGS } from "../cache/cacheTags";
const getUserInfo = async () => {
  const user = await fetcher({
    url: "/users/me",
    tag: CACHE_TAGS.USER,
  });
  return user;
};
export default getUserInfo;
