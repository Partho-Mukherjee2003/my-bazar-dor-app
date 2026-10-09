"use client";

import React, { useState } from "react";
import type AllProductsType from "@/Types/AllProducts";
import Product from "@/Components/AllProductsSection/Product";

type SortOption = "ডিফল্ট" | "দাম কম থেকে বেশি" | "দাম বেশি থেকে কম";

const CategoryProducts = ({ products }: { products: AllProductsType[] }) => {
  const [sortBy, setSortBy] = useState<SortOption>("ডিফল্ট");

  // original array change na kore copy kore sort kori
  const sortedProducts = [...products];
  if (sortBy === "দাম কম থেকে বেশি") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sortBy === "দাম বেশি থেকে কম") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <>
      {/* Sort card */}
      <div className="flex items-center justify-end gap-3 rounded-3xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm sm:px-6 sm:py-4">
        <label htmlFor="sort" className="text-sm text-gray-600">
          সাজান
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          id="sort"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 transition duration-200 hover:border-green-600 focus:border-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          <option value="ডিফল্ট">ডিফল্ট</option>
          <option value="দাম কম থেকে বেশি">দাম কম থেকে বেশি</option>
          <option value="দাম বেশি থেকে কম">দাম বেশি থেকে কম</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-600 sm:text-sm">
        মোট {sortedProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
