"use client";
import Image from "next/image";
import Link from "next/link";
import HamburguerMenu from "./HamburguerMenu"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between sm:px-2 px-2 bg-[#eae9b9]">
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
        <HamburguerMenu />
      </div>
    </nav>
  );
}
