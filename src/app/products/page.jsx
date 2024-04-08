"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getAllProducts } from "../../../sanity/product-util";
import Header from "../components/Header";

function Products() {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setData(products);
    };
    fetchData();
  }, []);

  const applyFilters = () => {
    const filteredProducts = data.filter((product) => {
      const price = parseFloat(product.price); // assuming price is a string
      const isMinPriceValid = !minPrice || price >= parseFloat(minPrice);

      const matchesSearchQuery =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // Add additional checks based on other relevant attributes
        // For example: product.description.toLowerCase().includes(searchQuery.toLowerCase())
        false;

      return isMinPriceValid && matchesSearchQuery;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "highest") {
        return parseFloat(b.price) - parseFloat(a.price);
      } else if (sortBy === "lowest") {
        return parseFloat(a.price) - parseFloat(b.price);
      }
      return 0;
    });

    setData(sortedProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [minPrice, sortBy, searchQuery]);

  const resetFilters = () => {
    setMinPrice("");
    setSortBy("latest");
    setCurrentPage(1);
    setProductsPerPage(5);
    setSearchQuery("");
    fetchData();
  };

  const fetchData = async () => {
    const products = await getAllProducts();
    setData(products);
  };

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <div className="flex flex-col p-10 md:flex-row">
        {/* Filters */}

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-4 mx-auto lg:grid-cols-2">
          {currentProducts?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination */}
    </div>
  );
}

export default Products;
