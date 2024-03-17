import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#eae9b9] items-center justify-left flex">
      <Link href="/">
        <Image src="/icon_logo.png" width="100" height="100" alt="" />
      </Link>
    </div>
  );
}
