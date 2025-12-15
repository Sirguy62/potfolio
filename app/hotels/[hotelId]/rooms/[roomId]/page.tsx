"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/app/components/Footer";

export default function CheckoutPage() {
  const { hotelId, roomId } = useParams<{
    hotelId: string;
    roomId: string;
  }>();

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    setLoading(true);

    // 🔥 Later this will call your payment API
    console.log("BOOKING DATA:", {
      hotelId,
      roomId,
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

        <div className="grid grid-cols-2 gap-3">
          <input
            name="checkin"
            type="date"
            className="border text-gray-600 rounded-md p-2"
            onChange={handleChange}
          />
          <input
            name="checkout"
            type="date"
            className="border text-gray-600 rounded-md p-2"
            onChange={handleChange}
          />
        </div>

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
