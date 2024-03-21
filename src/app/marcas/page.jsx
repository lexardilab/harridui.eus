import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-[#eae9b9] h-screen">
      <div className="flex justify-center pt-6 pb-12">
        <h1 className="text-4xl font-black">Nuestras marcas</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4 ">
        <div className="flex items-center justify-center">
          <Link
            href="https://online.flippingbook.com/view/865225458/"
            target="_blank"
          >
            <Image
              src="/StanleyStella_Logo.svg"
              width="200"
              height="84"
              alt="Stanley Stella"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://flexfit.com/2024-catalog/?page=6" target="_blank">
            <Image src="/Bc_Logo.png" width="130" height="20" alt="Bc" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/Flexfit_Logo.png"
              width="200"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://beechfield.com/es/products/search"
            target="_blank"
          >
            <Image
              src="/Beechfield.svg"
              width="200"
              height="84"
              alt="Beechfield"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://westfordmill.com/es/products/search"
            target="_blank"
          >
            <Image
              src="/Westford.svg"
              width="200"
              height="84"
              alt="Westford Mills"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://www.nativespirit-ns.com/es/nuestros-productos.html"
            target="_blank"
          >
            <Image
              src="/Native-Spirit.png"
              width="200"
              height="84"
              alt="Native Spirit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link href="https://bagbase.com/es/products/search" target="_blank">
            <Image src="/BagBase.svg" width="200" height="84" alt="Bag Base" />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://catalogs.bellacanvas.com/The-2024-Collection/1/#"
            target="_blank"
          >
            <Image
              src="/bellacanvas.svg"
              width="200"
              height="84"
              alt="Bella+Canvas"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://www.karibanbrands.com/es/nuestros-productos.html"
            target="_blank"
          >
            <Image src="/kariban.svg" width="200" height="84" alt="Kariban" />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://www.karibanbrands.com/es/nuestros-productos.html"
            target="_blank"
          >
            <Image src="/gildan.png" width="200" height="84" alt="Gildan" />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://stamina-shop.com/icatalog/urlCatSta?lang=es"
            target="_blank"
          >
            <Image src="/stamina.svg" width="200" height="84" alt="Stamina" />
          </Link>
        </div>
      </div>
    </main>
  );
}
