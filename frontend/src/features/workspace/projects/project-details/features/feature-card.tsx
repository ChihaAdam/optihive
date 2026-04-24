import clsx from "clsx";
import { format } from "date-fns";
type Status = "active" | "completed" | "in_review";

type FeatureCardProps = {
  feature: {
    _id: string;
    featureName: string;
    featureDescription: string;
    featureStatus: Status;
    createdAt: string;
    updatedAt: string;
  };
};

const statusStyles: Record<Status, string> = {
  active: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  completed: "bg-green-500/20 text-green-400 border-green-500/50",
  in_review: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
};

function FeatureCard({ feature }: Readonly<FeatureCardProps>) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-foreground/10 bg-background/50 p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-foreground/20">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-tight">
          {feature.featureName}
        </h3>
        <span
          className={clsx(
            "shrink-0 rounded-full border px-3 py-1 text-xs font-medium capitalize",
            statusStyles[feature.featureStatus],
          )}
        >
          {feature.featureStatus.replace("_", " ")}
        </span>
      </div>

      {feature.featureDescription && (
        <p className="text-sm leading-relaxed text-foreground/70">
          {feature.featureDescription}
        </p>
      )}

      <div className="mt-1 flex items-center justify-between border-t border-foreground/10 pt-3 text-xs text-foreground/50">
        <span>Created: {format(new Date(feature.createdAt), "PPP")}</span>
        <span>Updated: {format(new Date(feature.updatedAt), "PPP")}</span>
      </div>
    </div>
  );
}

export default FeatureCard;
