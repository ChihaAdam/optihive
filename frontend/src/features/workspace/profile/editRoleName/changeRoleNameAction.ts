"use server";
import api from "@/shared/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import type { useFormState } from "@/shared/hooks/useForm";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
const changeRoleNameAction = async (
  _prevState: useFormState,
  formData: FormData,
): Promise<useFormState> => {
  const roleName = formData.get("roleName");
  try {
    await api.patch("/users/me", { roleName });
    revalidateTag(CACHE_TAGS.USER, "max");
    return { success: true, timespan: Date.now() };
  } catch (error) {
    return {
      success: false,
      timespan: Date.now(),
    };
  }
};

export default changeRoleNameAction;
