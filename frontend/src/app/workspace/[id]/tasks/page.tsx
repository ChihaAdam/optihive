import { ClipboardList } from "lucide-react";
import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
        <ClipboardList size={40} className="text-primary" />
      </div>

      <div className="flex flex-col gap-2">
        <H3Gradiant>Task Management</H3Gradiant>
        <p className="max-w-md text-foreground/60">
          Task management is coming soon! This feature will allow you to create,
          assign, track, and manage tasks within your project.
        </p>
      </div>

      <div className="flex flex-col gap-3 text-sm text-foreground/50">
        <p>Stay tuned for:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Create and assign tasks to team members</li>
          <li>Set priorities and deadlines</li>
          <li>Track task progress and completion</li>
          <li>AI-powered task recommendations</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
