import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";


const buttonVariants = cva("rounded-2xl px-9 py-5 ", {
  variants: {
    variant: {
      dark: "bg-dark text-white border border-dark  shadow-xs transition-all duration-500 hover:bg-green hover:bg-transparent hover:text-black",
      transparent: "border-dark border bg-transparent text-black shadow-xs transition-all duration-500 hover:bg-green hover:border-green",
      green: 'bg-green text-black transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1  duration-300 ',
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



 return  <button   {...props} className={cn("border-opacity-0",buttonVariants({ variant, className }))}>
   {children}
 </button>;
};
