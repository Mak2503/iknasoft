import clsx from "clsx";
import ListingImage from "../assets/listing.png";
import {
  AreaExpandIcon,
  CheckCircleIcon,
  EmailIcon,
  HeadphoneIcon,
  LocationIcon,
  TelephoneIcon,
  WhatsappIcon,
  BedroomIcon,
  WardrobeIcon,
  CarIcon,
  TimerIcon,
  CheckCircleFillIcon,
  CarouselIcon,
} from "./icons/listing";
import Button from "./ui/Button";
import { LeftArrowIcon, RightArrowIcon } from "./icons/pagination";

const SocialActionButtons = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div
      className={clsx(
        isMobile ? "flex lg:hidden" : "lg:flex hidden",
        "items-center gap-2"
      )}
    >
      <Button className="w-full bg-[#12B28C] hover:bg-[#119878] focus:bg-[#17A9ED] text-white uppercase flex justify-center items-center gap-2 text-xs">
        <WhatsappIcon />
        what's app
      </Button>
      <Button className="w-max bg-white border-2 border-white hover:border-[#FF916E] hover:text-[#FF916E] text-[#74788D] uppercase flex items-center gap-2 text-xs">
        <TelephoneIcon />
      </Button>
      <Button className="w-max bg-white border-2 border-white hover:border-[#FF916E] hover:text-[#FF916E] text-[#74788D] uppercase flex items-center gap-2 text-xs">
        <EmailIcon />
      </Button>
    </div>
  );
};

const ListingCard = () => {
  return (
    <div className="bg-[#F1F1F399] rounded-2xl flex lg:flex-row flex-col">
      <div className="lg:w-2/5 w-full relative">
        <img src={ListingImage} className="h-full w-full" />
        <div className="absolute top-0 left-0 z-10 text-white text-xs font-normal flex items-center gap-0.5 lg:p-4 p-5 w-full">
          <div className="w-5/12 p-3.5 rounded-l-lg bg-[#00000070] flex items-center gap-2">
            <TimerIcon />
            Listed 5 Days ago
          </div>
          <div className="w-5/12 p-3.5 bg-[#FF916E] flex items-center gap-2">
            <CheckCircleFillIcon />
            Verified by Athirad
          </div>
          <div className="w-2/12 p-3.5 rounded-r-lg bg-[#FFD86E] flex justify-center">
            <HeadphoneIcon color="#474747" />
          </div>
        </div>
        <div className="absolute left-5 top-1/2">
          <div className="bg-[#00000061] py-4 px-5 rounded-lg">
            <LeftArrowIcon color="white" aria-hidden="true" />
          </div>
        </div>
        <div className="absolute right-5 top-1/2">
          <div className="bg-[#00000061] py-4 px-5 rounded-lg">
            <RightArrowIcon color="white" aria-hidden="true" />
          </div>
        </div>
        <div className="absolute bottom-6 w-full flex justify-center">
          <CarouselIcon />
        </div>
      </div>
      <div className="lg:w-3/5 p-3 w-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="uppercase text-[14px] font-semibold pt-2">
              villa 370 mira oasis 1
            </h3>
            <div className="text-3xl text-[#FF916E] font-semibold uppercase">
              2,50,190 <span className="text-base">aed yearly</span>
            </div>
          </div>
          <SocialActionButtons />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-2 items-center">
            <LocationIcon />
            <span className="text-[#192E40] font-normal">
              03B, Sharjah, Dubai, UAE
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#192E40] font-normal">
            For Rent
            <div className="h-5 w-1 rounded-full bg-[#74788D38]"></div>
            Furnished
            <div className="h-5 w-1 rounded-full bg-[#74788D38]"></div>
            Security Cameras
            <div className="h-5 w-1 rounded-full bg-[#74788D38]"></div>
            Gas Pipeline
          </div>
          <hr className="border-[#CBCBCB]" />
          <div className="flex lg:flex-row flex-col items-start justify-between">
            <div className="flex flex-col lg:gap-2 gap-1">
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                Ready to move
              </div>
              <div className="flex items-center gap-2">
                <HeadphoneIcon />
                Premium Customer Support
              </div>
            </div>
            <div className="lg:flex hidden gap-2 items-center text-[#12B2AF] font-semibold">
              <div className="p-0.5 bg-[#12B2AF] rounded-lg">
                <AreaExpandIcon />
              </div>
              1500.00 square ft
            </div>
          </div>
          <div className="flex gap-2 items-center overflow-hidden">
            <div className="whitespace-nowrap bg-white px-4 py-3 rounded-lg flex items-center gap-3 text-[14px] font-normal">
              <BedroomIcon />1 Bedroom
            </div>
            <div className="whitespace-nowrap bg-white px-4 py-3 rounded-lg flex items-center gap-3 text-[14px] font-normal">
              <WardrobeIcon />1 Bathroom
            </div>
            <div className="whitespace-nowrap bg-white px-4 py-3 rounded-lg flex items-center gap-3 text-[14px] font-normal">
              <CarIcon />
              Parking Available
            </div>
            <div className="bg-white px-4 py-3.5 rounded-lg flex justify-center items-center">
              <LeftArrowIcon />
            </div>
          </div>
          {/* Mobile Only */}
          <div className="flex lg:hidden gap-2 items-center text-[#12B2AF] font-semibold">
            <div className="p-0.5 bg-[#12B2AF] rounded-lg">
              <AreaExpandIcon />
            </div>
            1500.00 square ft
          </div>
          {/* Mobile Only */}
          {/* <div className="flex lg:hidden items-center gap-2">
            <Button className="w-full bg-[#12B28C] hover:bg-[#119878] focus:bg-[#17A9ED] text-white uppercase flex justify-center items-center gap-2 text-xs">
              <WhatsappIcon />
              what's app
            </Button>
            <div className="w-max flex items-center gap-2">
            <Button className="bg-white hover:border hover:border-[#FF916E] hover:text-[#FF916E] text-[#74788D] uppercase flex items-center gap-2 text-xs">
              <TelephoneIcon />
            </Button>
            <Button className="bg-white border-2 border-white hover:border-[#FF916E] hover:text-[#FF916E] text-[#74788D] uppercase flex items-center gap-2 text-xs">
              <EmailIcon />
            </Button>
            </div>
          </div> */}
          <SocialActionButtons isMobile />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
