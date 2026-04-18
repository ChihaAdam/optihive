"use server";

import api from "@/shared/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import type { useFormState } from "@/shared/hooks/useForm";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";

export async function createFeatureAction(
  _prevState: useFormState,
  formData: FormData,
): Promise<useFormState> {
  const featureName = formData.get("featureName") as string;
  const featureDescription = formData.get("featureDescription") as string;
  const featureStatus = formData.get("featureStatus") as string;
  const projectId = formData.get("projectId") as string;

  try {
    await api.post(`/projects/features/${projectId}`, {
      featureName,
      featureDescription,
      featureStatus,
      projectId,
    });
    revalidateTag(CACHE_TAGS.PROJECT(projectId), "max");
    return { success: true, timespan: Date.now() };
  } catch (error) {
    console.error("Failed to create feature:", error);
    return { success: false, timespan: Date.now() };
  }
}
