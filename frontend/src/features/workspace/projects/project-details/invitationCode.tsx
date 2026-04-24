"use client";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";
function InvitationCode({ code }: { code: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Invitation code copied to clipboard");
  };
  return (
    <div className="font-bold bg-foreground/10 border border-foreground/20 px-4 py-2 rounded-lg flex items-center gap-5 w-fit">
      <span>{code}</span>
      <button
        onClick={copyToClipboard}
        className="cursor-pointer flex items-center gap-2 rounded-lg hover:bg-foreground/20 transition-colors duration-300 ease-in-out p-3"
      >
        <Copy size={20} />
      </button>
    </div>
  );
}

export default InvitationCode;
