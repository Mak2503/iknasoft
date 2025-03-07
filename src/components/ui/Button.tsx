import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  className,
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void
}) => {
  return (
    <button className={clsx("px-5 py-3 rounded-lg font-semibold cursor-pointer", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
