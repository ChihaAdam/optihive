"use server";
import api from "@/shared/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
import type { useFormState } from "@/shared/hooks/useForm";
const changeRoleDescriptionAction = async (
  _prevState: useFormState,
  formData: FormData,
): Promise<useFormState> => {
  try {
    const roleDescription = formData.get("roleDescription") as string;
    await api.patch("/users/me", { roleDescription });
    revalidateTag(CACHE_TAGS.USER, "max");
    return { success: true, timespan: Date.now() };
  } catch (error: any) {
    return {
      success: false,
      timespan: Date.now(),
    };
  }
};
export default changeRoleDescriptionAction;
