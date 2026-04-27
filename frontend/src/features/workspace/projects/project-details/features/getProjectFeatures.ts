"use server";
import { fetcher } from "@/shared/lib/apiUtils";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";

async function getProjectFeatures(id: string) {
  const response = await fetcher({
    url: `/projects/features/${id}`,
    tag: CACHE_TAGS.PROJECT(id),
  });
  return response.features;
}

export default getProjectFeatures;
