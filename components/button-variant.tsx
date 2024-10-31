import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-2xl px-9 py-5 ", {
  variants: {
    variant: {
      dark: "bg-dark text-white",
      transparent: "border-dark border bg-transparent text-black",
      green: 'bg-green text-black',
      yellow: 'bg-yellow text-black'
    },
    defaultVariants: {
      variants: "transparent",
    },
  },
});

export interface ButtonVariantProps
  extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const ButtonVariant = ({
  children,
  className,
  variant,
  ...props
}: ButtonVariantProps) => {
return  <button {...props} className={cn(buttonVariants({ variant, className }))}>
    {children}
  </button>;
};
