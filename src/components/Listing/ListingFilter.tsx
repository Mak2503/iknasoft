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
import RadioButton from "../ui/Radio";

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
  const [completionStatus, setCompletionStatus] = useState("");

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
        <RadioButton
          name={filterNames[0]}
          value="Ready"
          checked={completionStatus === "Ready"}
          onChange={() => setCompletionStatus("Ready")}
        />
        <RadioButton
          name={filterNames[0]}
          value="Off-Plan"
          checked={completionStatus === "Off-Plan"}
          onChange={() => setCompletionStatus("Off-Plan")}
        />
      </Accordion>
      <Accordion
        title="Property Type"
        open={dropdownList.includes(filterNames[1])}
        onClose={() => handleClick(filterNames[1])}
      >
        <div className="flex flex-col gap-4 font-normal">
          {propertyTypes.map((type) => (
            <Checkbox label={type} key={type} />
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
            <Checkbox label={status} key={status} />
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
            <Checkbox label={amenity} key={amenity} />
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
            <Checkbox label={bhk} key={bhk} />
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
            <Checkbox label={room} key={room} />
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default ListingFilter;
