import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-[#eae9b9] pb-12">
      <div className="flex justify-start px-12 pt-12 pb-12">
        <h1 className="text-4xl font-black border-b border-black">
          Nuestras marcas
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4">
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
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://www.karibanbrands.com/es/nuestros-productos.html"
            target="_blank"
          >
            <Image src="/kariban.svg" width="200" height="84" alt="Kariban" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://www.bc-collection.eu/es/catalogo" target="_blank">
            <Image src="/Bc_Logo.png" width="130" height="20" alt="Bc" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link 
          href="https://catalogue.sologroup-paris.com/solo-group/e-catalogue-2024-ES/"
          target="_blank">
            <Image src="/Sols.svg" width="200" height="84" alt="Sols" />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="https://www.nativespirit-ns.com/es/nuestros-productos.html"
            target="_blank"
          >
            <Image
              src="/NativeSpirit.svg"
              width="200"
              height="84"
              alt="Native Spirit"
            />
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
          <Link href="/" target="_blank">
            <Image src="/gildan.svg" width="200" height="84" alt="Gildan" />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Link
            href="https://beechfield.com/es/products/search"
            target="_blank"
          >
            <Image
              src="/beechfield.svg"
              width="200"
              height="84"
              alt="Beechfield"
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
            href="https://westfordmill.com/es/products/search"
            target="_blank"
          >
            <Image
              src="/westford.svg"
              width="200"
              height="84"
              alt="Westford Mills"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://flexfit.com/2024-catalog/">
            <Image
              src="/Flexfit_Logo.png"
              width="200"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://atlantisheadwear.com/flipbook/Atlantis_Headwear_General_Catalogue_2024/">
            <Image
              src="/Atlantis.svg"
              width="200"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://en.halfar.com/media/c5/50/23/1704354908/HAL231123-Kat%2024-GB.pdf"
          target="_blank">
            <Image
              src="/Halfar.svg"
              width="200"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="">
            <Image
              src="/myrtleBeach.svg"
              width="100"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://beechfieldbrands.com/welcome-quadra"
          target="_blank">
            <Image
              src="/quadra.svg"
              width="200"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://www.russelleurope.com/s/catalogue?language=es"
          target="_blank">
            <Image
              src="/russell.svg"
              width="100"
              height="84"
              alt="Flexfit"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
