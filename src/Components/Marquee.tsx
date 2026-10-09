import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import React from "react";
import type MarqueeType from "@/Types/Marquee";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products: MarqueeType[] = await res.json();

  return (
    <section className="w-full border-b border-gray-200 bg-white py-3">
      <MarqueeText direction="right" duration={15} pauseOnHover>
        {products.map((product) => (
          <div
            key={product.id}
            className="mx-5 flex cursor-pointer items-center gap-2 whitespace-nowrap transition-opacity duration-200 hover:opacity-70"
          >
            <span className="text-xl">{product.categoryIcon}</span>
            <span className="text-base font-bold text-gray-900 sm:text-lg">
              {product.nameBn}
            </span>
            <span className="text-sm text-gray-600 sm:text-base">
              {product.today.toLocaleString("bn-BD")} টাকা/{product.unit}
            </span>
            <span
              className={`text-sm font-bold sm:text-base ${
                product.change.dir === "up" ? "text-red-600" : "text-green-600"
              }`}
            >
              {product.change.dir === "up" ? "▲" : "▼"}{" "}
              {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
            </span>
          </div>
        ))}
      </MarqueeText>
    </section>
  );
};

export default Marquee;
