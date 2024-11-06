import { cn } from "@/lib/utils";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export const IconButton = ({ children, className, ...props }: IconButtonProps) => {
  return (
    <button {...props} className={cn(className)}>
      {children}
    </button>
  );
};
