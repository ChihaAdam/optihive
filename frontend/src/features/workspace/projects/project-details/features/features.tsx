import getProjectFeatures from "../getProjectFeatures";
import FeatureCard from "./feature-card";
import CreateFeatureForm from "./create-feature/create-feature-form";
import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import { LayoutGrid } from "lucide-react";
import { hasPermission } from "@/features/auth/getUserRoleOnProject";
type Feature = {
  _id: string;
  featureName: string;
  featureDescription: string;
  featureStatus: "active" | "completed" | "in_review";
  createdAt: string;
  updatedAt: string;
};

async function Features({ id }: { id: string }) {
  const features = (await getProjectFeatures(id)) as Feature[];
  const canAddFeature = await hasPermission("add feature", id);
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-foreground/10 bg-card/30 p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <H3Gradiant>Project Features</H3Gradiant>
              <p className="text-sm text-foreground/70">
                Manage and track the key features of this project
              </p>
            </div>
          </div>
          {/*must be shown only to project manager */}
          {canAddFeature && <CreateFeatureForm projectId={id} />}
        </div>
      </div>

      <div className="rounded-lg border border-foreground/10 bg-card/30 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
            <LayoutGrid size={20} className="text-primary" />
          </div>
          <h2 className="text-lg font-semibold">
            Feature List ({features.length})
          </h2>
        </div>

        {features.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg text-foreground/60">
              No features have been added yet
            </p>
            <p className="text-sm text-foreground/50">
              Use the form above to create your first feature
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature._id} feature={feature} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;
