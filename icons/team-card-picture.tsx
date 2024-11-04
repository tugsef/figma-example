type TeamCardLogoProps = {
  className?: string;
  imageSrc: string;
} & React.SVGProps<SVGAElement>;

export const TeamPhoto = ({ className, imageSrc }: TeamCardLogoProps) => {
  return (
    <svg
      width={106}
      height={103}
      viewBox="0 0 106 103"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M91.631 53.9117C124.473 91.3213 94.1455 121.649 56.7359 88.8068C19.3263 121.649 -11.0016 91.3213 21.8408 53.9117C-11.0016 16.5021 19.3263 -13.8258 56.7359 19.0166C94.1455 -13.8258 124.473 16.5021 91.631 53.9117Z"
        fill="#231F20"
      />
      <mask
        id="mask0_346_937"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={98}
        height={98}
      >
        <path
          d="M83.8068 48.9117C116.649 86.3213 86.3213 116.649 48.9117 83.8068C11.5021 116.649 -18.8258 86.3213 14.0166 48.9117C-18.8258 11.5021 11.5021 -18.8258 48.9117 14.0166C86.3213 -18.8258 116.649 11.5021 83.8068 48.9117Z"
          fill="#231F20"
        />
      </mask>
      <g mask="url(#mask0_346_937)">
        <rect
          x={-5}
          y={-14}
          width={107}
          height={161}
          fill="url(#pattern0_346_937)"
        />
        <rect
          x={-5}
          y={-14}
          width={107}
          height={161}
          fill="#B9FF66"
          style={{ mixBlendMode: "multiply" }}
        />
      </g>
      <defs>
        <pattern
          id="pattern0_346_937"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_346_937"
            transform="matrix(0.000376828 0 0 0.000250438 -0.00155763 0)"
          />
        </pattern>
        <image
          id="image0_346_937"
          xlinkHref={imageSrc}
          width={2731}
          height={4096}
        />
      </defs>
    </svg>
  );
};
