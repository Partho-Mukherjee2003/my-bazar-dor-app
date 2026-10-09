"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type CategoryType from "@/Types/Category";

const NavLinkItem = ({ n }: { n: CategoryType }) => {
  const { slug } = useParams();
  const active = slug === n.slug;

  return (
    <Link
      href={`/category/${n.slug}`}
      aria-current={active ? "page" : undefined}
      className="group shrink-0"
    >
      <div
        className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-bold transition duration-200 active:scale-95 sm:text-base ${
          active
            ? "bg-green-700 text-white shadow-md shadow-green-900/20"
            : "text-gray-900 hover:bg-green-50 hover:text-green-700"
        }`}
      >
        <span className="text-lg transition-transform duration-200 group-hover:scale-125">
          {n.icon}
        </span>
        <span>{n.nameBn}</span>
      </div>
    </Link>
  );
};

export default NavLinkItem;
