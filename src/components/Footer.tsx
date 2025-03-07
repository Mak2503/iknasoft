import {
  ChevronDownIcon,
  DiscordIcon,
  HomeAddressIcon,
  HomeLandlineIcon,
  InstagramIcon,
  TwitterIcon,
} from "./icons/footer";
import { WhatsappIcon } from "./icons/listing";
import Button from "./ui/Button";

const Footer = () => {
  const services = [
    "Rent Services",
    "Buy/Sell Property",
    "Home Services",
    "Property Lawyers",
    "Design & Decor",
    "Property Services",
    "Agents",
  ];

  const locations = [
    "Dubai",
    "Bahrain",
    "USA",
    "UAE",
    "UK",
    "Saudi",
    "Qatar",
    "India",
    "Oman",
  ];

  return (
    <div className="bg-[#F8F8F8] space-y-8 mt-10">
      <div className="flex lg:flex-row flex-col gap-12 py-10 lg:px-20 px-10">
        <div className="lg:w-2/12 space-y-6">
          <h4 className="text-lg font-bold">Connect With Us</h4>
          <div className="flex items-center gap-7">
            <InstagramIcon />
            <TwitterIcon />
            <DiscordIcon />
          </div>
        </div>
        <div className="lg:w-3/12 space-y-6">
          <h4 className="text-lg font-bold">Get in Touch</h4>
          <div className="flex flex-col gap-4 text-base font-normal">
            <div className="flex gap-4">
              <HomeAddressIcon />
              <p>
                DAMAC Smart Heights - Office No.
                <br />
                1501 - Barsha Heights - Dubai, UAE
                <br />
                (Head Office)
              </p>
            </div>
            <div className="flex gap-4">
              <HomeLandlineIcon />
              <p>+971 52 975 8969</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/12 space-y-6">
          <h4 className="text-lg font-bold">Services</h4>
          <div className="space-y-3">
            {services.map((service) => (
              <p key={service}>
                <a href="" className="text-base font-normal hover:text-[#FF916E]">{service}</a>
              </p>
            ))}
          </div>
        </div>
        <div className="lg:w-4/12 space-y-6">
          <div className="flex items-center gap-4">
            <WhatsappIcon color="#12B28C" />
            <h4 className="text-lg font-bold">Chat with us</h4>
          </div>
          <div className="space-y-4 font-normal">
            <p>
              We provide the most accurate information about the homes that you
              are looking for
            </p>
            <Button className="bg-[#38CA89] text-white px-10 py-4">
              Chat now
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-b border-[#D9D9D9] py-7 text-center">
        <div className="space-x-8 font-normal text-base">
          <a href="#" className="hover:text-[#FF916E]">
            About
          </a>
          <a href="#" className="hover:text-[#FF916E]">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-[#FF916E]">
            Privacy policy
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#EFEFEF] rounded-3xl flex items-center w-max">
          <p className="pl-5 pr-3 py-3 uppercase text-[13px] font-bold">choose</p>
          <div className="p-5 bg-[#DFDFDF] rounded-full">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 pb-10 flex-wrap">
        {locations.map((location) => (
          <p className="font-semibold uppercase" key={location}>{location}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
