import Link from "next/link";

function Card({ product }) {
  return (
    <div className="grid grid-cols-4 ">
      <Link href={`/details/${product?.slug}`}>
        <div className="transition-transform duration-300 cursor-pointer hover:scale-105">
          <h1 className="pb-4 text-2xl font-semibold text-black">
            {product?.name}
          </h1>
        </div>
        <img src={product?.image} layout="fill" objectfit="cover" alt="art" />
      </Link>
    </div>
  );
}

export default Card;
