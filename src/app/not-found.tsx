import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white/80 px-5 py-10 text-center shadow-sm sm:px-10 sm:py-14">
        {/* 404 with basket emoji as the zero */}
        <div
          className="flex items-center justify-center gap-1 text-6xl font-extrabold leading-none text-green-700 sm:gap-2 sm:text-8xl"
          aria-hidden="true"
        >
          <span>৪</span>
          <span className="flex size-16 items-center justify-center rounded-3xl bg-green-100 text-4xl motion-safe:animate-bounce sm:size-24 sm:text-6xl">
            🧺
          </span>
          <span>৪</span>
        </div>

        <p className="mt-6 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
          পেজ পাওয়া যায়নি
        </p>

        <h1 className="mt-3 text-2xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
          দুঃখিত, এই পেজটি খুঁজে পাওয়া গেল না
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
          আপনি যে লিংকটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম বদলেছে, বা
          ঠিকানাটি ভুল। চাইলে হোম পেজে ফিরে আজকের বাজারদর দেখতে পারেন।
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="cursor-pointer rounded-lg bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95"
          >
            হোম পেজে যান
          </Link>
          <Link
            href="/#AllProductSection"
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 transition duration-200 hover:-translate-y-0.5 hover:border-green-600 hover:bg-green-50 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95"
          >
            সব পণ্য দেখুন
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
