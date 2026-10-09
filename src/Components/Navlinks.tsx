
import Link from 'next/link';
import React from 'react';
import type CategoryType from '@/Types/Category'

const Navlinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );
  const categories = await res.json();
  console.log(categories);
  return (
    <div className="mx-auto wrap-normal flex text-left  gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-6  lg:px-8 [&::-webkit-scrollbar]:hidden">
      {categories.map((n: CategoryType) => (
        <Link href={n.slug} key={n.id}>
          <div className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold text-gray-900 transition duration-200 hover:bg-green-50 hover:text-green-700 active:scale-95 sm:text-base">
            <span className="text-lg transition-transform duration-200 group-hover:scale-125">
              {n.icon}
            </span>
            <span>{n.nameBn}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;

{/*
"id": "tel",
"slug": "tel",
"nameBn": "তেল",
"icon": "🛢️" */}
