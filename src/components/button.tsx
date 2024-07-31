import { ButtonProps } from "@/types";

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={`px-4 text-xs md:text-base py-2.5 md:px-8 font-medium duration-300 shadow-lg ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
