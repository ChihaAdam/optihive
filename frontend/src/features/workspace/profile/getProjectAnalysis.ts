import { getProjectsAction } from "../../../shared/actions/getProjectsAction";

export const getProjectAnalysis = async () => {
  const projects = await getProjectsAction();
  let totalProjects = 0;
  let completedProjects = 0;
  let activeProjects = 0;
  let deadlinePassedProjects = 0;
  projects.forEach((project: any) => {
    totalProjects++;
    const status = project.Status.toLowerCase();
    if (status === "completed") {
      completedProjects++;
    } else if (status === "active") {
      activeProjects++;
    } else if (status === "deadline_passed") {
      deadlinePassedProjects++;
    }
  });
  return {
    totalProjects,
    completedProjects,
    activeProjects,
    deadlinePassedProjects,
  };
};
