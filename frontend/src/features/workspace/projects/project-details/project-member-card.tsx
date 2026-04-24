import Image from "next/image";
import clsx from "clsx";
import MembershipBadge from "@/shared/components/membership-badge";

type Role = "project_manager" | "member";
type ProjectMemberCardProps = React.HTMLAttributes<HTMLDivElement> & {
  details: {
    username: string;
    email: string;
    role: Role;
    avatar: number;
  };
};

const styles = {
  project_manager:
    "border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/50",
  member:
    "border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50",
};

function ProjectMemberCard({
  details,
  ...props
}: Readonly<ProjectMemberCardProps>) {
  return (
    <div
      {...props}
      className={clsx(
        "flex flex-col gap-3 rounded-lg border-2 p-4 shadow-sm transition-all duration-200",
        styles[details.role],
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-foreground/10">
          <Image
            src={`/avatars/${details.avatar}.svg`}
            alt={details.username}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="font-semibold">{details.username}</p>
          <p className="text-xs text-foreground/60">{details.email}</p>
        </div>
        <MembershipBadge role={details.role} />
      </div>
    </div>
  );
}

export default ProjectMemberCard;
