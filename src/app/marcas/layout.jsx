import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Harridui | Marcas",
  description: "Estudio de Serigrafía y Diseño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#eae9b9] h-screen">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src="/icon_logo.png" width="100" height="100" alt="" />
            </Link>
          </div>
          <div className="pr-6">
            <h1 className="text-xl">Marcas</h1>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
