import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-purple-200">
        <Link href="/">
          <Image
            className="py-6"
            src="/logo_harridui.png"
            width="250"
            height="40"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center justify-center py-6 bg-purple-200">
        <h1 className="px-4 text-sm font-medium uppercase">Serigrafía |</h1>
        <Link href="/servicios">
          <h1 className="px-4 text-sm font-medium uppercase">Servicios |</h1>
        </Link>
        <Link href="/marcas">
          <h1 className="px-4 text-sm font-medium uppercase">Marcas |</h1>
        </Link>
        <h1 className="px-4 text-sm font-medium uppercase">Tienda |</h1>
        <Link href="/presupuesto">
          <h1 className="px-4 text-sm font-medium uppercase">Presupuesto |</h1>
        </Link>
      </div>
    </>
  );
}
