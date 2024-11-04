type IncreaseProps = {
  className?: string;
} & React.SVGProps<SVGAElement>;

export const Increase = ({ className }: IncreaseProps) => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="29" cy="29" r="28.5" stroke="#191A23" />
      <path
        d="M25.6 41.08V31.36H16V25.72H25.6V16H31.48V25.72H41.08V31.36H31.48V41.08H25.6Z"
        fill="#191A23"
      />
    </svg>
  );
};
