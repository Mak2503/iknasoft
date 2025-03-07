import Navlist from "./Navlist";
import NavLogo from "./NavLogo";

const Navbar = () => {
  return (
    <div className="hidden lg:flex justify-between items-center px-14 py-8 shadow-xs bg-white">
      <NavLogo />
      <Navlist />
      <button className="px-5 py-3 font-semibold bg-[#FEF8E7] rounded-4xl cursor-pointer">
        Sell Property
      </button>
    </div>
  );
};

export default Navbar;
