import React, { useState } from "react";
import DownArrowIcon from "../../assets/down-arrow.svg";
import clsx from "clsx";

const Dropdown: React.FC<{ title: string; children: React.ReactNode, className?: string }> = ({
  title,
  children,
  className
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={clsx(className, "relative")}>
      <div
        className={`flex justify-between items-center px-5 py-4 border rounded-lg ${
          dropdown ? "border-[#FF916E]" : "border-[#CCCCCC]"
        } `}
        onClick={() => setDropdown(!dropdown)}
      >
        {title}
        <img src={DownArrowIcon} />
      </div>
      <div
        className={`absolute w-full text-[14px] bg-[#FFF7F5] rounded-b-lg p-5 flex flex-col gap-x-2 gap-y-4 overflow-auto z-10 transition-all duration-300 ease-in-out transform ${
          dropdown
            ? "opacity-100 max-h-96 translate-y-0"
            : "opacity-0 max-h-0 translate-y-[-20px]"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown