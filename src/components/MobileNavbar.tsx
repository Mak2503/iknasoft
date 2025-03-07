import { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg";
import Sidebar from "./ui/Sidebar";
import Navlist from "./Navlist";
import NavLogo from "./NavLogo";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2" onClick={() => setOpen(!open)}>
        <img src={MenuIcon} />
      </div>
      {/* Sidebar Toggle */}
      <Sidebar isOpen={open} onClose={() => setOpen(false)} position="left">
        <div className="flex flex-col gap-8">
          <NavLogo />
          <Navlist />
        </div>
      </Sidebar>
    </div>
  );
};

export default MobileNav;
