import { Dialog } from "@radix-ui/themes";
import Button from "@/shared/components/ui/button/button";
import { Pen } from "lucide-react";
import Form from "./form";
function EditRoleNameDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          size="lg"
          variant="primary"
          className="flex items-center gap-2 font-bold justify-center"
        >
          <Pen size={20} />
          Edit Role Name
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Form />
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default EditRoleNameDialog;
