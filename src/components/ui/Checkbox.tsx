import React, { InputHTMLAttributes, useState } from "react";

interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
        {...props} // Accept other props here
      />
      <span
        className={`w-6 h-6 flex items-center justify-center border rounded-md p-1 transition-colors duration-100 
        ${
          isChecked
            ? "bg-[#12B28C] border-[#12B28C]"
            : "bg-white border-gray-300"
        }`}
      >
        {isChecked && (
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6666 1.29163L4.24992 7.70829L1.33325 4.79163"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
