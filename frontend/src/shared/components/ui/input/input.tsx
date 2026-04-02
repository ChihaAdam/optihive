type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function input({ className, ...props }: Readonly<inputProps>) {
  return (
    <input
      className={`px-4 py-2 border-foreground/20 border rounded-lg focus-within:ring-1 focus:outline-none cursor-pointer 
                  transition-all duration-300 ease-in-out ${className}`}
      {...props}
    />
  );
}

export default input;
