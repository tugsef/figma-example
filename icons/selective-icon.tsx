import { cn } from "@/lib/utils";

type SelectiveIconProps = {
  className?: string;

} & React.SVGProps<SVGAElement>;

export const SelectiveIcon = ({ className }: SelectiveIconProps) => {
  return (
<svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
  <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" />
</svg>

  );
};