"use client";
import { Dialog } from "@radix-ui/themes";
import Button from "@/shared/components/ui/button/button";
import Input from "@/shared/components/ui/input/input";
import useForm from "@/shared/hooks/useForm";
import { Save } from "lucide-react";
import changeRoleNameAction from "./changeRoleNameAction";
function Form() {
  const { formAction, isPending } = useForm({
    action: changeRoleNameAction,
    successMessage: "Role name changed successfully",
    errorMessage: "Failed to change role name",
  });
  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <Dialog.Title>Edit Role Name</Dialog.Title>
      <Dialog.Description>Edit your role name</Dialog.Description>
      <Input name="roleName" placeholder="Role Name" disabled={isPending} />
      <div className="flex gap-2 justify-end mt-5">
        <Dialog.Close>
          <Button size="lg" variant="secondary">
            Close
          </Button>
        </Dialog.Close>

        <Button
          size="lg"
          variant="primary"
          className="flex items-center gap-2"
          disabled={isPending}
        >
          <Save size={20} />
          Save
        </Button>
      </div>
    </form>
  );
}

export default Form;
