import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#eae9b9] items-center justify-between flex px-4">
      <Link href="/">
        <Image src="/icon_logo.png" width="100" height="100" alt="" />
      </Link>
      <Link href="mailto:harridui.studio@gmail.com">
        <h1 className="text-2xl font-black sm:text-4xl">kaixo@harridui.com</h1>
      </Link>
    </div>
  );
}
