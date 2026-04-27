"use server";

import { fetcher } from "@/shared/lib/apiUtils";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
export const getProjectsAction = async () => {
  const projects = await fetcher({
    url: "/projects",
    tag: CACHE_TAGS.PROJECTS,
  });
  return projects.projects;
};
