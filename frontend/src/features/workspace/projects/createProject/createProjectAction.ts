"use server";
import api from "@/shared/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import type { useFormState } from "@/shared/hooks/useForm";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
export async function createProjectAction(
  _prevState: useFormState,
  formData: FormData,
): Promise<useFormState> {
  const projectName = formData.get("name") as string;
  const description = formData.get("description") as string;
  const deadline = formData.get("deadline") as string;
  const usDeadline = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(deadline));
  try {
    await api.post("/projects/create", {
      projectName,
      projectDescription: description,
      deadline: usDeadline,
    });
    revalidateTag(CACHE_TAGS.PROJECTS, "max");
    return { success: true, timespan: Date.now() };
  } catch (error) {
    return { success: false, timespan: Date.now() };
  }
}
