import React, { Suspense } from "react";
import logo from "../assets/logo-icon.png";
import Image from "next/image";
import NavbarLinks from "./Navlinks";
import Link from "next/link";
import Marquee from "./Marquee";
import AuthInfoPage from "./AuthInfo";


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
        <AuthInfoPage/>
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
