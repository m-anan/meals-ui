import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col items-center p-2 ${className}`} {...props}>
      <div className="max-w-6xl w-full">{children}</div>
    </div>
  );
};
export default Container;
