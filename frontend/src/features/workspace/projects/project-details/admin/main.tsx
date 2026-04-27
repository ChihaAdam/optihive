import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import CreateFeatureForm from "./create-feature/create-feature-form";
function AdminMain({ id }: { id: string }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <H3Gradiant>Project Admin</H3Gradiant>
          <p className="text-sm text-foreground/70">
            Manage and track the key features of this project
          </p>
        </div>
        <CreateFeatureForm projectId={id} />
      </div>
    </>
  );
}

export default AdminMain;
