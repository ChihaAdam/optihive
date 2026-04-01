"use server";

import { fetcher } from "@/shared/lib/apiUtils";
export const getProjectsAction = async () => {
  const projects = await fetcher({
    url: "/projects",
    tag: "projects",
  });
  return projects.projects;
};
