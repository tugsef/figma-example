type IllustrationIconProps = {
  className?: string;
} & React.SVGProps<SVGAElement>;
export const Illustration = ({ className }: IllustrationIconProps) => {
  return (
    <svg
className={className}      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_341_618"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={42}
        y={0}
        width={326}
        height={649}
      >
        <path
          d="M367 162.061L346.572 0.5V163.337L306.036 5.60362L326.623 167.165L266.617 15.6514L307.153 173.545L228.634 30.6432L288.8 182.157L192.885 50.2603L271.564 193.162L159.849 74.343L255.764 206.08L130.165 102.253L241.88 220.913L104.152 133.673L229.91 237.499L82.2875 168.122L220.016 255.362L64.892 204.964L212.515 274.341L52.2842 243.719L207.408 294.118L44.6238 283.751L204.854 314.213L42.0703 324.42L204.854 334.628L44.6238 365.09L207.408 354.883L52.2842 405.121L212.515 374.659L64.892 444.036L220.016 393.638L82.2875 480.878L229.91 411.501L104.152 515.328L241.88 427.928L130.165 546.747L255.764 442.76L159.849 574.657L271.564 455.838L192.885 598.58L288.8 466.684L228.634 618.197L307.153 475.455L266.617 633.189L326.623 481.676L306.036 643.396L346.572 485.503L346.572 648.5L367 486.779"
          stroke="black"
          strokeMiterlimit={10}
        />
      </mask>
      <g mask="url(#mask0_341_618)">
        <rect
          x="-785.361"
          y="-37.6172"
          width="1152.83"
          height="702.852"
          rx={45}
          fill="black"
        />
      </g>
      <path
        d="M96.0741 470.596L141.781 495.5L96.0741 520.604L71.0703 566.21L46.0665 520.604L0.359637 495.5L46.0665 470.596L71.0703 424.789L96.0741 470.596Z"
        fill="#B9FF66"
      />
      <path
        d="M217.461 244.065L299.137 288.566L217.461 333.425L172.781 414.922L128.101 333.425L46.4259 288.566L128.101 244.065L172.781 162.211L217.461 244.065Z"
        fill="#191A23"
      />
    </svg>
  );
};