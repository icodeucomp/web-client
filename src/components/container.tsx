import { ContainerProps } from "@/types";

const Container = ({ className, children }: ContainerProps) => {
  return <div className={`relative max-w-container w-full mx-auto px-4 sm:px-8 ${className ?? ""}`}>{children}</div>;
};

export default Container;
