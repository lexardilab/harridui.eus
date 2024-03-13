import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 py-4 ">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/StanleyStella_Logo.png"
              width="200"
              height="84"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/StanleyStella_Logo.png"
              width="200"
              height="84"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/StanleyStella_Logo.png"
              width="200"
              height="84"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/StanleyStella_Logo.png"
              width="200"
              height="84"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
