type LoadingProps = {
  fullScreen?: boolean;
  label?: string;
};

export default function Loading({
  fullScreen = true,
  label = "Loading...",
}: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 ${
        fullScreen ? "min-h-screen" : "py-10"
      }`}
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}
