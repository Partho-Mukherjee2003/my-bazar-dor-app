"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20";
const labelClass = "text-sm font-semibold text-gray-900";
const errorClass = "mt-1 text-xs text-red-600";

export default function SignUpPage() {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resdata = Object.fromEntries(formData.entries());
    // Convert FormData to plain object
    console.log(resdata);
    // confirm password check
    if (resdata.password !== resdata.conPassword) {
      toast.warning("Wrong confirm password");
      return;
    }
    const { data, error } = await authClient.signUp.email({
      name: resdata.name as string,
      email: resdata.email as string,
      password: resdata.password as string,
      callbackURL: "/" as string,
    });

  if (data) {
    toast.success("অ্যাকাউন্ট তৈরি হয়েছে");
    router.push("/");
  }

  if (error) {
      toast.error(error.message ?? "সাইন আপ করা যায়নি");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-green-50/60 px-4 py-10 sm:py-14">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          {/* Name text Field */}
          <TextField isRequired name="name" type="text">
            <Label className={labelClass}>নাম</Label>
            <Input className={inputClass} />
            <FieldError className={errorClass} />
          </TextField>

          {/* Email text field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className={labelClass}>ইমেইল</Label>
            <Input className={inputClass} />
            <FieldError className={errorClass} />
          </TextField>

          {/* Password text field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className={labelClass}>পাসওয়ার্ড</Label>
            <Input className={inputClass} />
            <Description className="mt-1 text-xs text-gray-500">
              কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা থাকতে হবে
            </Description>
            <FieldError className={errorClass} />
          </TextField>

          {/* Confirm text field */}
          <TextField
            isRequired
            minLength={8}
            name="conPassword"
            type="password"
          >
            <Label className={labelClass}>পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input className={inputClass} />
            <FieldError className={errorClass} />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="mt-2 w-full rounded-xl bg-green-600 px-4 py-3 text-base font-bold text-white transition hover:bg-green-700 active:scale-[0.99]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-500">অথবা</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M17.64 9.2045c0-.638-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
              />
              <path
                fill="#FBBC05"
                d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
              />
              <path
                fill="#EA4335"
                d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
              />
            </svg>
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Sign in link */}
        <p className="mt-5 text-center text-sm text-gray-700">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-green-700 hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      {/* Back home */}
      <Link
        href="/"
        className="mt-6 text-sm text-gray-500 transition hover:text-green-700"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}
