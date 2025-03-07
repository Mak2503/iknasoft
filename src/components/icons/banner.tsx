export const DirectionIcon = ({ color = "#FF916E" }: { color?: string }) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9026 10.46L12.5401 1.0975C11.966 0.523328 11.0343 0.523328 10.4593 1.0975L1.09762 10.46C0.52345 11.0342 0.52345 11.9658 1.09762 12.5408L10.4601 21.9033C11.0343 22.4775 11.966 22.4775 12.541 21.9033L21.9035 12.5408C22.4768 11.9658 22.4768 11.0342 21.9026 10.46ZM14.2734 12.6067V10.6667H11.5001C10.581 10.6667 9.83345 11.4142 9.83345 12.3333V15.6667C9.83345 16.1267 9.46012 16.5 9.00012 16.5C8.54012 16.5 8.16678 16.1267 8.16678 15.6667V12.3333C8.16678 10.495 9.66178 9 11.5001 9H14.2734V7.06L17.0476 9.83333L14.2734 12.6067Z"
        fill={color}
      />
    </svg>
  );
};

export const RightUpArrowIcon = () => {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.733695 9.2002L7.95652 1.97737L7.95652 8.02628L9 8.02628L9 0.200194L1.17391 0.200195L1.17391 1.24367L7.22283 1.24367L-1.01782e-06 8.4665L0.733695 9.2002Z"
        fill="#FF916E"
      />
    </svg>
  );
};

export const CompassIcon = () => {
  return (
    <svg
      width="73"
      height="74"
      viewBox="0 0 73 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_723)">
        <path
          d="M36.5 0.200195C18.5503 0.200195 4 14.7504 4 32.7002C4 50.6499 18.5503 65.2002 36.5 65.2002C54.4497 65.2002 69 50.6499 69 32.7002C69 14.7504 54.4497 0.200195 36.5 0.200195ZM56 13.2002L43.6157 39.8159L17 52.2002L29.3843 25.5845L56 13.2002ZM36.5 29.1265C34.5175 29.1265 32.9263 30.7177 32.9263 32.7002C32.9263 34.6827 34.5175 36.2739 36.5 36.2739C38.4825 36.2739 40.0737 34.6827 40.0737 32.7002C40.0737 30.7177 38.4825 29.1265 36.5 29.1265Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_723"
          x="0"
          y="0.200195"
          width="73"
          height="73"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.94902 0 0 0 0 0.494118 0 0 0 0 0.34902 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_723"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_723"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
