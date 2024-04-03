"use client";
import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../../sanity/product-util";
import Card from "../components/Card";

function Products() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setData(products);
    };
    fetchData();
  }, []);

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="px-12 pt-12">
        {/* Product Grid */}
        <div className="flex bg-red-700 ">
          {currentProducts?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
