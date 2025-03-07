import WorldRoute from "../../assets/world-route.svg"
import Button from "../ui/Button"

const MapSupport = () => {
  return (
    <div className="bg-[#E5FBFF] rounded-2xl p-7">
      <div>
        <h3 className="text-[#2E96C6] font-bold text-base">Map Support</h3>
        <p className="font-normal">Use our map support to find the property</p>
      </div>
      <div className="flex justify-center">
        <img src={WorldRoute} width="255" height="255" />
      </div>
      <Button className="bg-[#2E96C6] text-white w-full">Explore</Button>
    </div>
  )
}

export default MapSupport