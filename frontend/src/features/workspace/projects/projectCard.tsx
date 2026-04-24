"use client";
import Badge from "./badge";
import Field from "./field";
import MembershipBadge from "../../../shared/components/membership-badge";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
type Status = "active" | "completed" | "deadline_passed";
type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
  projectName: string;
  deadline: string;
  Status: Status;
  createdAt: string;
  joinedAt: string;
  projectCreatedAt: string;
  role: "project_manager" | "member";
  projectId: string;
};

const formatDate = (date: string) => {
  return format(new Date(date), "PP");
};

function ProjectCard({
  projectName,
  deadline,
  Status,
  createdAt,
  joinedAt,
  projectCreatedAt,
  role,
  projectId,
  ...props
}: Readonly<ProjectCardProps>) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/workspace/${projectId}`);
  };
  return (
    <div
      {...props}
      onClick={handleClick}
      className={`flex flex-col gap-2 p-4 rounded-lg shadow-lg card-dimensions border border-foreground/20 overflow-hidden cursor-pointer hover:bg-foreground/5 border-l-6 ${role === "project_manager" ? "border-l-blue-500" : "border-l-primary"}`}
    >
      <div className="flex items-center justify-between gap-2 p-2">
        <h4 className="text-2xl font-bold text-center">{projectName}</h4>
        <div
          className={`flex gap-2 ${role === "project_manager" ? "flex-col items-end" : ""}`}
        >
          <Badge status={Status} />
          <MembershipBadge role={role} />
        </div>
      </div>
      <div className="flex flex-col p-2 gap-4">
        <Field label="deadline" value={formatDate(deadline)} />
        <Field label="Created at" value={formatDate(createdAt)} />
        <Field label="Joined at" value={formatDate(joinedAt)} />
        <Field
          label="Project created at"
          value={formatDate(projectCreatedAt)}
        />
      </div>
      <div className="flex items-center justify-end mt-auto   gap-2 p-2">
        <span className="text-sm font-medium">View Project</span>
        <ArrowRight size={20} />
      </div>
    </div>
  );
}

export default ProjectCard;
