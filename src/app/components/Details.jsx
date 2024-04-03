"use client";
import React, { useState } from "react";
import useCartStore from "../cartStore";
import { toast } from "react-hot-toast";

function Details({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.image);

  //const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({ product, quantity: qty });
    toast.success("Added to cart");
  };

  return (
    <div className="mx-auto mt-20 max-w-7xl">
      <div className="grid grid-cols-2 ">
        {/* Left - Main Image */}
        <div className="relative pl-12 overflow-hidden">
          <img src={selectedImage} layout="fill" objectfit="cover" alt="art" />
        </div>

        {/* Right - Details */}
        <div className="pl-12">
          <h1 className="text-3xl font-semibold ">{product?.name}</h1>
          <p className="text-lg text-gray-500 ">{product?.description}</p>

          {/* Color Selection Circles */}

          <div className="mt-5">
            {/* Additional details can be added here */}
            <span className="text-xl font-semibold">{product?.price} €</span>
          </div>

          <div className="flex flex-col mt-6 text-gray-500">
            <label className="pb-2" htmlFor="">
              Cantidad
            </label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 h-10 px-4 border border-gray-300 "
            />
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 text-white bg-black rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Below Main Image - Small Image List */}
      <div className="px-12 mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          <li
            onClick={() => {
              setSelectedImage(product?.image);
            }}
            className={`${
              selectedImage == product?.image ? " " : ""
            } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer  `}
          >
            <img
              src={product?.image}
              layout="fill"
              objectfit="cover"
              alt="small_art1"
            />
          </li>
          {product?.extraImages?.map((image) => (
            <li
              key={image}
              onClick={() => {
                setSelectedImage(image);
              }}
              className={`${
                selectedImage == image ? " " : ""
              } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer  `}
            >
              <img
                src={image}
                layout="fill"
                objectfit="cover"
                alt="small_art1"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
