"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">
        Something went wrong!
      </h2>
      <p className="max-w-md text-center text-sm text-neutral-600">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
