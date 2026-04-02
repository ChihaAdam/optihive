"use server";
import { revalidateTag } from "next/cache";
import api from "@/shared/lib/axiosInstance";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";

export type useFormState = {
  success: boolean | null;
  timespan: number;
};

export default async function avatarChangeAction(
  _state: useFormState,
  formData: FormData,
) {
  try {
    await api.patch("/users/me", {
      avatar: Number(formData.get("avatar")),
    });
    revalidateTag(CACHE_TAGS.USER, "max");
    return {
      success: true,
      timespan: Date.now(),
    };
  } catch (error) {
    return {
      success: false,
      timespan: Date.now(),
    };
  }
}
