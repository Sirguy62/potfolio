"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Footer from "@/app/components/Footer";

export default function CheckoutClient() {
  const { hotelId, roomId } = useParams<{
    hotelId: string;
    roomId: string;
  }>();

  const searchParams = useSearchParams();
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!checkin || !checkout) {
      alert("Missing dates. Please restart booking.");
      return;
    }

    setLoading(true);

    // 🔥 This is what you'll later send to backend / Stripe / DB
    console.log("BOOKING DATA:", {
      hotelId,
      roomId,
      checkin,
      checkout,
      ...form,
    });

    setTimeout(() => {
      setLoading(false);
      router.push("/success");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-600 text-center">
          Checkout
        </h1>

        {/* ✅ Dates from flow (read-only) */}
        <p className="text-sm text-gray-600 text-center">
          Stay: <strong>{checkin}</strong> → <strong>{checkout}</strong>
        </p>

        <input
          name="fullName"
          placeholder="Full name"
          className="w-full border text-gray-600 rounded-md p-2"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border text-gray-600 rounded-md p-2"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border text-gray-600 rounded-md p-2"
          onChange={handleChange}
        />

        <input
          name="guests"
          type="number"
          min={1}
          className="w-full border text-gray-600 rounded-md p-2"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}
