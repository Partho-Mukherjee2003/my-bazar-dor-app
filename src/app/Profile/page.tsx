"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toastLogout } from "@/lib/toast";
import { toast } from "react-toastify";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600/20";
const labelClass = "text-sm font-semibold text-gray-900";
const errorClass = "mt-1 text-xs text-red-600";

export default function UpdateProfilePage() {

  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Log out function
  const handelLogout = async () => {
    await authClient.signOut();
    toastLogout();
    router.push("/");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resdata = Object.fromEntries(formData.entries());
    // Convert FormData to plain object
    console.log(resdata);
    await authClient.updateUser({
      name:resdata.name as string,
    })
    toast.success("Name Changed Successfully")

  };

  return (
    <main className="min-h-screen bg-green-50/60 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-2xl space-y-5">
        {/* Page heading */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile header card */}
        <section className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt={user?.name ?? "Profile"}
                className="size-16 shrink-0 rounded-2xl border border-gray-200 object-cover sm:size-20"
              />
            ) : (
              <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-2xl font-bold text-white sm:size-20 sm:text-3xl">
                {user?.name?.charAt(0).toUpperCase() ?? "?"}
              </span>
            )}

            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
                {user?.name}
              </h2>
              <p className="truncate text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handelLogout}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-300 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition duration-200 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 active:translate-y-0 active:scale-95 sm:w-auto"
          >
            <span aria-hidden="true">↩</span>
            সাইন আউট
          </button>
        </section>

        {/* Update info card */}
        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">তথ্য</h2>

          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text" className="w-full">
              <Label className={labelClass}>নাম</Label>
              <Input
                className={inputClass}
                placeholder="আপনার নতুন নাম লিখুন"
              />
              <FieldError className={errorClass} />
            </TextField>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              <Button

                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-base font-bold text-white shadow-md shadow-green-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 sm:w-auto"
              >
                <Check />
                সংরক্ষণ করুন
              </Button>
              <Button
                type="reset"
                variant="secondary"
                className="flex w-full cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition duration-200 hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 active:scale-95 sm:w-auto"
              >
                রিসেট
              </Button>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
}
