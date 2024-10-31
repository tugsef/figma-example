type DecreaseProps = {
  className?: string;
} & React.SVGProps<SVGAElement>;

export const Decrease = ({ className }: DecreaseProps) => {
  return (
    <svg
      width={58}
      height={58}
      viewBox="0 0 58 58"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={29} cy={29} r="28.5"  stroke="#191A23" />
      <path d="M20 31.64V26H37.76V31.64H20Z" fill="black" />
    </svg>
  );
};
