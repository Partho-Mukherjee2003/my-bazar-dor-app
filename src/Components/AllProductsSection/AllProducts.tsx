import React from 'react';
import type AllProductsType from "@/Types/AllProducts";
import Product from '@/Components/AllProductsSection/Product'

const AllProducts = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const products: AllProductsType[] = await res.json();
  return (
    <div id='AllProductSection' className="mx-auto container px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-black font-extrabold py-3 ">সব পণ্য</h1>
      <p className="text-lg pb-3 text-gray-600">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
