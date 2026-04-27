"use server";
import api from "@/shared/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import type { useFormState } from "@/shared/hooks/useForm";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
export async function updateUsernameAction(
  _state: useFormState,
  formData: FormData,
): Promise<useFormState> {
  try {
    const username = formData.get("username") as string;
    if (!username) {
      return {
        success: false,
        timespan: Date.now(),
      };
    }
    await api.patch("/users/me", { username });
    revalidateTag(CACHE_TAGS.USER_INFO, "max");
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

export async function updatePasswordAction(
  _state: useFormState,
  formData: FormData,
): Promise<useFormState> {
  try {
    const password = formData.get("password") as string;
    if (!password) {
      return {
        success: false,
        timespan: Date.now(),
      };
    }
    await api.patch("/users/me", { password });
    revalidateTag(CACHE_TAGS.USER_INFO, "max");
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
