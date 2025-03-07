import MapViewSwitch from "./MapViewSwitch";
import Dropdown from "./ui/Dropdown";

const ListingHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-[#45525E] text-xl font-bold">
          Properties for rent in United Arab Emirates
        </h3>
        <span className="font-normal">10 listings</span>
      </div>
      <div className="hidden lg:flex gap-2 lg:w-1/3">
        <MapViewSwitch />
        <Dropdown title="Newest First" className="w-full">
          <div>Newest First</div>
        </Dropdown>
      </div>
    </div>
  );
};

export default ListingHeader;
