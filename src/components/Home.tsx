import BuyersGuide from "./BuyersGuide"
import Listing from "./Listing"
import Search from "./Search"
import StillNotFound from "./StillNotFound"

const Home = () => {
  return (
    <div className="lg:py-10 lg:px-14 px-4 py-3 w-full">
      <Search />
      <Listing />
      <div className="lg:mt-8 mt-0 w-full flex lg:flex-row flex-col items-center gap-8">
        <StillNotFound />
        <BuyersGuide />
      </div>
    </div>
  )
}

export default Home