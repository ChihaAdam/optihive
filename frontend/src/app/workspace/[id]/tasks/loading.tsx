import Spinner from "@/shared/components/ui/spinner/spinner";

function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export default Loading;
