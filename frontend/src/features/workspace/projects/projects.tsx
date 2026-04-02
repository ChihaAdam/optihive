import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import { getProjectsAction } from "../../../shared/actions/getProjectsAction";
import JoinProjectCard from "./joinProject/joinProjectCard";
import ProjectCard from "./projectCard";

async function Projects() {
  const projects = await getProjectsAction();
  return (
    <>
      <div className="flex flex-col gap-2 items-start mb-6">
        <H3Gradiant>Projects</H3Gradiant>
        <h4 className="text-foreground/50 font-medium m-0">
          Here are all the projects you've joined . choose a project and check
          your tasks and status
        </h4>
      </div>
      <div className="flex flex-wrap gap-5">
        <JoinProjectCard />
        {projects.map((project: any) => (
          <ProjectCard
            key={project._id}
            projectName={project.projectName}
            deadline={project.deadline}
            Status={project.Status}
            joinedAt={project.joinedAt}
            projectCreatedAt={project.projectCreatedAt}
            role={project.role}
            createdAt={project.createdAt}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
