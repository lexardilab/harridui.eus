"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 bg-[#eae9b9]">
      <div className="w-full ">
        <Link href="/">
          <Image
            className="py-6"
            src="/logo.svg"
            width="40"
            height="40"
            alt=""
          />
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-screen transform z-50 bg-slate-600 px-12  ${
          open ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out `}
      >
        <div className="flex items-center h-20">
          <Image
            src="/logo_harridui.png"
            width="150"
            height="10"
            alt="Logo Harridui"
          />
        </div>
        <div className="flex flex-col ">
          <Link
            href="/"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <h1 className="pb-4 mt-4 text-2xl font-bold text-background">
              Estamos comenzando, y por lo tanto tenemos un montón de cosas que
              hacer, entre ellas acabar esta página web. Si necesitas
              personalizar textil, mirar nuestros catálogos, un presupuesto, o
              que te ayudemos con algo, puedes mandarnos un correo electrónico a
              la dirección de ahí abajo. Eskerrik asko.
            </h1>
          </Link>
          <div className="border-t border-gray-600" />
        </div>
        <div className="absolute left-12 bottom-6">
          <div>
            <Image src="/logo.svg" width="40" height="10" alt="Logo Harridui" />
          </div>
        </div>
        <div className="absolute right-12 bottom-6">
          <div>
            <Link href="mailto:harridui.studio@gmail.com">
              <p className="text-xl font-bold font-mont">kaixo@harridui.com </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end w-9/12">
        <div
          className="z-50 flex flex-col items-center justify-between w-8 h-3 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
