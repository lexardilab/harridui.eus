import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#eae9b9] items-center justify-between flex px-8">
      <Link href="/">
        <Image className="py-6" src="/logo.svg" width="40" height="40" alt="" />
      </Link>
      <Link href="mailto:harridui.studio@gmail.com">
        <h1 className="font-black lg:text-3xl sm:text-xl">
          kaixo@harridui.com
        </h1>
      </Link>
    </div>
  );
}
