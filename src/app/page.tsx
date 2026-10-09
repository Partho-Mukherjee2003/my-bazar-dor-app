import AllProducts from "@/Components/AllProductsSection/AllProducts";
import BannerPage from "@/Components/BannerPage";
import Marquee from "@/Components/Marquee";

import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] w-full items-center justify-center">
            <span className="loading  loading-ring text-4xl loading-xl text-green-700"></span>
          </div>}>
        <Marquee />

        <BannerPage />

        <AllProducts />
      </Suspense>
    </div>
  );
}
