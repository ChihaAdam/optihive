"use client";
import Input from "@/shared/components/ui/input/input";
import Button from "@/shared/components/ui/button/button";
import useForm from "@/shared/hooks/useForm";
import { updateUsernameAction } from "./actions";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
} from "@/../../constants.mjs";
import { Pen } from "lucide-react";
function UpdateUsernameForm() {
  const { formAction, isPending } = useForm({
    action: updateUsernameAction,
    successMessage: "Username updated successfully",
    errorMessage: "Failed to update username",
  });
  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 w-1/2 max-xl:w-full"
    >
      <label htmlFor="username" className="text-foreground/80 text-md">
        Username:
      </label>
      <div className="flex gap-2 max-lg:flex-col">
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          className="flex-2/3"
          min={USERNAME_MIN_LENGTH}
          max={USERNAME_MAX_LENGTH}
          required
        />
        <Button
          size="md"
          variant="primary"
          disabled={isPending}
          type="submit"
          className="flex-1/3 flex justify-center items-center gap-2"
        >
          <Pen size={20} />
          {isPending ? "Updating..." : "Update username"}
        </Button>
      </div>
    </form>
  );
}

export default UpdateUsernameForm;
