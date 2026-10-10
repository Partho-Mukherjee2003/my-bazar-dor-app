"use client";
import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from 'next/image'


const AuthInfoPage = () => {
  // Log out function
  const handelLogout = async () => {
    await authClient.signOut();
    toast.success("Logout succesfully");
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div>
      {user ? (
        <div className="group relative">
          {/* Avatar trigger */}
          <button
            type="button"
            aria-label="Account menu"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white p-1 pr-1 shadow-sm transition duration-200 hover:border-green-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 active:scale-95 sm:pr-3"
          >
            {user?.image ? (
              <Image
                src={user.image}
                alt={user?.name}
                className="size-9 rounded-full object-cover sm:size-10"
              />
            ) : (
              <span className="flex size-9 items-center justify-center rounded-full bg-green-700 text-base font-bold text-white sm:size-10">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            )}
            <span className="hidden max-w-28 truncate text-sm font-semibold text-gray-900 sm:block">
              {user?.name}
            </span>
            <span className="hidden text-xs text-gray-500 transition duration-200 group-hover:rotate-180 sm:block">
              ▾
            </span>
          </button>

          {/* Dropdown card */}
          <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 sm:w-72">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/10">
              {/* User info */}
              <div className="flex items-center gap-3 bg-green-50/60 px-4 py-4">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user?.name}
                    className="size-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0">
                  <h1 className="truncate text-base font-bold text-gray-900">
                    {user?.name}
                  </h1>
                  <p className="truncate text-xs text-gray-600">
                    {user?.email}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-1 border-t border-gray-100 p-2">
                <Link href="/Profile" className="block">
                  <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-gray-900 transition duration-200 hover:bg-green-50 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 active:scale-[0.98]">
                    <span aria-hidden="true">👤</span>
                    প্রোফাইল
                  </button>
                </Link>

                <Link href="/" className="block">
                  <button
                    onClick={handelLogout}
                    className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition duration-200 hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 active:scale-[0.98]"
                  >
                    <span aria-hidden="true">↩</span>
                    সাইন আউট
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AuthInfoPage;
