import React, { Suspense } from "react";
import type AllProductsType from "@/Types/AllProducts";
import Sortby from "@/Components/Sortby";

const CategoryContent = async ({params,}: {params: Promise<{ slug: string }>}) => {
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

      {/* Sort + count + grid */}
      <Sortby products={products} />
    </div>
  );
};

const CategoryPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <Suspense fallback={<p className="p-6">লোড হচ্ছে...</p>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryPage;
