import React from "react";
import hero from "../assets/bazar-hero.png";
import Image from "next/image";
import Link from "next/link"

const date = new Date().toLocaleDateString("bn-BD", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const BannerPage = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse items-center gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-white/80 px-5 py-6 shadow-sm sm:px-8 md:flex-row md:justify-between md:gap-10 md:py-8">
        {/* Text side */}
        <div className="w-full text-center md:max-w-2xl md:text-left">
          <p className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
            {date}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <Link href="#AllProductSection">
            <button className="mt-6 cursor-pointer rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95">
              সব পণ্য দেখুন
            </button>
          </Link>
        </div>

        {/* Image side */}
        <div className="w-full max-w-65 shrink-0 sm:max-w-xs md:max-w-sm">
          <Image
            src={hero}
            alt="Hero"
            width={500}
            height={300}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
