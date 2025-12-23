"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Booking Confirmed 🎉
        </h1>
        <p className="mt-2 text-gray-600">
          Your reservation has been successfully placed.
        </p>
      </div>

      <button
        onClick={() => router.push("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
       Home
      </button>
    </div>
  );
}
