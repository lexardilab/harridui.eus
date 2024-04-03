import Image from "next/image";
import Papel from "../components/Servicios/Papel";
import Serigrafia from "../components/Servicios/Serigrafia";

export default function page() {
  return (
    <>
      <div className=" bg-[#eae9b9] justify-center pt-48 px-12 pb-12">
        <h1 className="text-6xl font-black text-center">
          Ofrecemos la posibilidad de personalizar muuuchas cosas :)
        </h1>
        <div className="grid grid-cols-2 pt-52">
          <div>
            <Image src="/servicios_01.webp" width="600" height="400" alt="" />
          </div>
          <div className="px-6 ">
            <Serigrafia />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-6 ">
            <Papel />
          </div>
          <div>
            <Image src="/papel.webp" width="600" height="400" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
