type BurgerMenuIconProps = {
  className?: string;
} & React.SVGProps<SVGAElement>;

export const BurgerMenu = ({ className }: BurgerMenuIconProps) => {
  return (
    <svg
      width={26}
      height={19}
      viewBox="0 0 26 19"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.80664H25"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M1 9.80664H25"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M1 17.8066H25"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};
