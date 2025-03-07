import { useState } from "react";
import { FilterIcon } from "./icons/filter";
import Sidebar from "./ui/Sidebar";
import Button from "./ui/Button";
import ListingFilter from "./Listing/ListingFilter";

const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden block">
      <Button className="bg-[#018BCF] py-5 rounded-[10px]" onClick={() => setIsOpen(true)}>
        <FilterIcon color="white" />
      </Button>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
        <h3 className="text-base font-bold">Filter</h3>
        <ListingFilter />
      </Sidebar>
    </div>
  );
};

export default MobileFilter;
