import Image from "next/image";
import Serigrafia from "../components/Servicios/Serigrafia";
export default function AccordionUsage() {
  return (
    <div className="grid grid-cols-2 pt-52 bg-[#eae9b9]">
      <div>
        <Image src="/servicios_01.webp" width="600" height="400" alt="" />
      </div>
      <Serigrafia />
    </div>
  );
}
