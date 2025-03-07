import { DirectionIcon, RightUpArrowIcon } from "./icons/banner";

const StillNotFound = () => {
  const flatsLocations = [
    "Whitefield",
    "Marathahalli",
    "Sarjapur Road",
    "Hebbal",
    "Koramangala",
    "Kanakapura",
    "Dubai",
    "Bellandur",
  ];
  return (
    <div className="lg:w-9/12 w-full p-8 rounded-2xl border border-[#CBCEDE] flex flex-col gap-10">
      <div>
        <h3 className="text-xl font-bold">Still not found ?</h3>
        <p className="font-normal text-[#74788D]">
          Tell us what are you looking for
        </p>
      </div>
      <div className="flex items-center gap-4 font-normal whitespace-nowrap">
        <p>Popular Searches</p>
        <div className="w-full h-0.5 bg-[#CBCEDE]"></div>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-12">
        <div className="lg:w-1/3 w-full flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#FFF2ED] rounded-lg p-4">
              <DirectionIcon />
            </div>
            <div className="text-[14px]">
              <h4 className="font-bold">Dubai Marina</h4>
              <a className="text-[#FF916E] mt-2 font-normal flex items-center gap-2 cursor-pointer">
                View all Listing
                <RightUpArrowIcon />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#FFF2ED] rounded-lg p-4">
              <DirectionIcon />
            </div>
            <div className="text-[14px]">
              <h4 className="font-bold">Dubai Marina</h4>
              <a className="text-[#FF916E] mt-2 font-normal flex items-center gap-2 cursor-pointer">
                View all Listing
                <RightUpArrowIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <ul className="grid lg:grid-cols-2 grid-cols-1 pl-8 lg:pl-0 gap-4">
            {flatsLocations.map((item, index) => (
              <li
                key={index}
                className="text-[#74788D] hover:text-[#FF916E] cursor-pointer list-disc"
              >
                Flats for Rent in {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StillNotFound;
