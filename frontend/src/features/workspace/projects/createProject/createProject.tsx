import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import Form from "./form";
import Tips from "./tips";
function CreateProject() {
  return (
    <>
      <div className="flex flex-col gap-2 mb-5">
        <H3Gradiant className="m-0">Create Project</H3Gradiant>
        <h4 className="text-foreground/50 font-medium m-0">
          Initialize a new cell in the hive and begin your luminous journey
        </h4>
      </div>
      <div className="flex gap-5 p-4 max-lg:flex-col">
        <Form />
        <Tips />
      </div>
    </>
  );
}

export default CreateProject;
