import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import { getProjectAnalysis } from "./getProjectAnalysis";
import ProjectsInfoCard from "./projectsInfoCard";

async function ProjectAnalysis() {
  const analysis = await getProjectAnalysis();
  return (
    <div className="flex flex-col gap-5 shadow-lg border border-foreground/20 bg-foreground/5 p-4 rounded-lg">
      <H4Gradiant>Project Analysis</H4Gradiant>
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-10">
        <ProjectsInfoCard
          label="Total Projects"
          value={analysis.totalProjects}
          tailwindColor="bg-blue-400/50"
        />
        <ProjectsInfoCard
          label="Completed Projects"
          value={analysis.completedProjects}
          tailwindColor="bg-teal-500/50"
        />
        <ProjectsInfoCard
          label="Active Projects"
          value={analysis.activeProjects}
          tailwindColor="bg-amber-400/50"
        />
        <ProjectsInfoCard
          label="Deadline Passed Projects"
          value={analysis.deadlinePassedProjects}
          tailwindColor="bg-pink-400/50"
        />
      </div>
    </div>
  );
}

export default ProjectAnalysis;
