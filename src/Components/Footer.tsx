import React from "react";

const FooterPage = () => {
  return (
    <footer className="container mx-auto w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:text-left lg:px-8">
        <p className="cursor-default text-sm text-gray-700 transition-colors hover:text-green-700">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-xs text-gray-500 sm:text-sm md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
