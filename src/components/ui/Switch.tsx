const Switch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <div
      onClick={onChange}
      className={`relative inline-block w-10 h-6 cursor-pointer ${
        checked ? "bg-[#12B28C]" : "bg-gray-400"
      } rounded-full transition-colors duration-300 ease-in-out`}
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
};

export default Switch;
