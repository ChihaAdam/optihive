"use server";
import { fetcher } from "@/shared/lib/apiUtils";
import { CACHE_TAGS } from "../cache/cacheTags";
async function getUserInfo() {
  const user = await fetcher({
    url: "/users/me",
    tag: CACHE_TAGS.USER_INFO,
  });
  return user;
}
export default getUserInfo;
