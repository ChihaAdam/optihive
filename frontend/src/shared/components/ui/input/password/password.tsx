"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "../input";

type passwordProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function Password({ className, ...props }: Readonly<passwordProps>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={`peer w-full outline-none focus:outline-none bg-transparent ${className} `}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-4 top-1/2 -translate-y-1/2 peer-autofill:text-black"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default Password;
