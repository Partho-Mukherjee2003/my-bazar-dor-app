import React from 'react';
import type AllProductsType from '@/Types/AllProducts'
import Product from './AllProductsSection/Product';

const PriceUpDown = async () => {
  const res = await fetch(
    // "https://api.abcz.workers.dev/api/bazardor/products",
    'https://openapi.programming-hero.com/api/bazardor/products'
  );
  const products: AllProductsType[] = await res.json();
  const upPriceProducts = products.filter(p => p.change.dir === 'up').slice(0,6);
  const downPriceProducts = products.filter((p) => p.change.dir === "down").slice(0,6);
  // console.log(upPriceProducts)
  // console.log(downPriceProducts)
  return (
    <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl text-black font-extrabold py-5 ">
          <span className="text-red-600">{"▲"}</span>আজ দাম বেড়েছে
        </h1>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
          {upPriceProducts.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className='my-8 '>
        <h1 className="text-4xl text-black font-extrabold py-5 ">
          <span className="text-green-600">{"▼"}</span>আজ দাম কমেছে
        </h1>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
          {downPriceProducts.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceUpDown;
