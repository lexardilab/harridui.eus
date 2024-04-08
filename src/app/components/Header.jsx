"use client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import useCartStore from "../cartStore";
import Link from "next/link";

function Header() {
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
      <div className="flex justify-between mx-auto max-w-7xl">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl font-bold lg:text-3xl">Harridui</h1>
          </div>
        </Link>

        <div className="relative flex items-center">
          <Link href="/cart">
            <FaShoppingCart className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300" />
          </Link>
          {totalItems > 0 && (
            <div className="flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-white bg-blue-500 rounded-full">
              {totalItems}
            </div>
          )}

          <Link className="ml-4" href="/order">
            <MdLocalShipping className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
