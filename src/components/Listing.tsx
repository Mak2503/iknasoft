import { useState } from "react";
import ApartmentBanner from "./Listing/ApartmentBanner";
import ListingFilter from "./Listing/ListingFilter";
import MapSupport from "./Listing/MapSupport";
import ListingCard from "./ListingCard";
import ListingHeader from "./ListingHeader";
import Pagination from "./Pagination";

const Listing = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const listingItems = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div className="mt-12 flex flex-col gap-8 px-2 text-[#707070]">
      <ListingHeader />
      <div className="flex gap-8">
        <div className="lg:w-9/12 w-full flex flex-col gap-4">
          {listingItems.map((item) => (
            <ListingCard key={item} />
          ))}
        </div>
        <div className="lg:w-3/12 hidden lg:block">
          <ListingFilter />
        </div>
      </div>
      <ApartmentBanner />
      <div className="flex gap-8">
        <div className="lg:w-9/12 w-full flex flex-col gap-4">
          {listingItems.map((item) => (
            <ListingCard key={item} />
          ))}
        </div>
        <div className="w-3/12 lg:block hidden">
          <MapSupport />
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        rowCount={100}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default Listing;
