import getProjectDetails from "./getProjectDetails";
import {
  H3Gradiant,
  H4Gradiant,
} from "@/shared/components/ui/title-gradiant/title-gradiant";
import InvitationCode from "./invitationCode";
import ProjectMemberCard from "./project-member-card";
import { Calendar, Users, Hash, Clock } from "lucide-react";
import clsx from "clsx";

type Member = {
  _id: string;
  username: string;
  email: string;
  role: "project_manager" | "member";
  avatar: number;
};

type Project = {
  projectName: string;
  projectDescription?: string;
  invitationCode?: string;
  deadline: string;
  Status: "active" | "completed" | "deadline_passed";
  createdAt: string;
  updatedAt: string;
};

async function ProjectDetails({ id }: { id: string }) {
  const details = await getProjectDetails(id);
  const project = details.project as Project;
  const members = details.members as Member[];

  const statusColors = {
    active: "bg-green-500/20 text-green-400 border-green-500/50",
    completed: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    deadline_passed: "bg-red-500/20 text-red-400 border-red-500/50",
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="rounded-lg border border-foreground/10 bg-card/30 p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <H3Gradiant>{project?.projectName}</H3Gradiant>
              {project?.projectDescription && (
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {project.projectDescription}
                </p>
              )}
            </div>
            <span
              className={clsx(
                "rounded-full border px-4 py-1.5 text-xs font-semibold capitalize",
                statusColors[project?.Status],
              )}
            >
              {project?.Status.replace("_", " ")}
            </span>
          </div>

          {/* Project Info Cards */}
          <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-background/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <Calendar size={20} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground/60">Deadline</span>
                <span className="text-sm font-semibold">
                  {formatDate(project?.deadline)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-background/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                <Users size={20} className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground/60">Team Members</span>
                <span className="text-sm font-semibold">{members.length}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-background/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                <Clock size={20} className="text-green-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground/60">Created</span>
                <span className="text-sm font-semibold">
                  {formatDate(project?.createdAt)}
                </span>
              </div>
            </div>
          </div>

          {/* Invitation Code */}
          {project?.invitationCode && (
            <div className="mt-2 flex flex-col gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-center gap-2">
                <Hash size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground/80">
                  Invitation Code
                </span>
              </div>
              <InvitationCode code={project.invitationCode} />
            </div>
          )}
        </div>
      </div>

      {/* Members Section */}
      <div className="rounded-lg border border-foreground/10 bg-card/30 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
            <Users size={20} className="text-primary" />
          </div>
          <H4Gradiant>Team Members ({members.length})</H4Gradiant>
        </div>

        {members.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg text-foreground/60">No members yet</p>
            <p className="text-sm text-foreground/50">
              Invite team members using the invitation code above
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <ProjectMemberCard key={member._id} details={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
