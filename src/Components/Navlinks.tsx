
import NavlinkIteam from '@/Components/NavlinksIteam'
import React from 'react';
import type CategoryType from '@/Types/Category'

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const categories = await res.json();
  return (
    <div className="container mx-auto wrap-normal flex text-left  gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-6  lg:px-8 [&::-webkit-scrollbar]:hidden">
      {categories.map((n: CategoryType) => (
        <NavlinkIteam key={n.id} n={n} />
      ))}
    </div>
  );
};

export default Navlinks
