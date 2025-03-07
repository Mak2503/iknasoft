import PriceRange from "./PriceRange";
import Dropdown from "./ui/Dropdown";

const Price = () => {
  return (
    <Dropdown title="Price" className="w-2/8 lg:block hidden">
      <p className="font-bold text-center text-[#74788D]">750,000</p>
      <PriceRange />
      <div>
        <input
          type="text"
          placeholder="Enter Amount in AED"
          className="focus:ring-0 outline-none px-5 py-2.5 w-full text-center text-xs bg-white border border-[#FF916E] rounded-md"
        />
      </div>
    </Dropdown>
  );
};

export default Price;
