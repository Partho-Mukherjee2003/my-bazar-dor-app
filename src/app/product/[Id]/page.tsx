import React from "react";
import Link from "next/link";

type Market = {
  market: string;
  division: string;
  min: number;
  max: number;
};

type ProductDetails = {
  id: number;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  yesterday: number;
  change: { dir: "up" | "down" | "same"; pct: number };
  markets: Market[];
};

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const bn = (n: number) => n.toLocaleString("bn-BD");

const CardDetailsPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${Id}`,
  );
  const p: ProductDetails = await res.json();

  const unit = unitBn[p.unit] ?? p.unit;
  const up = p.change.dir === "up";
  const diff = Math.abs(p.today - p.yesterday);
  const minPrice = Math.min(...p.markets.map((m) => m.min));
  const maxPrice = Math.max(...p.markets.map((m) => m.max));

  return (
    <main className="min-h-screen bg-green-50/60 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <span>{p.categoryNameBn}</span>
          <span>›</span>
          <span className="font-semibold text-gray-900">{p.nameBn}</span>
        </nav>

        {/* Header card */}
        <section className="flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl sm:size-20 sm:text-5xl">
              {p.categoryIcon}
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {p.nameBn}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                প্রতি {unit} · {p.categoryNameBn}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                গতকালের তুলনায় আজ দাম{" "}
                <span
                  className={`font-bold ${up ? "text-red-600" : "text-green-600"}`}
                >
                  {up ? "বেড়েছে" : "কমেছে"}
                </span>{" "}
                · {bn(diff)} টাকা
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center rounded-2xl bg-green-50 px-8 py-4 text-center">
            <p className="text-xs text-gray-600">আজকের দাম</p>
            <p className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {bn(p.today)}
            </p>
            <p className="text-xs text-gray-600">টাকা / {unit}</p>
            <span
              className={`mt-2 rounded-full bg-white px-3 py-1 text-xs font-bold ${
                up ? "text-red-600" : "text-green-600"
              }`}
            >
              {up ? "▲" : "▼"} {bn(p.change.pct)}%
            </span>
          </div>
        </section>

        {/* Summary */}
        <section className="mt-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-2xl border border-gray-200 bg-green-50/40 p-4">
              <p className="text-xs text-gray-600">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-2xl font-extrabold text-green-600">
                {bn(minPrice)}{" "}
                <span className="text-sm font-medium text-gray-700">টাকা</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-red-50/40 p-4">
              <p className="text-xs text-gray-600">সর্বাধিক দাম</p>
              <p className="mt-1 text-2xl font-extrabold text-red-600">
                {bn(maxPrice)}{" "}
                <span className="text-sm font-medium text-gray-700">টাকা</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs text-gray-600">গড় দাম</p>
              <p className="mt-1 text-2xl font-extrabold text-green-700">
                {bn(p.today)}{" "}
                <span className="text-sm font-medium text-gray-700">টাকা</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                প্রতি {unit}-এর হিসাবে
              </p>
            </div>
          </div>

          {/* Market table */}
          <h2 className="mt-8 text-lg font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-155 border-collapse text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">বাজার</th>
                  <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                  <th className="px-4 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>
              <tbody>
                {p.markets.map((m) => (
                  <tr
                    key={m.market}
                    className="border-t border-gray-200 even:bg-gray-50/70 transition-colors hover:bg-green-50"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {m.market}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{m.division}</td>
                    <td className="px-4 py-3 text-right text-green-700">
                      {bn(m.min)} টাকা
                    </td>
                    <td className="px-4 py-3 text-right text-red-600">
                      {bn(m.max)} টাকা
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">
                      {bn((m.min + m.max) / 2)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CardDetailsPage;
