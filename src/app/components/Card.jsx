import Link from "next/link";

function Card({ product }) {
  return (
    <Link href={`/details/${product?.slug}`}>
      <div className="relative max-w-sm cursor-pointer">
        <div className="relative overflow-hidden transition-transform duration-300 h-72 aspect-ratio-1 hover:scale-105">
          <img src={product?.image} layout="fill" objectfit="cover" alt="art" />
        </div>

        {/* Sticky Price Tag - Outside the Card Container */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">{product?.name}</span>
          <span className="text-xl font-semibold ">{product?.price} €</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
