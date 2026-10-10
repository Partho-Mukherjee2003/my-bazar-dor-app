import { toast, type ToastOptions } from "react-toastify";

const base: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
};

// সাইন ইন সফল
export const toastLoginSuccess = (name?: string) =>
  toast.success(`${name ? name + ", " : ""}সফলভাবে সাইন ইন হয়েছে`, {
    ...base,
    icon: <span className="text-xl">👋</span>,
    className:
      "!rounded-2xl !border !border-green-200 !bg-green-50 !text-green-900 !font-semibold",
    progressClassName: "!bg-green-600",
  });

// সাইন ইন ব্যর্থ
export const toastLoginError = (message?: string) =>
  toast.error(message ?? "সাইন ইন করা যায়নি, আবার চেষ্টা করুন", {
    ...base,
    icon: <span className="text-xl">🔒</span>,
    className:
      "!rounded-2xl !border !border-red-200 !bg-red-50 !text-red-900 !font-semibold",
    progressClassName: "!bg-red-600",
  });

// সাইন আপ সফল
export const toastSignUpSuccess = () =>
  toast.success("অ্যাকাউন্ট তৈরি হয়েছে, স্বাগতম!", {
    ...base,
    icon: <span className="text-xl">🎉</span>,
    className:
      "!rounded-2xl !border !border-emerald-200 !bg-emerald-50 !text-emerald-900 !font-semibold",
    progressClassName: "!bg-emerald-600",
  });

// সাইন আপ ব্যর্থ
export const toastSignUpError = (message?: string) =>
  toast.error(message ?? "অ্যাকাউন্ট তৈরি করা যায়নি", {
    ...base,
    icon: <span className="text-xl">⚠️</span>,
    className:
      "!rounded-2xl !border !border-orange-200 !bg-orange-50 !text-orange-900 !font-semibold",
    progressClassName: "!bg-orange-500",
  });

// পাসওয়ার্ড মেলেনি
export const toastPasswordMismatch = () =>
  toast.warning("পাসওয়ার্ড দুটি মিলছে না", {
    ...base,
    icon: <span className="text-xl">🔑</span>,
    className:
      "!rounded-2xl !border !border-yellow-200 !bg-yellow-50 !text-yellow-900 !font-semibold",
    progressClassName: "!bg-yellow-500",
  });

// সাইন আউট
export const toastLogout = () =>
  toast.info("সফলভাবে সাইন আউট হয়েছে", {
    ...base,
    icon: <span className="text-xl">🚪</span>,
    className:
      "!rounded-2xl !border !border-sky-200 !bg-sky-50 !text-sky-900 !font-semibold",
    progressClassName: "!bg-sky-600",
  });
