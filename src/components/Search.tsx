import SwitchTab from "./SwitchTab";
import SearchBar from "./SearchBar";
import Price from "./Price";
import MobileNav from "./MobileNavbar";
import MobileFilter from "./MobileFilter";
import Button from "./ui/Button";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <SwitchTab />
      {/* For Mobile Navigation */}
      <MobileNav />
      <SearchBar />
      {/* For Mobile Filter */}
      <MobileFilter />
      <Price />
      <Button className="lg:block hidden w-1/6 py-4 bg-[#FF916E] rounded-lg font-semibold text-white">
        Find
      </Button>
    </div>
  );
};

export default Search;
