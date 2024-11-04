import { cn } from "@/lib/utils";

type RadioIconProps = {
  className?: string;
} & React.SVGProps<SVGAElement>;

export const Radius = ({ className }: RadioIconProps) => {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.5"
        y="0.5"
        width={29}
        height={29}
        rx="14.5"
        fill="white"
        stroke="black"
      />
      <circle cx={15} cy={15} r={8} />
    </svg>
  );
};
