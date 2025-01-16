"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between sm:px-2 px-8 bg-[#eae9b9]">
      <div className="w-full pl-2">
        <Link href="/">
          <Image
            className="py-6"
            src="/Logo_Harridui_1.svg"
            width="180"
            height="40"
            alt=""
          />
        </Link>
      </div>

      <div className="flex">
        <Link href="/marcas">
          <h1 className="px-4 text-base font-medium">Marcas</h1></Link>
        <Link href="/servicios">
          <h1 className="pr-4 text-base font-medium">Servicios</h1></Link>
        <Link href="/presupuesto">
          <h1 className="text-base font-medium ">Presupuesto</h1></Link>
      </div>
    </nav>
  );
}
