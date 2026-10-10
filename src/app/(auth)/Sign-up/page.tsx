"use client";
import {
  toastSignUpSuccess,
  toastSignUpError,
  toastPasswordMismatch,
} from "@/lib/toast";
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
import SignWithGoogle from "@/Components/SignWithGoogle";
import SignWithGithub from "@/Components/SignWithGithub";


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
      toastPasswordMismatch();
      return;
    }
    const { data, error } = await authClient.signUp.email({
      name: resdata.name as string,
      email: resdata.email as string,
      password: resdata.password as string,
      callbackURL: "/" as string,
    });

  if (data) {
    toastSignUpSuccess();
    router.push("/");
  }

  if (error) {
    toastSignUpError(error.message);
    return;
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
          {/* SignUp with google */}
          <SignWithGoogle/>
          {/* SignUp with Github */}
          <SignWithGithub/>
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
