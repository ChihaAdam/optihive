import { fetcher } from "@/shared/lib/apiUtils";
import { CACHE_TAGS } from "@/shared/cache/cacheTags";
async function getProjectDetails(id: string) {
  const response = await fetcher({
    url: `/projects/${id}`,
    tag: CACHE_TAGS.PROJECT(id),
  });
  return response;
}
export default getProjectDetails;
