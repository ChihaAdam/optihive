"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type passwordProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function Password({ className, ...props }: Readonly<passwordProps>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center border border-foreground/20 rounded-lg focus-within:ring-1  px-4 py-2">
      <input
        type={showPassword ? "text" : "password"}
        className={`w-full outline-none focus:outline-none bg-transparent${className}`}
        {...props}
      />
      <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default Password;
