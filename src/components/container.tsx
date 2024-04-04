import { twMerge } from "tailwind-merge";

type ContainerPropsType = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerPropsType) => {
  return (
    <div className={twMerge("mx-auto max-w-[980px] px-6", className)}>
      {children}
    </div>
  );
};
