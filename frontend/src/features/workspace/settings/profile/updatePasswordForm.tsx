"use client";
import Input from "@/shared/components/ui/input/input";
import Button from "@/shared/components/ui/button/button";
import useForm from "@/shared/hooks/useForm";
import { Pen } from "lucide-react";
import { updatePasswordAction } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/../../constants.mjs";
function UpdatePasswordForm() {
  const { formAction, isPending } = useForm({
    action: updatePasswordAction,
    successMessage: "Password updated successfully",
    errorMessage: "Failed to update password",
  });
  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 w-1/2 max-xl:w-full"
    >
      <label htmlFor="password" className="text-foreground/80 text-md">
        Password:
      </label>
      <div className="flex gap-2 max-lg:flex-col">
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="flex-2/3"
          min={PASSWORD_MIN_LENGTH}
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
          {isPending ? "Updating..." : "Update password"}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
