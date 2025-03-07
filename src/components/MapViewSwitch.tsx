import { useState } from "react";
import Switch from "./ui/Switch";

const MapViewSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex w-full justify-between items-center px-5 py-4 border rounded-lg border-[#CCCCCC]">
      <div>Map View</div>
      <div className="flex items-center">
        <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      </div>
    </div>
  );
};

export default MapViewSwitch;
