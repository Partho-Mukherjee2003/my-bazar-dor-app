import React from "react";
import type AllProductsType from "@/Types/AllProducts";
import Product from "@/Components/AllProductsSection/Product";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
  );
  const products: AllProductsType[] = await res.json();

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4 px-4 py-6 sm:px-6 lg:px-8">
      {/* Header card */}
      <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm sm:p-6">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl sm:size-14 sm:text-4xl">
          {products[0]?.categoryIcon}
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {products[0]?.categoryNameBn}
          </h1>
          <p className="text-xs text-gray-600 sm:text-sm">
            {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
        </div>
      </div>

      {/* Sort card */}
      <div className="flex items-center justify-end gap-3 rounded-3xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm sm:px-6 sm:py-4">
        <label htmlFor="sort" className="text-sm text-gray-600">
          সাজান
        </label>
        <select
          id="sort"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 transition duration-200 hover:border-green-600 focus:border-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          <option>ডিফল্ট</option>
          <option>দাম কম থেকে বেশি</option>
          <option>দাম বেশি থেকে কম</option>
          <option>পরিবর্তন বেশি</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-600 sm:text-sm">
        মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
