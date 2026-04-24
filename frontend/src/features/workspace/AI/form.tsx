import Button from "@/shared/components/ui/button/button";
import Input from "@/shared/components/ui/input/input";
import { Plane } from "lucide-react";
interface FormProps {
  sendMessage: (x: string) => void;
  disabled: boolean;
}
function Form({ sendMessage, disabled }: Readonly<FormProps>) {
  return (
    <form
      className="flex gap-2 w-full px-4"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(e.target.message.value);
        e.target.message.value = "";
      }}
    >
      <Input
        type="text"
        name="message"
        className="border border-gray-300 rounded-md p-2 flex-1"
      />
      <Button
        variant="primary"
        size="md"
        type="submit"
        className="px-4 flex gap-2 items-center"
        disabled={disabled}
      >
        <Plane size={20} />
        <p>Send</p>
      </Button>
    </form>
  );
}

export default Form;
