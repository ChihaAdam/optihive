"use server";
import { fetcher } from "@/shared/lib/apiUtils";
const getUserInfo = async () => {
  const user = await fetcher({
    url: "/users/me",
    tag: "userInfo",
  });
  return user;
};
export default getUserInfo;
