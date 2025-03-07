import TickIcon from "../../assets/tick.svg";
import VaseImage from "../../assets/banner/vase.svg"
import WindowImage from "../../assets/banner/window.svg"
import ChandlierImage from "../../assets/banner/chandlier.svg"
import TableImage from "../../assets/banner/table.svg"
import Button from "../ui/Button";

const ApartmentBanner = () => {
  return (
    <div className="rounded-2xl text-white bg-linear-to-r from-[#7D92A9] via-[#7A8EA5] to-[#6D7F92] flex items-center">
      <div className="lg:w-3/5 w-full flex flex-col gap-6 lg:p-10 p-6">
        <div>
          <h3 className="text-2xl font-extrabold">Luxury Apartments</h3>
          <div className="mt-2">
            Situated in prestigious and desirable locations, offering
            breathtaking views, proximity to upscale neighborhoods, and
            convenient access to amenities such as shopping, dining, and
            cultural attractions
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <img src={TickIcon} />
            Designer Finishes
          </div>
          <div className="flex gap-2 items-center">
            <img src={TickIcon} />
            Spacious Layouts
          </div>
        </div>
        <Button className="bg-white text-[#74788D] lg:w-max w-full">
          Explore Apartments
        </Button>
      </div>
      {/* Banner Image Collection */}
      <div className="w-2/5 lg:flex gap-8 hidden pr-10">
        <div>
          <div className="flex justify-end">
            <img src={ChandlierImage} />
          </div>
          <div>
            <img src={TableImage} />
          </div>
        </div>
        <div className="mt-8">
          <img src={WindowImage} />
        </div>
        <div className="flex items-end">
          <img src={VaseImage} />
        </div>
      </div>
    </div>
  );
};

export default ApartmentBanner;
