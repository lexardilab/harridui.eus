"use client";

import Image from "next/image";
import Link from "next/link";
import HamburguerMenu from "./HamburguerMenu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // Al cambiar de ruta, subir al principio
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between sm:px-2 px-2 bg-[#eae9b9]">
      <div className="w-full pl-2">
        <Link href="/">
          <Image
            className="py-6"
            src="/Logo_Harridui_1.svg"
            width="180"
            height="40"
            alt="Logo Harridui"
          />
        </Link>
      </div>

      <div className="flex">
        <HamburguerMenu />
      </div>
    </nav>
  );
}
