import { CompassIcon } from "./icons/banner"
import Button from "./ui/Button"

const BuyersGuide = () => {
  return (
    <div className="lg:w-3/12 w-full bg-[#FF916E] rounded-2xl flex flex-col gap-6 h-full items-center justify-center p-8 text-white text-center">
      <CompassIcon />
      <h2 className="text-[35px] font-extrabold">Buyer's Guide</h2>
      <p className="text-base font-semibold">The complete guide to locating and purchasing a home in Dubai</p>
      <Button className="bg-white text-[#74788D] w-full py-4">Download PDF File</Button>
    </div>
  )
}

export default BuyersGuide