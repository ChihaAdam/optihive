"use client";
import useForm from "@/shared/hooks/useForm";
import Button from "@/shared/components/ui/button/button";
import Input from "@/shared/components/ui/input/input";
import sendMessageAction from "./sendMessageAction";
function SendMessage() {
  const { formAction, isPending } = useForm({
    action: sendMessageAction,
    successMessage: "Message sent successfully",
    errorMessage: "Failed to send message",
  });

  return (
    <form action={formAction} className="flex gap-2 w-full">
      <Input
        name="message"
        placeholder="Type your message..."
        className="flex-1"
      />
      <Button size="md" variant="primary" type="submit" disabled={isPending}>
        Send
      </Button>
    </form>
  );
}
export default SendMessage;
