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
              src="/StanleyStella_Logo.png"
              width="200"
              height="84"
              alt="Stanley Stella"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
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
          <Link href="/">
            <Image
              src="/Beechfield_Logo.png"
              width="200"
              height="84"
              alt="Beechfield"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-12">
          <Link href="/">
            <Image
              src="/Westford_Logo.png"
              width="200"
              height="84"
              alt="Westford Mills"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
