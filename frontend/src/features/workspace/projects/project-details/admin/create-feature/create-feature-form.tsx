"use client";

import useForm from "@/shared/hooks/useForm";
import { createFeatureAction } from "./createFeatureAction";
import Input from "@/shared/components/ui/input/input";
import Textarea from "@/shared/components/ui/textarea/textarea";
import Button from "@/shared/components/ui/button/button";

function CreateFeatureForm({ projectId }: { projectId: string }) {
  const { formAction, isPending } = useForm({
    action: createFeatureAction,
    successMessage: "Feature created successfully",
    errorMessage: "Failed to create feature",
  });
  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-lg border border-foreground/10 bg-card/50 p-5"
    >
      <input type="hidden" name="projectId" value={projectId} />
      <h3 className="text-lg font-semibold">Create New Feature</h3>

      <div className="flex flex-col gap-3">
        <label htmlFor="featureName" className="flex flex-col gap-1">
          <span className="text-sm font-medium">Feature Name *</span>
          <Input
            id="featureName"
            type="text"
            name="featureName"
            placeholder="Enter feature name"
            required
          />
        </label>

        <label htmlFor="featureDescription" className="flex flex-col gap-1">
          <span className="text-sm font-medium">Description</span>
          <Textarea
            id="featureDescription"
            name="featureDescription"
            placeholder="Describe the feature (optional)"
            rows={3}
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" size="md" variant="primary" disabled={isPending}>
          {isPending ? "Creating..." : "Create Feature"}
        </Button>
        <button
          type="button"
          className="rounded-lg border border-foreground/20 px-4 py-2 font-medium text-foreground/60 transition-colors hover:text-foreground"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateFeatureForm;
