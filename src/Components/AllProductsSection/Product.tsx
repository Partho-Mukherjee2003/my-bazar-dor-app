import React from "react";
import type AllProductsType from "@/Types/AllProducts";

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const Product = ({ product }: { product: AllProductsType }) => {
  const pct = product.change.pct;
  const unchanged = pct === 0;
  const up = product.change.dir === "up";

  return (
    <div className="cursor-pointer rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-600 hover:shadow-lg sm:p-5">
      {/* Top: icon + name + unit */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl sm:size-16 sm:text-4xl">
          {product.categoryIcon}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
            {product.nameBn}
          </h2>
          <p className="text-sm text-gray-600 sm:text-base">
            প্রতি {unitBn[product.unit] ?? product.unit}
          </p>
        </div>
      </div>

      {/* Bottom: price + change badge */}
      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <p className="text-sm text-gray-600">আজকের দাম</p>
          <p className="mt-1 text-gray-900">
            <span className="text-2xl font-extrabold sm:text-3xl">
              {product.today.toLocaleString("bn-BD")}
            </span>{" "}
            <span className="text-base sm:text-lg">টাকা</span>
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold sm:text-sm ${
            unchanged ? "text-black" : up ? "text-red-600" : "text-green-600"
          }`}
        >
          {!unchanged && (up ? "▲ " : "▼ ")}
          {Math.abs(pct).toLocaleString("bn-BD")}%
        </span>
      </div>
    </div>
  );
};

export default Product;
