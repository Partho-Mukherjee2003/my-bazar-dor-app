import React, { Suspense } from "react";
import logo from "../assets/logo-icon.png";
import Image from "next/image";
import NavbarLinks from "./Navlinks";
import Link from "next/link";
import Marquee from "./Marquee";


const date = new Date().toLocaleDateString("bn-BD", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: logo + title + date */}
        <Link href="/">
          <div className="group flex min-w-0 cursor-pointer items-center gap-3 sm:gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-700 shadow-sm transition duration-200 group-hover:scale-105 group-hover:bg-green-800 sm:size-11">
              <Image
                src={logo}
                alt="Logo"
                width={26}
                height={26}
                className="size-6 object-contain sm:size-6.5"
              />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-green-700 sm:text-xl">
                বাজার দর
              </p>
              <p className="truncate text-[11px] text-gray-500 sm:text-xs">
                {date}
              </p>
            </div>
          </div>
        </Link>

        {/* Right: actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <Link href="/Sign-in">
            <button className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 transition duration-200 hover:bg-green-50 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 active:scale-95 sm:px-4">
              সাইন ইন
            </button>
          </Link>
          <Link href="/Sign-up">
            <button className="cursor-pointer rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 sm:px-5 sm:py-2.5">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex w-full items-center justify-center border-t border-gray-200 py-3">
            <span className="loading loading-spinner text-success"></span>
          </div>
        }
      >
        <NavbarLinks />
        <Marquee />
      </Suspense>
    </header>
  );
};

export default Navbar;
