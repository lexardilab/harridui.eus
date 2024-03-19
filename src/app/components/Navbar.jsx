import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#eae9b9] items-center justify-between flex">
      <Link href="/">
        <Image src="/icon_logo.png" width="100" height="100" alt="" />
      </Link>
      <div className="flex pr-12">
        <Link href="/harridui">
          <h1 className="px-2 font-light">Harridui</h1>
        </Link>
        <Link href="/serigrafia">
          <h1 className="px-2 font-light">Serigrafía</h1>
        </Link>

        <Link href="/servicios">
          <h1 className="px-2 font-light">Servicios</h1>
        </Link>
        <Link href="/marcas">
          <h1 className="px-2 font-light">Marcas</h1>
        </Link>
        <Link href="/presupuesto">
          <h1 className="px-2 font-light">Presupuesto</h1>
        </Link>
        <Link href="https://harridui.com/tienda">
          <h1 className="px-2 font-light">Tienda</h1>
        </Link>
      </div>
    </div>
  );
}
