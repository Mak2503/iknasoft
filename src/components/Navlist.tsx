import { navItems } from "../utils/constants";

const Navlist = () => {
  return (
    <div>
      <ul className="flex lg:flex-row flex-col justify-between items-center gap-7">
        <li className="hidden lg:block">Buy</li>
        <li className="text-[#FF916E] hidden lg:block">Rent</li>
        <div className="hidden lg:block h-8 w-1 rounded-full bg-[#F0F0F0]"></div>
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-[#FF916E]">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navlist;
