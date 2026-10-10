import AllProducts from "@/Components/AllProductsSection/AllProducts";
import BannerPage from "@/Components/BannerPage";
import PriceUpDown from "@/Components/PriceUpDown";
import { ToastContainer } from "react-toastify";

import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <ToastContainer/>
      <Suspense

        fallback={
          <div className="flex min-h-[60vh] w-full items-center justify-center">
            <span className="loading  loading-ring text-4xl loading-xl text-green-700"></span>
          </div>}>


        <BannerPage />
        <PriceUpDown/>
        <AllProducts />
      </Suspense>
    </div>
  );
}
