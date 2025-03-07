import MinIcon from "../assets/min.svg";
import MaxIcon from "../assets/max.svg";

const RangeSlider = () => {
  return (
    <div className="flex items-center">
      {/* Custom Left Icon */}
      <div className="z-10 text-[13px] font-normal">
        <img src={MinIcon} />
        Min
      </div>

      {/* Slider Container */}
      <div className="relative w-full">
        <div className="absolute bottom-3 h-1 bg-[#F4CECE] rounded-full left-[-6px] right-[-6px]" />
      </div>

      {/* Custom Right Icon */}
      <div className="z-10 text-[13px] font-normal">
        <img src={MaxIcon} />
        Max
      </div>
    </div>
  );
};

export default RangeSlider;
