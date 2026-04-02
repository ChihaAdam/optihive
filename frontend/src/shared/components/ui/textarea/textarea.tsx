import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={`${className} w-full px-3 py-2 resize-none border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:border-transparent`}
      {...props}
    />
  );
}

export default Textarea;
