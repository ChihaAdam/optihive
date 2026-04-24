import { Settings } from "lucide-react";
import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
        <Settings size={40} className="text-primary" />
      </div>

      <div className="flex flex-col gap-2">
        <H3Gradiant>Project Settings</H3Gradiant>
        <p className="max-w-md text-foreground/60">
          Project settings are coming soon! This page will allow you to manage
          your project configuration, update details, and more.
        </p>
      </div>

      <div className="flex flex-col gap-3 text-sm text-foreground/50">
        <p>Available features soon:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Update project name and description</li>
          <li>Change project deadline</li>
          <li>Manage project members</li>
          <li>Delete or archive the project</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
