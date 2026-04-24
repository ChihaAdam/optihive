import React from "react";
type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
  className?: string;
  asChild?: boolean;
  children:
    | React.ReactNode
    | ((props: { className: string }) => React.ReactNode);
};

const sizeClass = {
  sm: "text-sm px-2 py-1",
  md: "text-md px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const variantClass = {
  primary: "bg-primary text-[#171717] hover:bg-primary-hover",
  secondary: "bg-background text-foreground hover:bg-foreground/10",
};

function button({
  size = "md",
  variant = "primary",
  children,
  className = "",
  asChild = false,
  ...props
}: Readonly<buttonProps>) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<Record<string, unknown>>;
    const Comp = child.type as React.ElementType;

    return (
      <Comp
        {...child.props}
        className={`${sizeClass[size]} ${variantClass[variant]} ${className} rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed `}
      />
    );
  }
  return (
    <button
      className={`${sizeClass[size]} ${variantClass[variant]} ${className} rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
}

export default button;
