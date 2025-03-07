import SearchIcon from "../assets/search/search.svg";
import GPSIcon from "../assets/search/gps.svg";
import CityIcon from "../assets/search/search-city.svg";
import DirectionIcon from "../assets/search/direction.svg";
import PinpointIcon from "../assets/search/pinpoint.svg";
import { useState } from "react";

const SearchBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleFocus = () => setDropdown(true);
  const handleBlur = () => setDropdown(false);

  const dropdownItems = [
    {
      icon: CityIcon,
      title: "City, Towns, Texas",
    },
    {
      icon: DirectionIcon,
      title: "Areas",
    },
    {
      icon: PinpointIcon,
      title: "Commercial, Rental",
    },
  ];

  return (
    <div className="w-full relative">
      <div
        className={`flex justify-between items-center px-5 py-4 border rounded-lg w-full ${
          dropdown ? "border-[#FF916E]" : "border-[#CCCCCC]"
        } `}
      >
        <div className="flex items-center gap-4 w-full">
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Search property"
            className="focus:ring-0 outline-none font-normal w-full"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <img src={GPSIcon} className="lg:flex hidden" />
      </div>
      <div
        className={`absolute w-full text-[14px] bg-[#FFF7F5] rounded-b-lg p-5 flex flex-col gap-x-2 gap-y-4 overflow-auto z-10 transition-all duration-300 ease-in-out transform ${
          dropdown
            ? "opacity-100 max-h-96 translate-y-0"
            : "opacity-0 max-h-0 translate-y-[-20px]"
        }`}
      >
        {dropdownItems.map((item, index) => (
          <div key={index} className="flex gap-4">
            <img src={item.icon} className="w-6 h-6" />
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
