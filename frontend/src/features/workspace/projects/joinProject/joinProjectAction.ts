"use server";
import api from "@/shared/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import type { useFormState } from "@/shared/hooks/useForm";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
const joinProjectAction = async (
  _prevState: useFormState,
  formData: FormData,
): Promise<useFormState> => {
  const invitationCode = formData.get("invitationCode");
  try {
    await api.post("/projects/join", { invitationCode });
    revalidateTag(CACHE_TAGS.PROJECTS, "max");
    return { success: true, timespan: Date.now() };
  } catch (error) {
    return {
      success: false,
      timespan: Date.now(),
    };
  }
};

export default joinProjectAction;
