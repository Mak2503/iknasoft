export const LeftArrowIcon = () => {
  return (
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.06 8.2002L5 7.2602L1.94667 4.2002L5 1.14019L4.06 0.200195L0.0599996 4.2002L4.06 8.2002Z"
        fill="black"
      />
    </svg>
  );
};

export const RightArrowIcon = () => {
  return (
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.94 0.200195L0 1.1402L3.05333 4.2002L0 7.2602L0.94 8.2002L4.94 4.2002L0.94 0.200195Z"
        fill="black"
      />
    </svg>
  );
};

export const DoubleLeftArrowIcon = () => {
  return (
    <div className="flex">
      <LeftArrowIcon />
      <LeftArrowIcon />
    </div>
  );
};

export const DoubleRightArrowIcon = () => {
  return (
    <div className="flex">
      <RightArrowIcon />
      <RightArrowIcon />
    </div>
  );
};
