import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
function AssistantMessage({ message }: { readonly message: string }) {
  return (
    <div className=" bg-foreground/70 text-background px-4 py-2 self-start rounded-lg">
      <Markdown remarkPlugins={[remarkGfm]}>{message}</Markdown>
    </div>
  );
}
export default AssistantMessage;
