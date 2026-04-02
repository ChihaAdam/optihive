import Spinner from "@/shared/components/ui/spinner/spinner";
function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner size="lg" />
    </div>
  );
}

export default Loading;
