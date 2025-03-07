import { useState } from "react";
import { FilterIcon } from "../icons/filter";
import DownArrowIcon from "../../assets/down-arrow.svg";
import Switch from "../ui/Switch";
import clsx from "clsx";
import {
  amenities,
  bathrooms,
  bhkFacilities,
  filterNames,
  furnishedStatus,
  propertyTypes,
} from "../../utils/filter";
import Checkbox from "../ui/Checkbox";

const Accordion = ({
  title,
  open,
  onClose,
  children,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClose}
      >
        <h3 className="text-base font-bold">{title}</h3>
        <img src={DownArrowIcon} className={clsx(open && "rotate-180")} />
      </div>
      <hr className="border-[#CBCBCB]" />
      {open && (
        <div className="flex flex-col gap-3 mt-1 text-[14px] font-normal">
          {children}
        </div>
      )}
    </div>
  );
};

const ListingFilter = () => {
  const [markSeen, setMarkSeen] = useState(false);
  const [photoProp, setPhotoProp] = useState(false);
  const [dropdownList, setDropdownList] = useState<string[]>(filterNames);

  const handleClick = (name: string) => {
    if (dropdownList.includes(name)) {
      setDropdownList(dropdownList.filter((item) => item !== name));
    } else {
      setDropdownList([...dropdownList, name]);
    }
  };

  return (
    <div className="lg:bg-[#F1F1F399] rounded-2xl flex flex-col gap-8 lg:p-6 py-2">
      {/* Filter */}
      <div className="flex flex-col gap-4 w-full">
        <div className="lg:flex hidden items-center justify-between">
          <h3 className="text-base font-bold">Filter</h3>
          <FilterIcon />
        </div>
        <hr className="border-[#CBCBCB]" />
        <div className="flex flex-col gap-3 mt-4 text-[14px] font-normal">
          <div className="flex justify-between items-center">
            Mark already seen
            <Switch
              checked={markSeen}
              onChange={() => setMarkSeen(!markSeen)}
            />
          </div>
          <div className="flex justify-between items-center">
            Properties with photos
            <Switch
              checked={photoProp}
              onChange={() => setPhotoProp(!photoProp)}
            />
          </div>
        </div>
      </div>
      <Accordion
        title="Completion Status"
        open={dropdownList.includes(filterNames[0])}
        onClose={() => handleClick(filterNames[0])}
      >
        <div className="flex flex-col gap-4 font-normal">
          <label className="flex gap-4 items-center cursor-pointer">
            <input
              type="radio"
              id="ready"
              name={filterNames[0]}
              className="hidden peer"
            />
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[#FF916E] transition-colors duration-300 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF916E] scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
            </div>
            <span>Ready</span>
          </label>

          <label className="flex gap-4 items-center cursor-pointer">
            <input
              type="radio"
              id="offplan"
              name={filterNames[0]}
              className="hidden peer"
            />
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[#FF916E] transition-colors duration-300 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF916E] scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
            </div>
            <span>Off-Plan</span>
          </label>
        </div>
      </Accordion>
      <Accordion
        title="Property Type"
        open={dropdownList.includes(filterNames[1])}
        onClose={() => handleClick(filterNames[1])}
      >
        <div className="flex flex-col gap-4 font-normal">
          {propertyTypes.map((type) => (
            <label className="flex gap-4 items-center" key={type}>
              <Checkbox />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </Accordion>
      <Accordion
        title="Furnished Status"
        open={dropdownList.includes(filterNames[2])}
        onClose={() => handleClick(filterNames[2])}
      >
        <div className="flex flex-col gap-4 font-normal">
          {furnishedStatus.map((status) => (
            <label className="flex gap-4 items-center" key={status}>
              <Checkbox />
              <span>{status}</span>
            </label>
          ))}
        </div>
      </Accordion>
      <Accordion
        title="Amenities"
        open={dropdownList.includes(filterNames[3])}
        onClose={() => handleClick(filterNames[3])}
      >
        <div className="flex flex-col gap-4 font-normal">
          {amenities.map((amenity) => (
            <label className="flex gap-4 items-center" key={amenity}>
              <Checkbox />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </Accordion>
      <Accordion
        title="BHK Facilities"
        open={dropdownList.includes(filterNames[4])}
        onClose={() => handleClick(filterNames[4])}
      >
        <div className="flex flex-col gap-4 font-normal">
          {bhkFacilities.map((bhk) => (
            <label className="flex gap-4 items-center" key={bhk}>
              <Checkbox />
              <span>{bhk}</span>
            </label>
          ))}
        </div>
      </Accordion>
      <Accordion
        title="Bathrooms"
        open={dropdownList.includes(filterNames[5])}
        onClose={() => handleClick(filterNames[5])}
      >
        <div className="flex flex-col gap-4 font-normal">
          {bathrooms.map((room) => (
            <label className="flex gap-4 items-center" key={room}>
              <Checkbox />
              <span>{room}</span>
            </label>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default ListingFilter;
