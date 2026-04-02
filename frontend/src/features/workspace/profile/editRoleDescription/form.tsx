"use client";
import { Dialog } from "@radix-ui/themes";
import Button from "@/shared/components/ui/button/button";
import Textarea from "@/shared/components/ui/textarea/textarea";
import useForm from "@/shared/hooks/useForm";
import changeRoleDescriptionAction from "./changeRoleDescriptionAction";
import { Save } from "lucide-react";
function Form() {
  const { formAction, isPending } = useForm({
    action: changeRoleDescriptionAction,
    successMessage: "Role description changed successfully",
    errorMessage: "Failed to change role description",
  });
  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <Dialog.Title>
        <label htmlFor="roleDescription">Edit Role Description</label>
      </Dialog.Title>
      <Textarea
        placeholder="Enter your role description"
        className="w-full"
        id="roleDescription"
        name="roleDescription"
        rows={5}
      />
      <div className="flex gap-2 justify-end mt-5">
        <Dialog.Close>
          <Button size="lg" variant="secondary">
            Close
          </Button>
        </Dialog.Close>

        <Button
          size="lg"
          variant="primary"
          type="submit"
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
